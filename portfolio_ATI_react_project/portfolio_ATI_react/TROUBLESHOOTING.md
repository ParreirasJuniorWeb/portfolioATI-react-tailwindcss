# 🔍 Guia de Solução de Problemas - Portfólio ATI SES/MG

## 📋 Índice
1. [Problemas Comuns](#problemas-comuns)
2. [Erros de Build](#erros-de-build)
3. [Erros de Runtime](#erros-de-runtime)
4. [Problemas de Estilo](#problemas-de-estilo)
5. [Problemas de Navegação](#problemas-de-navegação)
6. [Problemas de Formulário](#problemas-de-formulário)
7. [Problemas de Performance](#problemas-de-performance)
8. [Problemas de Deploy](#problemas-de-deploy)

---

## 🐛 Problemas Comuns

### **Problema 1: Página Branca / Tela Branca**

#### **Sintomas:**
- Página não carrega
- Tela completamente branca
- Console mostra erros

#### **Causas Possíveis:**
1. Erro de sintaxe em JSX
2. Import incorreto
3. Dependência faltando
4. Erro em componente

#### **Diagnóstico:**
```bash
# 1. Verificar console do navegador (F12)
# Procurar por erros em vermelho

# 2. Verificar terminal do Vite
# Procurar por erros de compilação

# 3. Verificar imports
# Procurar por imports quebrados
```

#### **Soluções:**

**Solução 1: Limpar Cache e Reinstalar**
```bash
# Parar servidor (Ctrl+C)
rm -rf node_modules
rm package-lock.json
npm install
npm run dev
```

**Solução 2: Verificar Imports**
```javascript
// ❌ ERRADO
import Component from './Component'; // Sem extensão

// ✅ CORRETO
import Component from './Component.jsx';
```

**Solução 3: Verificar Sintaxe JSX**
```javascript
// ❌ ERRADO
return (
  <div>
    <h1>Título
  </div>
);

// ✅ CORRETO
return (
  <div>
    <h1>Título</h1>
  </div>
);
```

**Solução 4: Verificar Dependências**
```bash
# Verificar se todas as dependências estão instaladas
npm list
npm install
```

---

### **Problema 2: Erro "Cannot read property of undefined"**

#### **Sintomas:**
```
Uncaught TypeError: Cannot read property 'value' of undefined
```

#### **Causas:**
- Acessar propriedade de objeto undefined
- Estado não inicializado
- Props não passadas

#### **Soluções:**

**Solução 1: Optional Chaining**
```javascript
// ❌ ERRADO
const value = obj.property.value;

// ✅ CORRETO
const value = obj?.property?.value;
```

**Solução 2: Valores Padrão**
```javascript
// ❌ ERRADO
const Component = ({ data }) => {
  return <div>{data.name}</div>;
};

// ✅ CORRETO
const Component = ({ data = {} }) => {
  return <div>{data.name || 'N/A'}</div>
};
```

**Solução 3: Verificação Condicional**
```javascript
// ✅ CORRETO
const Component = ({ data }) => {
  if (!data) return <div>Carregando...</div>;
  
  return <div>{data.name}</div>;
};
```

---

### **Problema 3: Formulário Não Envia**

#### **Sintomas:**
- Botão não responde
- Outlook não abre
- Validação não funciona

#### **Diagnóstico:**
```javascript
// Adicionar logs para debug
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form Data:', formData);
  console.log('Errors:', errors);
  console.log('Validation:', validateForm());
};
```

#### **Soluções:**

**Solução 1: Verificar Bloqueador de Pop-ups**
```javascript
// Verificar se pop-up foi bloqueado
const newWindow = window.open(url, '_blank');
if (!newWindow) {
  alert('Por favor, permita pop-ups para este site');
}
```

**Solução 2: Verificar Validações**
```javascript
// Verificar se todas as validações passam
const validateForm = () => {
  const newErrors = {};
  
  // Log para debug
  console.log('Validating:', formData);
  
  // Validações...
  
  console.log('Errors found:', newErrors);
  return Object.keys(newErrors).length === 0;
};
```

**Solução 3: Verificar URL do Outlook**
```javascript
// Verificar se URL está correta
const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=${destinatarios}&subject=${assuntoCodificado}&body=${corpoCodificado}`;

console.log('Outlook URL:', outlookUrl);
```

---

### **Problema 4: Estilos Tailwind Não Aplicam**

#### **Sintomas:**
- Classes Tailwind não funcionam
- Página sem estilo
- Apenas HTML básico aparece

#### **Diagnóstico:**
```bash
# 1. Verificar se Tailwind está instalado
npm list tailwindcss

# 2. Verificar configuração
cat tailwind.config.js
cat postcss.config.js

# 3. Verificar import no index.css
cat src/index.css
```

#### **Soluções:**

**Solução 1: Reinstalar Tailwind**
```bash
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Solução 2: Verificar tailwind.config.js**
```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Solução 3: Verificar index.css**
```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Solução 4: Rebuild**
```bash
# Parar servidor
# Limpar cache
rm -rf node_modules/.vite
npm run dev
```

---

### **Problema 5: Rotas 404 / Página Não Encontrada**

#### **Sintomas:**
- Erro 404 ao acessar rota
- Página não carrega
- "Cannot GET /rota"

#### **Diagnóstico:**
```javascript
// Verificar main.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Verificar se rota está configurada
<Route path="/rota" element={<Component />} />
```

#### **Soluções:**

**Solução 1: Verificar Rota Configurada**
```javascript
// src/main.jsx
<Routes>
  <Route path="/" element={<App />} />
  <Route path="/contato" element={<ContatoPage />} />
  {/* Adicionar rota faltando */}
</Routes>
```

**Solução 2: Verificar Import do Componente**
```javascript
// ❌ ERRADO
import ContatoPage from './pages/Contato'; // Nome errado

// ✅ CORRETO
import ContatoPage from './pages/ContatoPage.jsx';
```

**Solução 3: Verificar BrowserRouter**
```javascript
// src/main.jsx
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* Rotas aqui */}
    </Routes>
  </BrowserRouter>
);
```

---

## 🏗️ Erros de Build

### **Erro: "Module not found"**

#### **Mensagem:**
```
Error: Cannot find module './Component'
```

#### **Soluções:**

**Solução 1: Verificar Caminho**
```javascript
// Verificar se arquivo existe
// Verificar extensão (.jsx, .js)
// Verificar maiúsculas/minúsculas

// ❌ ERRADO
import Component from './component'; // Minúsculo

// ✅ CORRETO
import Component from './Component.jsx';
```

**Solução 2: Verificar Estrutura de Pastas**
```bash
# Listar arquivos
ls src/components/
ls src/pages/
```

---

### **Erro: "Unexpected token"**

#### **Mensagem:**
```
SyntaxError: Unexpected token '<'
```

#### **Causa:**
- Sintaxe JSX incorreta
- Falta de fechamento de tag
- Caractere especial não escapado

#### **Soluções:**

**Solução 1: Verificar Tags**
```javascript
// ❌ ERRADO
<div>
  <h1>Título
</div>

// ✅ CORRETO
<div>
  <h1>Título</h1>
</div>
```

**Solução 2: Escapar Caracteres**
```javascript
// ❌ ERRADO
<p>Texto com 'aspas' e "aspas duplas"</p>

// ✅ CORRETO
<p>Texto com &apos;aspas&apos; e "aspas duplas"</p>
```

---

## ⚡ Erros de Runtime

### **Erro: "Maximum update depth exceeded"**

#### **Mensagem:**
```
Error: Maximum update depth exceeded
```

#### **Causa:**
- Loop infinito em useEffect
- setState dentro de render
- Dependências incorretas

#### **Soluções:**

**Solução 1: Verificar useEffect**
```javascript
// ❌ ERRADO
useEffect(() => {
  setState(newValue); // Sem dependências
});

// ✅ CORRETO
useEffect(() => {
  setState(newValue);
}, []); // Com array de dependências
```

**Solução 2: Não Chamar setState no Render**
```javascript
// ❌ ERRADO
const Component = () => {
  setState(value); // No render
  return <div>...</div>;
};

// ✅ CORRETO
const Component = () => {
  useEffect(() => {
    setState(value); // No effect
  }, []);
  
  return <div>...</div>;
};
```

---

### **Erro: "Cannot update during an existing state transition"**

#### **Causa:**
- Atualizar estado durante render
- Atualizar estado de componente pai de dentro do filho

#### **Solução:**
```javascript
// ❌ ERRADO
const Component = ({ onUpdate }) => {
  onUpdate(); // Chama durante render
  return <div>...</div>;
};

// ✅ CORRETO
const Component = ({ onUpdate }) => {
  useEffect(() => {
    onUpdate(); // Chama no effect
  }, [onUpdate]);
  
  return <div>...</div>;
};
```

---

## 🎨 Problemas de Estilo

### **Problema: Hover Não Funciona em Mobile**

#### **Causa:**
- Mobile não tem hover
- Precisa usar touch events

#### **Solução:**
```javascript
// Usar active em vez de hover para mobile
<button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800">
  Botão
</button>
```

---

### **Problema: Layout Quebrado em Mobile**

#### **Diagnóstico:**
```bash
# Testar em diferentes resoluções
# 375px (mobile)
# 768px (tablet)
# 1024px (desktop)
```

#### **Solução:**
```javascript
// Usar classes responsivas
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Conteúdo */}
</div>

// 1 coluna em mobile
// 2 colunas em tablet
// 3 colunas em desktop
```

---

## 📊 Problemas de Performance

### **Problema: Página Lenta para Carregar**

#### **Diagnóstico:**
```bash
# Usar Lighthouse
lighthouse http://localhost:5174 --view

# Verificar bundle size
npm run build
ls -lh dist/assets/
```

#### **Soluções:**

**Solução 1: Lazy Loading**
```javascript
import { lazy, Suspense } from 'react';

const VpnPage = lazy(() => import('./pages/VpnPage'));

<Suspense fallback={<Loading />}>
  <VpnPage />
</Suspense>
```

**Solução 2: Otimizar Imagens**
```bash
# Comprimir imagens
# Usar formatos modernos (WebP)
# Redimensionar para tamanho correto
```

**Solução 3: Code Splitting**
```javascript
// Dividir código em chunks menores
// Vite faz isso automaticamente
```

---

## 🚀 Problemas de Deploy

### **Problema: Build Falha**

#### **Mensagem:**
```
Error: Build failed
```

#### **Diagnóstico:**
```bash
# Tentar build localmente
npm run build

# Verificar erros
```

#### **Soluções:**

**Solução 1: Limpar e Rebuild**
```bash
rm -rf node_modules dist
npm install
npm run build
```

**Solução 2: Verificar Variáveis de Ambiente**
```bash
# Verificar se todas as variáveis estão configuradas
# Verificar .env files
```

---

### **Problema: Site Funciona Local mas Não em Produção**

#### **Causas:**
- Caminhos absolutos vs relativos
- Variáveis de ambiente
- CORS

#### **Soluções:**

**Solução 1: Verificar Caminhos**
```javascript
// ❌ ERRADO
<img src="/src/img/logo.png" />

// ✅ CORRETO
import logo from '../img/logo.png';
<img src={logo} />
```

**Solução 2: Configurar Base URL**
```javascript
// vite.config.js
export default {
  base: '/', // ou '/seu-subpath/'
};
```

---

## 📞 Suporte

### **Quando Pedir Ajuda:**
1. Tentou todas as soluções acima
2. Pesquisou no Google/Stack Overflow
3. Verificou documentação oficial
4. Problema persiste

### **Como Pedir Ajuda:**
1. Descrever o problema claramente
2. Incluir mensagem de erro completa
3. Incluir código relevante
4. Incluir passos para reproduzir
5. Incluir o que já tentou

### **Contatos:**
- **Desenvolvedor:** João Victor Parreiras Soares
- **E-mail:** joao.soares@saude.mg.gov.br
- **Ramal:** (31) 3916-0031

---

## 📚 Recursos Úteis

- [React Error Decoder](https://react.dev/errors)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)
- [Vite Troubleshooting](https://vitejs.dev/guide/troubleshooting.html)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Última Atualização:** Janeiro 2025
**Versão:** 1.0.0
**Mantido por:** Equipe ATI - SES/MG
