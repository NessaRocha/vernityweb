# 🚀 Formulário Customizado - Setup Completo

## ✅ O que foi implementado:

### 1. **Função Serverless** (`netlify/functions/contact.js`)
- ✅ Processa dados do formulário
- ✅ Salva no Google Sheets
- ✅ Envia email para `nessasim@hotmail.com`
- ✅ Validação de dados
- ✅ Tratamento de erros

### 2. **Formulário React** (`src/components/ui/CustomContactForm.tsx`)
- ✅ Design responsivo e moderno
- ✅ Validação em tempo real
- ✅ Estados de loading/success/error
- ✅ Campos: Nome, Email, Telefone, Empresa, Serviço, Orçamento, Prazo, Mensagem

### 3. **Integração na Página** (`src/sections/Connect.tsx`)
- ✅ Formulário customizado como padrão
- ✅ GHL oculto temporariamente
- ✅ Foco total no Google Sheets + Email

## 🔧 Próximos Passos para Ativar:

### **Passo 1: Configurar Google Sheets**

1. **Criar planilha**:
   - Acesse [sheets.google.com](https://sheets.google.com)
   - Crie nova planilha: "Contatos Vernity Web"
   - Configure as colunas (já está no guia `docs/google-sheets-setup.md`)

2. **Compartilhar planilha**:
   - Compartilhe com: `vanessacardosodarocha6@gmail.com` (Editor)
   - Compartilhe com: service account (Editor) - ver guia completo

### **Passo 2: Configurar Service Account**

Siga o guia completo em: `docs/google-sheets-setup.md`

### **Passo 3: Configurar Variáveis no Netlify**

No painel do Netlify → Site settings → Environment variables:

```bash
# Google Sheets
GOOGLE_SHEETS_ID=1ABC123...XYZ789
GOOGLE_SERVICE_ACCOUNT_EMAIL=vernity-web-form@seu-projeto.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n

# SendGrid (opcional - para emails)
SENDGRID_API_KEY=SG.abc123...xyz789
```

### **Passo 4: Deploy**

```bash
git add .
git commit -m "feat: adiciona formulário customizado com Google Sheets"
git push origin main
```

## 🎯 Como Funciona:

### **Fluxo do Formulário Customizado:**
1. **Usuário preenche** formulário na página
2. **Dados são enviados** para `/.netlify/functions/contact`
3. **Função serverless**:
   - Valida os dados
   - Salva no Google Sheets
   - Envia email para `nessasim@hotmail.com`
4. **Usuário recebe** confirmação de sucesso

### **Vantagens do Formulário Customizado:**
- ✅ **Controle total** dos dados
- ✅ **Backup automático** no Google Sheets
- ✅ **Email instantâneo** com todos os detalhes
- ✅ **Design personalizado** e responsivo
- ✅ **Validação avançada** de campos
- ✅ **Logs detalhados** para debug

## 📊 Dados Salvos:

### **No Google Sheets:**
- Data/Hora
- Nome
- Email
- Telefone
- Empresa
- Serviço
- Orçamento
- Prazo
- Mensagem
- IP
- User Agent

### **No Email:**
- Template HTML bonito
- Todos os dados organizados
- Botão para responder diretamente
- Informações técnicas (IP, timestamp)

## 🎯 Formulário Ativo:

Na página de contato, apenas o **Formulário Customizado** está ativo:
- ✅ **Google Sheets**: Backup automático dos dados
- ✅ **Email**: Notificações para `nessasim@hotmail.com`
- ✅ **Design**: Interface moderna e responsiva
- ✅ **Validação**: Tempo real e server-side

O formulário GHL foi temporariamente oculto para focar no novo sistema.

## 🚨 Troubleshooting:

### **Se o formulário não funcionar:**
1. Verifique logs no Netlify: `netlify logs --function contact`
2. Confirme variáveis de ambiente
3. Teste localmente: `netlify dev`

### **Se Google Sheets não atualizar:**
1. Verifique permissões do service account
2. Confirme ID da planilha
3. Verifique chave privada (deve ter `\n`)

### **Se email não chegar:**
1. Verifique SendGrid API key
2. Confirme domínio verificado
3. Verifique spam/lixo eletrônico

## 📁 Arquivos Criados/Modificados:

```
📁 netlify/
├── 📁 functions/
│   ├── contact.js              # Função serverless
│   └── package.json           # Dependências
└── netlify.toml               # Configuração atualizada

📁 src/
├── 📁 components/ui/
│   ├── CustomContactForm.tsx  # Formulário React
│   └── index.ts              # Export atualizado
└── 📁 sections/
    └── Connect.tsx           # Página de contato atualizada

📁 docs/
├── google-sheets-setup.md    # Guia Google Sheets
└── formulario-customizado-setup.md # Este arquivo
```

## 🎉 Status: PRONTO PARA USO!

O formulário customizado está **100% implementado** e pronto para funcionar assim que você configurar as variáveis de ambiente no Netlify.

**Próximo passo**: Siga o guia `docs/google-sheets-setup.md` para configurar o Google Sheets e fazer o deploy!
