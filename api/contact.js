/**
 * API de contato com Google Sheets + Email
 * Endpoint: /api/contact
 */

export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Lidar com preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Só aceitar POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ 
      error: 'Método não permitido. Use POST.' 
    });
    return;
  }

  try {
    const { name, email, message } = req.body;

    // Validação básica
    if (!name || !email || !message) {
      res.status(400).json({
        success: false,
        error: 'Campos obrigatórios: nome, email e mensagem são necessários.'
      });
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        success: false,
        error: 'Email inválido.'
      });
      return;
    }

    // Preparar dados
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown'
    };

    console.log('📧 Novo contato recebido:', contactData);

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
      // 2. Enviar email
      await sendEmail(contactData);
      results.email = true;
      console.log('✅ Email enviado para nessasim@hotmail.com');
    } catch (error) {
      console.error('❌ Erro ao enviar email:', error);
    }

    // Verificar se pelo menos uma integração funcionou
    const hasSuccess = results.googleSheets || results.email;
    
    if (!hasSuccess) {
      throw new Error('Falha em todas as integrações');
    }

    // Resposta de sucesso
    res.status(200).json({
      success: true,
      message: 'Contato enviado com sucesso! Entraremos em contato em breve.',
      data: {
        id: `contact_${Date.now()}`,
        timestamp: contactData.timestamp,
        integrations: results
      }
    });

  } catch (error) {
    console.error('Erro ao processar formulário:', error);
    
    res.status(500).json({
      success: false,
      error: 'Erro interno do servidor. Tente novamente mais tarde.'
    });
  }
}

// Função para salvar no Google Sheets
async function saveToGoogleSheets(contactData) {
  const { GoogleSpreadsheet } = require('google-spreadsheet');
  
  // Verificar variáveis de ambiente
  if (!process.env.GOOGLE_SHEETS_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
    throw new Error('Variáveis de ambiente do Google Sheets não configuradas');
  }

  try {
    // Inicializar planilha
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_ID);
    
    // Autenticar
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });

    // Carregar informações
    await doc.loadInfo();
    
    // Usar primeira aba
    let sheet = doc.sheetsByIndex[0];
    
    if (!sheet) {
      // Criar nova aba se não existir
      sheet = await doc.addSheet({
        title: 'Contatos',
        headerValues: ['Data/Hora', 'Nome', 'Email', 'Mensagem', 'IP']
      });
    }

    // Adicionar linha
    await sheet.addRow({
      'Data/Hora': contactData.timestamp,
      'Nome': contactData.name,
      'Email': contactData.email,
      'Mensagem': contactData.message,
      'IP': contactData.ip
    });

    return true;

  } catch (error) {
    console.error('Erro Google Sheets:', error);
    throw error;
  }
}

// Função para enviar email
async function sendEmail(contactData) {
  // Verificar API key do SendGrid
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY não configurada');
  }

  try {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'nessasim@hotmail.com',
      from: {
        email: 'noreply@vernityweb.com',
        name: 'Vernity Web'
      },
      subject: `🚀 Novo contato: ${contactData.name}`,
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
        🕐 Data/Hora: ${new Date(contactData.timestamp).toLocaleString('pt-BR')}
        
        💬 Mensagem:
        ${contactData.message}
        
        ---
        Responda diretamente para: ${contactData.email}
        IP: ${contactData.ip}
      `
    };

    await sgMail.send(msg);
    return true;

  } catch (error) {
    console.error('Erro SendGrid:', error);
    throw error;
  }
}