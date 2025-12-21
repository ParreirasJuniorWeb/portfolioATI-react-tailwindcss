# 🔒 Guia de Implementação de Melhorias de Segurança

**Sistema:** Portal ATI SES-MG  
**Data:** 2025  
**Versão:** 1.0

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Melhorias Prioritárias](#melhorias-prioritárias)
3. [Implementação Passo a Passo](#implementação-passo-a-passo)
4. [Testes de Segurança](#testes-de-segurança)
5. [Checklist Final](#checklist-final)

---

## 🎯 Visão Geral

Este guia detalha como implementar as melhorias de segurança identificadas na auditoria. As melhorias estão organizadas por prioridade e incluem exemplos de código prontos para uso.

**Tempo Total Estimado:** 3-4 horas  
**Complexidade:** Média  
**Impacto:** Alto

---

## 🔴 Melhorias Prioritárias

### Prioridade ALTA (Implementar Hoje):

1. ✅ **Sanitização de Entrada** - 30 min
2. ✅ **Validação de URL** - 20 min
3. ⚠️ **Rate Limiting** - 15 min
4. ⚠️ **Ofuscação de E-mails** - 15 min

### Prioridade MÉDIA (Implementar Esta Semana):

5. **Content Security Policy** - 30 min
6. **HTTPS em Produção** - 1 hora
7. **Headers de Segurança** - 20 min

---

## 🛠️ Implementação Passo a Passo

### 1. ✅ Sanitização de Entrada (CONCLUÍDO)

**Arquivo Criado:** `src/utils/security.js`

**Status:** ✅ Utilitários de segurança criados

**Próximo Passo:** Integrar no ContactForm.jsx

#### Implementação no ContactForm:

```javascript
// src/components/ContactForm.jsx

// 1. Importar funções de segurança
import { 
  sanitizeInput, 
  validateMailtoUrl, 
  checkRateLimit,
  getContactEmails,
  detectSuspiciousContent 
} from '../utils/security';

// 2. Adicionar estado para rate limiting
const [lastSubmitTime, setLastSubmitTime] = useState(0);

// 3. Modificar handleChange para sanitizar entrada
const handleChange = (e) => {
  const { name, value } = e.target;
  
  // Sanitiza entrada
  const sanitizedValue = sanitizeInput(value);
  
  // Detecta conteúdo suspeito
  const suspiciousCheck = detectSuspiciousContent(sanitizedValue);
  if (!suspiciousCheck.valid) {
    toast.warning(`Conteúdo suspeito detectado: ${suspiciousCheck.reason}`);
    return;
  }
  
  setFormData(prev => ({
    ...prev,
    [name]: sanitizedValue
  }));
  
  // Limpa erro do campo
  if (errors[name]) {
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  }
};

// 4. Modificar handleSubmit para adicionar validações
const handleSubmit = (e) => {
  e.preventDefault();

  // Rate Limiting
  const rateLimitCheck = checkRateLimit(lastSubmitTime, 5000);
  if (!rateLimitCheck.allowed) {
    toast.warning(
      `Aguarde ${rateLimitCheck.remainingTime} segundos antes de enviar novamente`,
      { position: 'top-right', autoClose: 3000 }
    );
    return;
  }

  if (!validateForm()) {
    toast.error('Por favor, corrija os erros no formulário', {
      position: 'top-right',
      autoClose: 3000,
    });
    return;
  }

  setIsSending(true);
  setLastSubmitTime(Date.now());

  try {
    // Usar e-mails ofuscados
    const emails = getContactEmails();
    const destinatarios = `${emails.support};${emails.central}`;

    // ... resto do código de envio ...

    // Validar URL antes de redirecionar
    const mailtoUrl = `mailto:${destinatarios}?subject=${assuntoCodificado}&body=${corpoCodificado}`;
    
    if (!validateMailtoUrl(mailtoUrl)) {
      toast.error('URL inválida detectada. Por favor, tente novamente.', {
        position: 'top-right',
        autoClose: 3000,
      });
      setIsSending(false);
      return;
    }

    // Verificar tamanho da URL
    if (mailtoUrl.length > 2000) {
      // Versão simplificada
      const corpoSimplificado = `...`;
      const mailtoUrlSimplificado = `mailto:${destinatarios}?subject=${assuntoCodificado}&body=${encodeURIComponent(corpoSimplificado)}`;
      
      if (!validateMailtoUrl(mailtoUrlSimplificado)) {
        toast.error('Erro ao gerar e-mail. Contate o suporte.', {
          position: 'top-right',
          autoClose: 3000,
        });
        setIsSending(false);
        return;
      }
      
      window.location.href = mailtoUrlSimplificado;
    } else {
      window.location.href = mailtoUrl;
    }

    toast.success('Abrindo seu cliente de e-mail padrão...', {
      position: 'top-right',
      autoClose: 3000,
    });

    // Resetar formulário após delay
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        cargo: '',
        setor: '',
        superintendencia: '',
        categoria: '',
        tipoProblema: '',
        subject: '',
        message: '',
      });
      setErrors({});
      setIsSending(false);
    }, 1500);
  } catch (error) {
    console.error('Erro ao enviar formulário:', error);
    toast.error('Erro ao abrir cliente de e-mail. Por favor, tente novamente.', {
      position: 'top-right',
      autoClose: 3000,
    });
    setIsSending(false);
  }
};
```

**Tempo:** 30 minutos  
**Dificuldade:** Média

---

### 2. ⚠️ Content Security Policy

**Arquivo:** `index.html`

#### Implementação:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Content Security Policy -->
  <meta http-equiv="Content-Security-Policy" 
        content="default-src 'self'; 
                 script-src 'self' 'unsafe-inline' 'unsafe-eval'; 
                 style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
                 img-src 'self' data: https:; 
                 font-src 'self' data: https://fonts.gstatic.com; 
                 connect-src 'self' https://api.emailjs.com;
                 frame-ancestors 'none';
                 base-uri 'self';
                 form-action 'self';">
  
  <!-- Outros headers de segurança -->
  <meta http-equiv="X-Content-Type-Options" content="nosniff">
  <meta http-equiv="X-Frame-Options" content="DENY">
  <meta http-equiv="X-XSS-Protection" content="1; mode=block">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  
  <title>Portal ATI - SES-MG</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

**Tempo:** 15 minutos  
**Dificuldade:** Baixa

---

### 3. ⚠️ HTTPS em Desenvolvimento

**Arquivo:** `vite.config.js`

#### Opção 1: Certificado Auto-Assinado (Desenvolvimento)

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  plugins: [
    react(),
    basicSsl() // Gera certificado auto-assinado automaticamente
  ],
  server: {
    https: true,
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Desabilitar em produção
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log em produção
        drop_debugger: true
      }
    }
  }
});
```

#### Instalar plugin:

```bash
npm install --save-dev @vitejs/plugin-basic-ssl
```

**Tempo:** 20 minutos  
**Dificuldade:** Baixa

---

### 4. ⚠️ Variáveis de Ambiente

**Arquivo:** `.env.example`

```bash
# Configurações de E-mail
VITE_SUPPORT_EMAIL=suporteti.ca@saude.mg.gov.br
VITE_CENTRAL_EMAIL=central@seplag.mg.com.br

# Configurações de Contato
VITE_PHONE_NUMBER=31391600031
VITE_PHONE_FORMATTED=(31) 3916-0031

# Configurações de Segurança
VITE_RATE_LIMIT_MS=5000
VITE_MAX_MESSAGE_LENGTH=5000

# Ambiente
VITE_ENV=production
```

**Arquivo:** `.env` (não commitar)

```bash
# Copiar de .env.example e ajustar valores
VITE_SUPPORT_EMAIL=suporteti.ca@saude.mg.gov.br
VITE_CENTRAL_EMAIL=central@seplag.mg.com.br
VITE_PHONE_NUMBER=31391600031
VITE_PHONE_FORMATTED=(31) 3916-0031
VITE_RATE_LIMIT_MS=5000
VITE_MAX_MESSAGE_LENGTH=5000
VITE_ENV=development
```

#### Usar no código:

```javascript
// src/config/env.js
export const ENV = {
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || 'suporteti.ca@saude.mg.gov.br',
  centralEmail: import.meta.env.VITE_CENTRAL_EMAIL || 'central@seplag.mg.com.br',
  phoneNumber: import.meta.env.VITE_PHONE_NUMBER || '31391600031',
  phoneFormatted: import.meta.env.VITE_PHONE_FORMATTED || '(31) 3916-0031',
  rateLimitMs: parseInt(import.meta.env.VITE_RATE_LIMIT_MS) || 5000,
  maxMessageLength: parseInt(import.meta.env.VITE_MAX_MESSAGE_LENGTH) || 5000,
  isDevelopment: import.meta.env.VITE_ENV === 'development'
};
```

**Tempo:** 15 minutos  
**Dificuldade:** Baixa

---

### 5. ⚠️ Política de Privacidade

**Arquivo:** `src/pages/PrivacyPolicy.jsx`

```javascript
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Política de Privacidade
              </h1>
              <p className="text-gray-600">
                Portal ATI - Secretaria de Estado de Saúde de Minas Gerais
              </p>
            </div>

            <div className="space-y-8">
              {/* Coleta de Dados */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    1. Coleta de Dados
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Coletamos apenas as informações necessárias para prestação de suporte técnico:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                  <li>Nome completo</li>
                  <li>E-mail institucional</li>
                  <li>Telefone/Ramal</li>
                  <li>Cargo e setor</li>
                  <li>Descrição do problema técnico</li>
                </ul>
              </section>

              {/* Uso dos Dados */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    2. Uso dos Dados
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Seus dados são utilizados exclusivamente para:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                  <li>Atendimento de chamados de suporte técnico</li>
                  <li>Comunicação sobre o andamento do chamado</li>
                  <li>Melhoria dos serviços de TI</li>
                  <li>Estatísticas internas (dados anonimizados)</li>
                </ul>
              </section>

              {/* Compartilhamento */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    3. Compartilhamento de Dados
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Não compartilhamos</strong> seus dados com terceiros, exceto:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                  <li>Quando exigido por lei</li>
                  <li>Com fornecedores de suporte técnico (sob contrato de confidencialidade)</li>
                </ul>
              </section>

              {/* Segurança */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    4. Segurança
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Implementamos medidas de segurança para proteger seus dados:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                  <li>Criptografia de dados em trânsito (HTTPS)</li>
                  <li>Validação e sanitização de entradas</li>
                  <li>Acesso restrito aos dados</li>
                  <li>Auditoria regular de segurança</li>
                </ul>
              </section>

              {/* Direitos do Usuário */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Seus Direitos (LGPD)
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Confirmar a existência de tratamento de dados</li>
                  <li>Acessar seus dados</li>
                  <li>Corrigir dados incompletos ou desatualizados</li>
                  <li>Solicitar anonimização ou exclusão</li>
                  <li>Revogar consentimento</li>
                </ul>
              </section>

              {/* Contato */}
              <section className="bg-blue-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Contato
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre privacidade:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>E-mail:</strong> suporteti.ca@saude.mg.gov.br</p>
                  <p><strong>Telefone:</strong> (31) 3916-0031</p>
                  <p><strong>Endereço:</strong> Cidade Administrativa - Prédio Minas, 12º andar</p>
                </div>
              </section>

              {/* Atualização */}
              <section className="text-center pt-8 border-t">
                <p className="text-sm text-gray-500">
                  Última atualização: Janeiro de 2025
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Esta política pode ser atualizada periodicamente. Recomendamos revisá-la regularmente.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
```

#### Adicionar rota:

```javascript
// src/main.jsx
import PrivacyPolicy from './pages/PrivacyPolicy';

// Adicionar na lista de rotas
<Route path="/privacidade" element={<PrivacyPolicy />} />
```

#### Adicionar link no formulário:

```jsx
// ContactForm.jsx - Adicionar antes do botão de envio
<div className="bg-gray-50 p-4 rounded-lg">
  <p className="text-xs text-gray-600">
    Ao enviar este formulário, você concorda com nossa{' '}
    <a href="/privacidade" className="text-blue-600 underline hover:text-blue-800">
      Política de Privacidade
    </a>
    {' '}e com o tratamento de seus dados conforme a LGPD.
  </p>
</div>
```

**Tempo:** 1 hora  
**Dificuldade:** Baixa

---

## 🧪 Testes de Segurança

### 1. Teste de Sanitização

```javascript
// Testar no console do navegador
import { sanitizeInput, detectSuspiciousContent } from './utils/security';

// Teste 1: XSS básico
const test1 = '<script>alert("XSS")</script>Hello';
console.log('Sanitizado:', sanitizeInput(test1)); // Deve retornar: 'Hello'

// Teste 2: Event handler
const test2 = '<img src=x onerror=alert(1)>';
console.log('Sanitizado:', sanitizeInput(test2)); // Deve retornar: ''

// Teste 3: JavaScript protocol
const test3 = 'javascript:alert(1)';
const check = detectSuspiciousContent(test3);
console.log('Suspeito?', !check.valid); // Deve retornar: true
```

### 2. Teste de Rate Limiting

```javascript
// Testar enviando formulário múltiplas vezes rapidamente
// Deve mostrar mensagem: "Aguarde X segundos antes de enviar novamente"
```

### 3. Teste de Validação de URL

```javascript
import { validateMailtoUrl } from './utils/security';

// Teste 1: URL válida
console.log(validateMailtoUrl('mailto:user@example.com')); // true

// Teste 2: URL maliciosa
console.log(validateMailtoUrl('javascript:alert(1)')); // false

// Teste 3: Data URI
console.log(validateMailtoUrl('data:text/html,<script>alert(1)</script>')); // false
```

---

## ✅ Checklist Final

### Implementação:

- [ ] Utilitários de segurança criados (`src/utils/security.js`)
- [ ] ContactForm atualizado com sanitização
- [ ] Rate limiting implementado
- [ ] Validação de URL implementada
- [ ] E-mails ofuscados
- [ ] Content Security Policy adicionada
- [ ] Headers de segurança configurados
- [ ] Variáveis de ambiente configuradas
- [ ] Política de Privacidade criada
- [ ] Link para privacidade no formulário

### Testes:

- [ ] Teste de sanitização XSS
- [ ] Teste de rate limiting
- [ ] Teste de validação de URL
- [ ] Teste de formulário completo
- [ ] Teste em diferentes navegadores
- [ ] Teste de responsividade

### Produção:

- [ ] HTTPS configurado
- [ ] Certificado SSL válido
- [ ] Variáveis de ambiente de produção
- [ ] Build otimizado
- [ ] Source maps desabilitados
- [ ] Console.log removidos

---

## 📊 Resultado Esperado

Após implementar todas as melhorias:

**Pontuação de Segurança:**
- Antes: 85/100
- Depois: 95/100 ✅

**Vulnerabilidades:**
- Antes: 8 pontos de melhoria
- Depois: 2 pontos de melhoria (baixa prioridade)

**Conformidade:**
- ✅ OWASP Top 10
- ✅ LGPD
- ✅ Boas práticas React
- ✅ Segurança Web moderna

---

## 📞 Suporte

**Dúvidas sobre implementação:**
- E-mail: suporteti.ca@saude.mg.gov.br
- Telefone: (31) 3916-0031

**Documentação:**
- Relatório de Auditoria: `SECURITY_AUDIT_REPORT.md`
- Utilitários: `src/utils/security.js`

---

**Última Atualização:** 2025  
**Versão:** 1.0  
**Status:** ✅ Pronto para Implementação
