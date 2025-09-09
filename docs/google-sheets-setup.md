# Configuração do Google Sheets para Formulário de Contato

## 📋 Passo a Passo Completo

### 1. Criar Planilha no Google Sheets

1. **Acesse**: [sheets.google.com](https://sheets.google.com)
2. **Clique**: "Em branco" para criar nova planilha
3. **Renomeie**: "Contatos Vernity Web" (ou nome de sua preferência)
4. **Configure as colunas** na primeira linha:

```
A1: Data/Hora
B1: Nome
C1: Email
D1: Telefone
E1: Empresa
F1: Serviço
G1: Orçamento
H1: Prazo
I1: Mensagem
J1: IP
K1: User Agent
```

### 2. Compartilhar a Planilha

1. **Clique**: "Compartilhar" (canto superior direito)
2. **Adicione o email**: `vanessacardosodarocha6@gmail.com`
3. **Permissão**: "Editor" (para poder ver e editar)
4. **Envie convite**: ✅

### 3. Criar Service Account (Conta de Serviço)

#### 3.1 Acessar Google Cloud Console
1. **Acesse**: [console.cloud.google.com](https://console.cloud.google.com)
2. **Faça login** com sua conta Google
3. **Crie um novo projeto** ou selecione um existente

#### 3.2 Ativar Google Sheets API
1. **Vá para**: "APIs e Serviços" → "Biblioteca"
2. **Procure**: "Google Sheets API"
3. **Clique**: "Ativar"

#### 3.3 Criar Service Account
1. **Vá para**: "APIs e Serviços" → "Credenciais"
2. **Clique**: "Criar Credenciais" → "Conta de Serviço"
3. **Preencha**:
   - Nome: `vernity-web-form`
   - ID: `vernity-web-form` (será gerado automaticamente)
   - Descrição: `Service account para formulário de contato`
4. **Clique**: "Criar e Continuar"
5. **Função**: "Editor" (ou "Proprietário")
6. **Clique**: "Continuar" → "Concluído"

#### 3.4 Gerar Chave JSON
1. **Na lista de contas de serviço**, clique na conta criada
2. **Vá para**: "Chaves" → "Adicionar Chave" → "Criar Nova Chave"
3. **Tipo**: JSON
4. **Clique**: "Criar"
5. **Baixe o arquivo JSON** (guarde com segurança!)

### 4. Compartilhar Planilha com Service Account

1. **Abra sua planilha** no Google Sheets
2. **Clique**: "Compartilhar"
3. **Adicione o email do service account** (está no arquivo JSON baixado)
   - Formato: `vernity-web-form@seu-projeto.iam.gserviceaccount.com`
4. **Permissão**: "Editor"
5. **Clique**: "Enviar"

### 5. Configurar Variáveis de Ambiente no Netlify

#### 5.1 Acessar Painel Netlify
1. **Acesse**: [app.netlify.com](https://app.netlify.com)
2. **Selecione seu site**: `vernityweb`
3. **Vá para**: "Site settings" → "Environment variables"

#### 5.2 Adicionar Variáveis
Adicione estas variáveis (valores do arquivo JSON baixado):

```bash
# Google Sheets
GOOGLE_SHEETS_ID=1ABC123...XYZ789  # ID da planilha (da URL)
GOOGLE_SERVICE_ACCOUNT_EMAIL=vernity-web-form@seu-projeto.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n

# SendGrid (para emails)
SENDGRID_API_KEY=SG.abc123...xyz789
```

### 6. Obter ID da Planilha

**Da URL da planilha**:
```
https://docs.google.com/spreadsheets/d/1ABC123XYZ789/edit#gid=0
                                    ^^^^^^^^^^^^
                                    Este é o ID
```

### 7. Configurar SendGrid (Opcional - para emails)

#### 7.1 Criar Conta SendGrid
1. **Acesse**: [sendgrid.com](https://sendgrid.com)
2. **Crie conta gratuita** (100 emails/dia)
3. **Verifique seu domínio** ou use domínio do SendGrid

#### 7.2 Obter API Key
1. **Vá para**: "Settings" → "API Keys"
2. **Crie nova chave**: "Full Access" ou "Mail Send"
3. **Copie a chave** e adicione no Netlify

### 8. Testar a Integração

#### 8.1 Deploy da Função
```bash
# Fazer commit e push
git add .
git commit -m "feat: adiciona formulário customizado com Google Sheets"
git push origin main
```

#### 8.2 Testar Formulário
1. **Acesse**: `https://vernityweb.netlify.app`
2. **Preencha o formulário** com dados de teste
3. **Envie** e verifique:
   - ✅ Planilha atualizada
   - ✅ Email recebido em `nessasim@hotmail.com`

### 9. Estrutura Final

```
📁 Projeto
├── 📁 netlify/
│   ├── 📁 functions/
│   │   ├── contact.js          # Função serverless
│   │   └── package.json        # Dependências
│   └── netlify.toml           # Configuração
├── 📁 src/
│   └── 📁 components/
│       └── CustomContactForm.tsx # Formulário React
└── 📁 docs/
    └── google-sheets-setup.md    # Este guia
```

### 10. Troubleshooting

#### ❌ Erro: "Permission denied"
- **Verificar**: Service account tem acesso à planilha
- **Verificar**: Email do service account está correto

#### ❌ Erro: "Invalid credentials"
- **Verificar**: Variáveis de ambiente no Netlify
- **Verificar**: Chave privada está completa (com \n)

#### ❌ Erro: "Sheet not found"
- **Verificar**: ID da planilha está correto
- **Verificar**: Planilha existe e está compartilhada

#### ❌ Email não chega
- **Verificar**: SendGrid API key
- **Verificar**: Domínio verificado no SendGrid
- **Verificar**: Spam/lixo eletrônico

### 11. Comandos Úteis

```bash
# Ver logs da função
netlify logs --function contact

# Testar função localmente
netlify dev

# Ver variáveis de ambiente
netlify env:list
```

## ✅ Checklist Final

- [ ] Planilha criada e configurada
- [ ] Planilha compartilhada com `vanessacardosodarocha6@gmail.com`
- [ ] Service account criado
- [ ] Planilha compartilhada com service account
- [ ] Variáveis de ambiente configuradas no Netlify
- [ ] SendGrid configurado (opcional)
- [ ] Deploy realizado
- [ ] Teste do formulário funcionando

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs no Netlify
2. Teste a função localmente com `netlify dev`
3. Verifique as permissões do Google Sheets
4. Confirme as variáveis de ambiente
