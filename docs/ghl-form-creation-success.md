# Criação de Formulário GoHighLevel - Passos que Funcionaram

## ✅ Configuração do Formulário GHL

### 1. Acesso ao GHL Form Builder
- **URL**: https://app.gohighlevel.com
- **Navegação**: Sites → Forms → Create New Form
- **Tipo**: Inline Form (para embed)

### 2. Configuração dos Campos
```
Campos Criados:
- Nome Completo (text, required)
- Email (email, required) 
- Mensagem (textarea, required)
- Checkbox de Consentimento (checkbox, required)
```

### 3. Configurações de Submissão
```
Submission Settings:
- Form Name: "Formulário de Contato"
- Thank You Message: "Obrigado! Entraremos em contato em breve."
- Redirect URL: (deixar vazio para mensagem inline)
```

### 4. Configurações de Contato
```
Contact Creation:
- Create Contact: ✅ Ativado
- Update Existing: ✅ Ativado
- Contact Source: "Website Form"
- Tags: "lead", "website"
```

## ✅ Publicação e Embed

### 1. Publicar Formulário
- **Status**: Published ✅
- **Visibility**: Public
- **Form ID**: `0aIDsHXZl6w4uZQXecUo`

### 2. Obter URL de Embed
```
Embed Code:
<iframe src="https://api.leadconnectorhq.com/widget/form/0aIDsHXZl6w4uZQXecUo" 
        style="width:100%;height:100%;border:none;border-radius:4px" 
        id="inline-0aIDsHXZl6w4uZQXecUo" 
        data-layout="{'id':'INLINE'}" 
        data-trigger-type="alwaysShow" 
        data-trigger-value="" 
        data-activation-type="alwaysActivated" 
        data-activation-value="" 
        data-deactivation-type="neverDeactivate" 
        data-deactivation-value="" 
        data-form-name="Formulário de Contato" 
        data-height="460" 
        data-layout-iframe-id="inline-0aIDsHXZl6w4uZQXecUo" 
        data-form-id="0aIDsHXZl6w4uZQXecUo" 
        title="Formulário de Contato">
</iframe>
```

### 3. URL Final para Integração
```
GHL_FORM_URL = "https://api.leadconnectorhq.com/widget/form/0aIDsHXZl6w4uZQXecUo"
```

## ✅ Integração no Next.js

### 1. Componente GhlFormIframe
```typescript
// src/components/ui/GhlFormIframe.tsx
export default function GhlFormIframe({ url }: { url: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative" style={{ minHeight: 500 }}>
      <iframe
        src={url}
        style={{
          width: "100%",
          minHeight: 500,
          border: "none",
          borderRadius: 12,
          background: "transparent",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out"
        }}
        title="Formulário de Contato"
        onLoad={handleIframeLoad}
        allow="forms"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        data-preload="true"
      />
    </div>
  );
}
```

### 2. Implementação na Seção Connect
```typescript
// src/sections/Connect.tsx
const GHL_FORM_URL = "https://api.leadconnectorhq.com/widget/form/0aIDsHXZl6w4uZQXecUo";

// No JSX:
<GhlFormIframe url={GHL_FORM_URL} />
```

## ✅ Workflow de Automação

### 1. Configuração do Workflow
```
Trigger: Form Submission
Actions:
1. Create/Update Contact
2. Send Confirmation Email
3. Add Tags
4. Send Internal Notification
```

### 2. Configurações do Workflow
```
Contact Creation:
- First Name: {form.nome}
- Email: {form.email}
- Phone: (se disponível)
- Source: "Website Form"
- Tags: "lead", "website", "form-submission"

Email Confirmation:
- Template: "Obrigado pelo contato"
- To: {contact.email}
- Subject: "Recebemos sua mensagem"
```

## ✅ Funcionalidades que Funcionaram

### 1. Submissão do Formulário
- ✅ **Validação**: Campos obrigatórios funcionando
- ✅ **Submissão**: Dados enviados para GHL
- ✅ **Confirmação**: Mensagem de sucesso exibida
- ✅ **Contato**: Criado automaticamente no GHL

### 2. Integração com GHL
- ✅ **API**: Comunicação funcionando
- ✅ **Workflow**: Automação ativa
- ✅ **Emails**: Envio automático funcionando
- ✅ **Tags**: Aplicadas corretamente

### 3. Performance
- ✅ **Loading**: Estado de carregamento
- ✅ **Otimização**: DNS prefetch e preconnect
- ✅ **Lighthouse**: Score otimizado
- ✅ **Responsivo**: Mobile e desktop

## ✅ Estrutura Final

```
Formulário GHL:
├── Campos: Nome, Email, Mensagem, Checkbox
├── Validação: Campos obrigatórios
├── Submissão: Para GHL API
├── Workflow: Automação completa
├── Integração: Next.js iframe
└── Performance: Otimizada
```

## ✅ URLs e IDs Finais

```
Form ID: 0aIDsHXZl6w4uZQXecUo
Form URL: https://api.leadconnectorhq.com/widget/form/0aIDsHXZl6w4uZQXecUo
Status: Published ✅
Funcionalidade: 100% operacional
```

## 🚀 Status: FORMULÁRIO GHL CRIADO COM SUCESSO

Todos os passos acima foram testados e funcionam perfeitamente em produção. O formulário está recebendo submissões e criando contatos automaticamente no GHL.
