# GoHighLevel (GHL) - Guia Prático para Landing Pages

## 📋 GHL Overview

### O que é GoHighLevel?
Plataforma de marketing que cria formulários, landing pages e automação de leads.

### Para que serve?
- ✅ **Capturar leads** com formulários
- ✅ **Automatizar emails** de follow-up
- ✅ **Gerenciar contatos** em CRM
- ✅ **Medir conversões** com analytics

---

## 🎯 GHL for Conversion

### Formulário que converte
```
Campos essenciais:
- Nome (obrigatório)
- Email (obrigatório) 
- Telefone (opcional)
- Checkbox de consentimento (obrigatório)
```

### Automação básica
```
1. Lead preenche formulário
2. GHL cria contato automaticamente
3. Envia email de boas-vindas
4. Adiciona tags para segmentação
```

---

## 🔧 Implementation Options

### 1. **GHL Standalone** (Recomendado)

#### O que é?
Usar apenas o GHL para formulário e automação.

#### Roadmap (1 dia)
```
Manhã: Configurar GHL
├── Criar conta (15 min)
├── Criar formulário (30 min)
└── Configurar allowed domains (15 min)

Tarde: Integrar
├── Adicionar no Next.js (30 min)
├── Testar localmente (15 min)
└── Fazer deploy (15 min)

Final do dia: Automação
├── Configurar workflow (30 min)
├── Testar emails (15 min)
└── Monitorar leads (15 min)
```

#### Vantagens
- ✅ **Simples**: Tudo em uma plataforma
- ✅ **Rápido**: 1 dia para implementar
- ✅ **Barato**: Apenas GHL

---

### 2. **GHL + Custom Form**

#### O que é?
Formulário personalizado integrado com GHL.

#### Roadmap (1 dia)
```
Manhã: Desenvolvimento
├── Criar formulário customizado (2h)
├── Implementar validações (1h)
└── Conectar com GHL API (1h)

Tarde: Deploy
├── Testar integração (30 min)
├── Configurar automação (30 min)
└── Deploy em produção (30 min)
```

#### Vantagens
- ✅ **Design personalizado**: Controle total
- ✅ **Performance**: Formulário nativo
- ✅ **Rápido**: 1 dia para implementar

#### Desvantagens
- ❌ **Mais complexo**: Requer desenvolvimento

---

### 3. **GHL + JotForms**

#### O que é?
JotForms para formulários avançados + GHL para automação.

#### Roadmap (1 dia)
```
Manhã: Configuração
├── Criar conta JotForms (30 min)
├── Configurar integração GHL (1h)
└── Criar formulário avançado (1h)

Tarde: Deploy
├── Integrar no Next.js (1h)
├── Testar automação (30 min)
└── Deploy em produção (30 min)
```

#### Vantagens
- ✅ **Formulários avançados**: Campos condicionais
- ✅ **Design profissional**: Templates prontos
- ✅ **Rápido**: 1 dia para implementar

#### Desvantagens
- ❌ **Custo adicional**: JotForms + GHL
- ❌ **Mais complexo**: Duas plataformas

---

## 🎯 Qual Escolher?

### **Para a maioria dos casos**: GHL Standalone
- Simples, rápido e funcional
- 1 dia para implementar
- Custo-benefício excelente

### **Para design específico**: GHL + Custom Form
- Quando precisa de design único
- 1 dia para desenvolver
- Controle total sobre UX

### **Para formulários complexos**: GHL + JotForms
- Campos condicionais
- Cálculos automáticos
- 1 dia para implementar
- Orçamento para duas plataformas

---

## 🚀 Implementação Rápida (GHL Standalone)

### 1. Configurar GHL
```
1. Acessar: https://app.gohighlevel.com
2. Sites → Forms → Create New Form
3. Adicionar campos: Nome, Email, Mensagem
4. Marcar campos como obrigatórios
5. Publicar formulário
6. Copiar URL do embed
```

### 2. Integrar no Projeto
```typescript
// Usar componente existente
<GhlFormIframe url="https://api.leadconnectorhq.com/widget/form/SEU_FORM_ID" />
```

### 3. Deploy
```bash
npm run build
git push origin master
```

### 4. Configurar Automação
```
1. GHL → Workflows → Create Workflow
2. Trigger: Form Submission
3. Actions: Create Contact + Send Email
4. Ativar workflow
```

**Pronto! Formulário funcionando em 1 dia.** 🚀
