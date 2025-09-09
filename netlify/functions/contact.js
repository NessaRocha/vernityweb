/**
 * Netlify Function para processar formulário de contato customizado
 * Integra com Google Sheets e envia email
 * Endpoint: /.netlify/functions/contact
 */

exports.handler = async (event, context) => {
  // Configurar CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Lidar com preflight requests (OPTIONS)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Só aceitar POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ 
        error: 'Método não permitido. Use POST.' 
      })
    };
  }

  try {
    // Parse dos dados do formulário
    const formData = JSON.parse(event.body);
    const { 
      name, 
      email, 
      phone, 
      company, 
      message, 
      service,
      budget,
      timeline,
      source = 'website'
    } = formData;

    // Validação básica dos campos obrigatórios
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Campos obrigatórios: nome, email e mensagem são necessários.'
        })
      };
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Email inválido.'
        })
      };
    }

    // Preparar dados para envio
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      company: company ? company.trim() : '',
      message: message.trim(),
      service: service || 'Não especificado',
      budget: budget || 'Não especificado',
      timeline: timeline || 'Não especificado',
      source,
      timestamp: new Date().toISOString(),
      userAgent: event.headers['user-agent'] || '',
      ip: event.headers['client-ip'] || event.headers['x-forwarded-for'] || 'unknown'
    };

    // Log dos dados recebidos (para debug)
    console.log('Novo contato recebido:', {
      name: contactData.name,
      email: contactData.email,
      service: contactData.service,
      timestamp: contactData.timestamp
    });

    // Executar integrações
    const results = {
      googleSheets: false,
      email: false
    };

    try {
      // 1. Salvar no Google Sheets
      await saveToGoogleSheets(contactData);
      results.googleSheets = true;
      console.log('✅ Dados salvos no Google Sheets');
    } catch (error) {
      console.error('❌ Erro ao salvar no Google Sheets:', error);
    }

    try {
      // 2. Enviar email de notificação
      await sendNotificationEmail(contactData);
      results.email = true;
      console.log('✅ Email enviado com sucesso');
    } catch (error) {
      console.error('❌ Erro ao enviar email:', error);
    }

    // Verificar se pelo menos uma integração funcionou
    const hasSuccess = results.googleSheets || results.email;
    
    if (!hasSuccess) {
      throw new Error('Falha em todas as integrações');
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Contato enviado com sucesso! Entraremos em contato em breve.',
        data: {
          id: `contact_${Date.now()}`,
          timestamp: contactData.timestamp,
          integrations: results
        }
      })
    };

  } catch (error) {
    console.error('Erro ao processar formulário:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Erro interno do servidor. Tente novamente mais tarde.'
      })
    };
  }
};

// Função para salvar no Google Sheets
async function saveToGoogleSheets(contactData) {
  const { GoogleSpreadsheet } = require('google-spreadsheet');
  
  // Verificar se as variáveis de ambiente estão configuradas
  if (!process.env.GOOGLE_SHEETS_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
    throw new Error('Variáveis de ambiente do Google Sheets não configuradas');
  }

  try {
    // Inicializar a planilha
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_ID);
    
    // Autenticar com service account
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });

    // Carregar informações da planilha
    await doc.loadInfo();
    
    // Usar a primeira aba (ou criar uma se não existir)
    let sheet = doc.sheetsByIndex[0];
    
    if (!sheet) {
      // Criar nova aba se não existir
      sheet = await doc.addSheet({
        title: 'Contatos',
        headerValues: [
          'Data/Hora',
          'Nome',
          'Email',
          'Telefone',
          'Empresa',
          'Serviço',
          'Orçamento',
          'Prazo',
          'Mensagem',
          'IP',
          'User Agent'
        ]
      });
    }

    // Adicionar nova linha com os dados
    await sheet.addRow({
      'Data/Hora': contactData.timestamp,
      'Nome': contactData.name,
      'Email': contactData.email,
      'Telefone': contactData.phone,
      'Empresa': contactData.company,
      'Serviço': contactData.service,
      'Orçamento': contactData.budget,
      'Prazo': contactData.timeline,
      'Mensagem': contactData.message,
      'IP': contactData.ip,
      'User Agent': contactData.userAgent
    });

    console.log('✅ Dados salvos no Google Sheets com sucesso');
    return true;

  } catch (error) {
    console.error('❌ Erro ao salvar no Google Sheets:', error);
    throw error;
  }
}

// Função para enviar email de notificação
async function sendNotificationEmail(contactData) {
  // Verificar se a API key do SendGrid está configurada
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY não configurada');
  }

  try {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'nessasim@hotmail.com', // Email de destino
      from: {
        email: 'noreply@vernityweb.com', // Email de origem (deve ser verificado no SendGrid)
        name: 'Vernity Web'
      },
      subject: `🚀 Novo contato recebido: ${contactData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #53389e, #cac6ec); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🚀 Novo Contato Recebido!</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 25px; border-radius: 8px; border-left: 4px solid #53389e;">
            <h2 style="color: #344054; margin-top: 0;">📋 Informações do Contato</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #344054; width: 120px;">👤 Nome:</td>
                <td style="padding: 8px 0; color: #667085;">${contactData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #344054;">📧 Email:</td>
                <td style="padding: 8px 0; color: #667085;">
                  <a href="mailto:${contactData.email}" style="color: #53389e; text-decoration: none;">${contactData.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #344054;">📱 Telefone:</td>
                <td style="padding: 8px 0; color: #667085;">${contactData.phone || 'Não informado'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #344054;">🏢 Empresa:</td>
                <td style="padding: 8px 0; color: #667085;">${contactData.company || 'Não informado'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #344054;">🛠️ Serviço:</td>
                <td style="padding: 8px 0; color: #667085;">${contactData.service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #344054;">💰 Orçamento:</td>
                <td style="padding: 8px 0; color: #667085;">${contactData.budget}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #344054;">⏰ Prazo:</td>
                <td style="padding: 8px 0; color: #667085;">${contactData.timeline}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #344054;">🕐 Data/Hora:</td>
                <td style="padding: 8px 0; color: #667085;">${new Date(contactData.timestamp).toLocaleString('pt-BR')}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #eeecf8; padding: 25px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #344054; margin-top: 0;">💬 Mensagem:</h3>
            <p style="color: #667085; line-height: 1.6; margin: 0; white-space: pre-wrap;">${contactData.message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${contactData.email}" 
               style="background: #53389e; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
              📧 Responder Agora
            </a>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #d0d5dd; text-align: center; color: #667085; font-size: 12px;">
            <p>Este email foi enviado automaticamente pelo formulário de contato do site Vernity Web.</p>
            <p>IP: ${contactData.ip} | ${new Date().toLocaleString('pt-BR')}</p>
          </div>
        </div>
      `,
      text: `
        🚀 NOVO CONTATO RECEBIDO!
        
        👤 Nome: ${contactData.name}
        📧 Email: ${contactData.email}
        📱 Telefone: ${contactData.phone || 'Não informado'}
        🏢 Empresa: ${contactData.company || 'Não informado'}
        🛠️ Serviço: ${contactData.service}
        💰 Orçamento: ${contactData.budget}
        ⏰ Prazo: ${contactData.timeline}
        🕐 Data/Hora: ${new Date(contactData.timestamp).toLocaleString('pt-BR')}
        
        💬 Mensagem:
        ${contactData.message}
        
        ---
        Responda diretamente para: ${contactData.email}
        IP: ${contactData.ip}
      `
    };

    await sgMail.send(msg);
    console.log('✅ Email enviado com sucesso para nessasim@hotmail.com');
    return true;

  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
    throw error;
  }
}
