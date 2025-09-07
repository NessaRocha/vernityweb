# 📋 Implementação Netlify Forms - Passo a Passo

> **Documento de implementação atualizado em tempo real conforme ajustes são feitos**

## 🎯 Objetivo
Implementar formulário de contato funcional no Netlify com todas as configurações necessárias.

---

## ✅ **PASSO 1: Preparação do Formulário** *(Concluído)*

### **1.1 Atributos da Tag `<form>` Adicionados:**
```tsx
<form 
  name="contato-site"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  action="/contato/sucesso"
  onSubmit={handleSubmit} 
  className="space-y-6"
  aria-label="Formulário de contato"
>
```

### **1.2 Campos Ocultos Implementados:**
```tsx
{/* Campos ocultos para Netlify Forms */}
<input type="hidden" name="form-name" value="contato-site" />
<p style={{display:"none"}}>
  <label>Não preencha: <input name="bot-field" /></label>
</p>
```

### **1.3 Campos com Names Corretos:**
- ✅ `name="name"` - Nome
- ✅ `name="email"` - Email  
- ✅ `name="subject"` - Assunto (novo campo adicionado)
- ✅ `name="message"` - Mensagem

### **1.4 Estado do Formulário Atualizado:**
```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',  // ← Novo campo
  message: ''
});
```

### **1.5 Página de Sucesso Criada:**
- ✅ Arquivo: `src/app/contato/sucesso/page.tsx`
- ✅ Design consistente com o site
- ✅ Botões para navegação

---

## ✅ **PASSO 2: Configuração Next.js para Netlify** *(Concluído)*

### **2.1 next.config.ts Atualizado:**
```typescript
const nextConfig: NextConfig = {
  output: 'export',           // ← Adicionado para exportação estática
  trailingSlash: true,
  images: {
    unoptimized: true,        // ← Alterado para Netlify
    formats: ['image/webp'],
    // ... resto da configuração
  },
  // ... resto da configuração
};
```

---

## ✅ **PASSO 3: Arquivos de Configuração Netlify** *(Concluído)*

### **3.1 netlify.toml Criado:**
```toml
[build]
  command = "npm run build"
  publish = "out"
  [build.environment]
    NODE_VERSION = "20"
    NPM_VERSION = "10"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Headers de segurança e performance
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    # ... outros headers
```

### **3.2 public/_headers Criado:**
```
# Headers globais para todas as páginas
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  # ... outros headers

# Cache otimizado para assets
/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

### **3.3 public/_redirects Criado:**
```
# Redirecionamento principal para SPA
/*    /index.html   200
```

---

## ✅ **PASSO 3.5: Função CRM** *(Concluído)*

### **3.5.1 Função Netlify Criada:**
```typescript
// netlify/functions/forward-to-crm.ts
export const handler = async (event: any) => {
  // Processa dados do formulário
  // Envia para GHL_WEBHOOK_URL ou FALLBACK_WEBHOOK_URL
  // Log se nenhum webhook configurado
}
```

### **3.5.2 Configuração de Webhooks:**
- ✅ **GHL_WEBHOOK_URL:** URL principal do GoHighLevel
- ✅ **FALLBACK_WEBHOOK_URL:** URL de fallback
- ✅ **Fallback inteligente:** Se GHL não existir, usa fallback
- ✅ **Log de segurança:** Se nenhum webhook, apenas loga

### **3.5.3 Dados Enviados:**
```json
{
  "name": "Nome do usuário",
  "email": "email@exemplo.com",
  "subject": "Assunto da mensagem",
  "message": "Conteúdo da mensagem",
  "source": "Website Vernety Web / Netlify",
  "submittedAt": "2025-01-09T10:30:00.000Z"
}
```

---

## 🔄 **PASSO 4: Deploy no Netlify** *(Em Andamento)*

### **4.1 Preparação:**
- [x] ✅ Erros de ESLint corrigidos (Link components)
- [x] ✅ Formulário ajustado para submit nativo (removido preventDefault)
- [x] ✅ UX melhorada: mensagem de sucesso inline
- [x] ✅ Estados de loading e sucesso implementados
- [x] ✅ Commit e push realizados pelo usuário
- [x] ✅ Deploy em andamento para teste
- [ ] Verificar se build local funciona: `npm run build`

### **4.2 Deploy Automático:**
- [x] ✅ Repositório já conectado ao Netlify
- [x] ✅ Build settings já configurados
- [x] ✅ Push automático gera novo deploy
- [ ] Testar formulário no site atualizado

### **4.3 Configurações Pós-Deploy:**
- [ ] Configurar notificações de formulário
- [ ] Configurar função CRM no painel Netlify
- [ ] Testar envio de formulário
- [ ] Verificar página de sucesso
- [ ] Configurar domínio personalizado (se necessário)

---

## 📋 **VERIFICAÇÃO DE ETAPAS - STATUS**

### **✅ ETAPA 1: Função CRM Criada** *(Concluída)*
- [x] ✅ Arquivo `netlify/functions/forward-to-crm.ts` criado
- [x] ✅ Código implementado com fallback inteligente
- [x] ✅ Configuração `netlify.toml` atualizada
- [x] ✅ Redirecionamento configurado

### **✅ ETAPA 2: Deploy Realizado** *(Concluída)*
- [x] ✅ Código commitado e enviado para GitHub
- [x] ✅ Deploy automático executado no Netlify
- [x] ✅ Função disponível em `/.netlify/functions/forward-to-crm`
- [x] ✅ Formulário estático criado para detecção do Netlify

### **🔄 ETAPA 3: Ligar Forms → Function** *(Pendente)*
**Ação necessária no painel Netlify:**
1. **Acesse:** [netlify.com](https://netlify.com) → Seu Site
2. **Vá em:** Settings → Forms → Form submissions
3. **Clique em:** Outgoing notifications → Add notification
4. **Configure:**
   - **Tipo:** Netlify Function
   - **Função:** forward-to-crm
   - **Salve**

### **🔄 ETAPA 4: Configurar FALLBACK_WEBHOOK_URL** *(Pendente)*

#### **Opção A: Via CLI (Recomendado)**
```bash
# Configurar fallback para teste
npx netlify env:set FALLBACK_WEBHOOK_URL "https://SUA_URL_TEMPORARIA_DO_WEBHOOK"

# Verificar se foi configurado
npx netlify env:list
```

#### **Opção B: Via Painel Web**
1. **Acesse:** Site Settings → Environment variables
2. **Adicione:** `FALLBACK_WEBHOOK_URL` = URL temporária
3. **Salve**

#### **Opção C: Notificação por Email (Alternativa)**
- **Acesse:** Settings → Forms → Notifications → Email
- **Configure:** Email para receber notificações
- **Ative:** Notificações por email

### **🔄 ETAPA 5: Testar Integração** *(Pendente)*
1. **Envie um formulário** no site
2. **Verifique:** Dashboard → Forms → Submissions
3. **Confirme:** Dados chegaram no webhook/CRM
4. **Teste:** Logs da função no Netlify

---

## 🔄 **PASSO 5: Testes e Ajustes** *(Futuro)*

### **5.1 Testes a Realizar:**
- [ ] Envio de formulário funcional
- [ ] Recebimento de notificações
- [ ] Página de sucesso funcionando
- [ ] Responsividade mantida
- [ ] Performance do site

### **5.2 Possíveis Ajustes:**
- [ ] Ajustes de estilo se necessário
- [ ] Otimizações de performance
- [ ] Configurações adicionais de segurança

---

## 📝 **Log de Mudanças**

### **Data: 09/01/2025**
- ✅ Formulário preparado para Netlify Forms
- ✅ Configuração Next.js atualizada
- ✅ Arquivos de configuração Netlify criados
- ✅ Página de sucesso implementada
- ✅ Erros de ESLint corrigidos (Link components)
- ✅ Documento atualizado com fluxo de deploy automático
- ✅ Formulário ajustado para submit nativo (removido preventDefault e onSubmit)
- ✅ UX melhorada: mensagem de sucesso inline (sem redirecionamento)
- ✅ Estados de loading e sucesso implementados
- ✅ Mensagem de sucesso com auto-dismiss (4 segundos)
- ✅ Botão "Enviar Outra Mensagem" removido
- ✅ Função Netlify criada para encaminhar dados para CRM
- ✅ Configuração de webhooks (GHL_WEBHOOK_URL e FALLBACK_WEBHOOK_URL)
- ✅ Instruções de configuração no painel Netlify adicionadas
- ✅ Opção de configuração via CLI incluída

### **Próximas Atualizações:**
- [ ] Log do processo de deploy
- [ ] Resultados dos testes
- [ ] Ajustes realizados
- [ ] Configurações finais

---

## 🚨 **Troubleshooting**

### **Problemas Conhecidos:**
- Nenhum problema identificado até o momento

### **Soluções Aplicadas:**
- Nenhuma solução aplicada até o momento

---

## 📊 **Status Atual**

- **Formulário:** ✅ Pronto
- **Configuração:** ✅ Pronto  
- **Deploy:** 🔄 Pendente
- **Testes:** 🔄 Pendente
- **Produção:** 🔄 Pendente

**Última atualização:** [Data atual]
