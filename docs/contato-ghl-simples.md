# 📋 Contato GHL Simples - Guia Rápido

## 🎯 Objetivo
Somente receber envios e visualizá-los em **Forms → Submissions** e **Contacts** no GHL.

---

## 🚀 Como Embutir

### **1. Usar GhlFormIframe**
```tsx
import { GhlFormIframe } from '@/components/ui';

const GHL_FORM_URL = "https://api.leadconnectorhq.com/widget/form/SEU_FORM_ID";

<GhlFormIframe url={GHL_FORM_URL} />
```

### **2. URL do Formulário**
- **No GHL:** Sites → Forms → (seu formulário) → Integrate/Embed → copiar URL completa
- **Exemplo:** `https://api.leadconnectorhq.com/widget/form/D2IyQTHFUCwKIXbgZU2P`

---

## ⚙️ Configurações no GHL

### **Form Builder → Settings/Options:**
- ✅ **Save/Store Submissions** = ON
- ✅ **Create/Update Contact on Submission** = ON
- ❌ **reCAPTCHA** = OFF (para testes; ligar depois se quiser)
- ✅ **Save** → **Publish**

### **Allowed Domains:**
- **Settings** → **Business Profile** → **Allowed Domains/URLs**
- **Adicionar:** `seu-site.netlify.app` (e domínio custom)

---

## 📊 Onde Ver os Envios

### **No GHL:**
1. **Sites** → **Forms** → **Submissions** (dados do formulário)
2. **Contacts** (contatos criados/atualizados)

---

## 🧹 Limpeza Realizada

### **Removido:**
- ❌ Netlify Forms/Functions/Webhooks
- ❌ `data-netlify`, `netlify-honeypot`, `form-name`
- ❌ `netlify/functions/` (diretório)
- ❌ Scripts GHL desnecessários
- ❌ `DEPLOY_NETLIFY.md` (documentação antiga)

### **Mantido:**
- ✅ `netlify.toml` minimalista
- ✅ Formulário GHL via iframe
- ✅ Componente `GhlFormIframe` padronizado

---

## 🔧 Remover Env Vars no Netlify

### **No Painel Netlify:**
1. **Site** → **Settings** → **Environment variables**
2. **Deletar:** `GHL_WEBHOOK_URL`, `GHL_API_KEY`, etc. (se existirem)

---

## ✅ Teste

### **Verificar:**
1. **Acessar** `/contato` publicado
2. **Enviar** formulário de teste
3. **Confirmar** em **Submissions/Contacts** no GHL

---

## 📁 Arquivos Alterados

- ✅ `src/components/ui/GhlFormIframe.tsx` (novo)
- ✅ `src/components/ui/index.ts` (export adicionado)
- ✅ `src/sections/Connect.tsx` (componente padronizado)
- ✅ `src/app/layout.tsx` (script removido)
- ❌ `DEPLOY_NETLIFY.md` (removido)
- ❌ `netlify/functions/` (removido)

---

## 🎯 Status Final

- **Formulário:** ✅ GHL via iframe
- **Submissões:** ✅ Forms → Submissions
- **Contatos:** ✅ Contacts
- **Limpeza:** ✅ Completa
- **Padronização:** ✅ Concluída

**Última atualização:** Janeiro 2025
