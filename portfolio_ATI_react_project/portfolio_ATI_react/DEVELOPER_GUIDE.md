# 👨‍💻 Guia do Desenvolvedor - Portfólio ATI SES/MG

## 📋 Índice
1. [Introdução](#introdução)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Padrões de Código](#padrões-de-código)
5. [Fluxo de Trabalho](#fluxo-de-trabalho)
6. [Componentes](#componentes)
7. [Roteamento](#roteamento)
8. [Estilização](#estilização)
9. [Testes](#testes)
10. [Deploy](#deploy)

---

## 🎯 Introdução

### **Sobre o Projeto**
Portal web para a Assessoria de Tecnologia da Informação da Secretaria de Estado de Saúde de Minas Gerais.

### **Stack Tecnológica**
- **Frontend:** React 19.1.0
- **Build Tool:** Vite 6.3.5
- **Styling:** Tailwind CSS 3.4.17
- **Routing:** React Router DOM 7.6.2
- **Icons:** Lucide React
- **Animations:** AOS 2.3.4
- **Charts:** Chart.js 4.5.1 + react-chartjs-2 5.3.1
- **Notifications:** React Toastify 11.0.5

### **Requisitos**
- Node.js 18+
- npm ou yarn
- Git
- Editor de código (VS Code recomendado)

---

## ⚙️ Configuração do Ambiente

### **1. Clonar o Repositório**

```bash
git clone [URL_DO_REPOSITORIO]
cd portfolio_ATI_react_project/portfolio_ATI_react
```

### **2. Instalar Dependências**

```bash
npm install
```

### **3. Configurar VS Code (Recomendado)**

**Extensões Recomendadas:**
```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "dsznajder.es7-react-js-snippets"
  ]
}
```

**Settings.json:**
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["className\\s*=\\s*['\"`]([^'\"`]*)['\"`]", "([^'\"`]*)"]
  ]
}
```

### **4. Iniciar Servidor de Desenvolvimento**

```bash
npm run dev
```

Acesse: http://localhost:5174/

### **5. Build para Produção**

```bash
npm run build
npm run preview
```

---

## 📁 Estrutura do Projeto

```
portfolio_ATI_react/
├── public/                      # Arquivos estáticos
│   └── vite.svg
│
├── src/
│   ├── components/              # Componentes reutilizáveis
│   │   ├── Navbar.jsx          # Navegação principal
│   │   ├── Footer.jsx          # Rodapé
│   │   ├── ContactForm.jsx     # Formulário de contato
│   │   ├── Cards.jsx           # Cards com Swiper
│   │   ├── loading.jsx         # Componente de loading
│   │   └── ...
│   │
│   ├── pages/                   # Páginas da aplicação
│   │   ├── index.jsx           # Página inicial
│   │   ├── VpnPage.jsx         # Tutorial VPN
│   │   ├── JabberPage.jsx      # Tutorial Jabber
│   │   ├── OutlookPage.jsx     # Tutorial Outlook
│   │   ├── FhemigPage.jsx      # Co-Working
│   │   ├── SigaMePage.jsx      # Siga-me
│   │   ├── TutoriaisPage.jsx   # Central de tutoriais
│   │   ├── SuportePage.jsx     # Central de suporte
│   │   ├── DownloadsPage.jsx   # Downloads
│   │   ├── BlogPage.jsx        # Blog
│   │   ├── PainelPage.jsx      # Dashboard
│   │   └── ContatoPage.jsx     # Contato
│   │
│   ├── img/                     # Imagens
│   ├── icons/                   # Ícones
│   │
│   ├── App.jsx                  # Componente raiz
│   ├── main.jsx                 # Entry point
│   ├── index.css                # Estilos globais
│   └── App.css                  # Estilos do App
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
│
└── Documentação/
    ├── ARCHITECTURE.md
    ├── README.md
    ├── DEVELOPER_GUIDE.md
    ├── MAINTENANCE_GUIDE.md
    └── ...
```

---

## 📝 Padrões de Código

### **1. Nomenclatura**

#### **Componentes:**
```javascript
// PascalCase para componentes
const ContactForm = () => { ... };
export default ContactForm;
```

#### **Funções:**
```javascript
// camelCase para funções
const handleSubmit = () => { ... };
const validateForm = () => { ... };
```

#### **Constantes:**
```javascript
// UPPER_SNAKE_CASE para constantes
const MAX_FILE_SIZE = 5000000;
const API_BASE_URL = 'https://api.example.com';
```

#### **Variáveis:**
```javascript
// camelCase para variáveis
const formData = {};
const isLoading = false;
```

---

### **2. Estrutura de Componente**

```javascript
// 1. Imports
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// 2. Componente
const ComponentName = () => {
  // 3. Estados
  const [state, setState] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  
  // 4. Effects
  useEffect(() => {
    // Lógica do effect
  }, [dependencies]);
  
  // 5. Handlers
  const handleAction = () => {
    // Lógica do handler
  };
  
  // 6. Render
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Conteúdo */}
      <main className="flex-1">
        {/* Seu conteúdo aqui */}
      </main>
      
      <Footer />
    </div>
  );
};

// 7. Export
export default ComponentName;
```

---

### **3. Props e PropTypes**

```javascript
// Destructuring de props
const Button = ({ text, onClick, variant = 'primary', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {text}
    </button>
  );
};

// Documentação de props (comentário)
/**
 * Button Component
 * @param {string} text - Texto do botão
 * @param {function} onClick - Função ao clicar
 * @param {string} variant - Variante do botão (primary, secondary)
 * @param {boolean} disabled - Se o botão está desabilitado
 */
```

---

### **4. Hooks Personalizados**

```javascript
// useFormValidation.js
import { useState } from 'react';

export const useFormValidation = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const newErrors = {};
    // Lógica de validação
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };
  
  return { values, errors, validate, handleChange };
};
```

---

### **5. Comentários**

```javascript
// ✅ BOM: Comentários explicativos
// Formata telefone para o padrão (31) 3916-0031
const formatPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
};

// ❌ RUIM: Comentários óbvios
// Incrementa contador
const increment = () => count + 1;

// ✅ BOM: Comentários de seção
// ============================================
// VALIDAÇÕES
// ============================================

// ✅ BOM: TODOs
// TODO: Implementar validação de CPF
// FIXME: Corrigir bug no Safari
// NOTE: Esta função será removida na v2.0
```

---

### **6. Formatação**

```javascript
// ✅ BOM: Indentação consistente (2 espaços)
const Component = () => {
  return (
    <div>
      <h1>Título</h1>
      <p>Parágrafo</p>
    </div>
  );
};

// ✅ BOM: Quebras de linha em JSX
<button
  onClick={handleClick}
  className="btn btn-primary"
  disabled={isLoading}
>
  {isLoading ? 'Carregando...' : 'Enviar'}
</button>

// ✅ BOM: Espaçamento em objetos
const config = {
  name: 'Portfolio ATI',
  version: '1.0.0',
  author: 'Equipe ATI',
};
```

---

## 🔄 Fluxo de Trabalho

### **1. Git Workflow**

#### **Branches:**
```bash
main          # Produção
develop       # Desenvolvimento
feature/*     # Novas funcionalidades
fix/*         # Correções de bugs
hotfix/*      # Correções urgentes
```

#### **Criar Nova Feature:**
```bash
# 1. Atualizar develop
git checkout develop
git pull origin develop

# 2. Criar branch de feature
git checkout -b feature/nome-da-feature

# 3. Desenvolver
# ... fazer alterações ...

# 4. Commit
git add .
git commit -m "feat: descrição da feature"

# 5. Push
git push origin feature/nome-da-feature

# 6. Criar Pull Request no GitHub
```

#### **Mensagens de Commit:**
```bash
# Formato: tipo(escopo): descrição

# Tipos:
feat:     # Nova funcionalidade
fix:      # Correção de bug
docs:     # Documentação
style:    # Formatação (não afeta código)
refactor: # Refatoração
test:     # Testes
chore:    # Manutenção

# Exemplos:
git commit -m "feat(contato): adicionar validação de telefone"
git commit -m "fix(navbar): corrigir menu mobile"
git commit -m "docs: atualizar README"
git commit -m "style: formatar código com prettier"
git commit -m "refactor(forms): extrair lógica de validação"
```

---

### **2. Desenvolvimento de Nova Página**

#### **Passo 1: Criar Arquivo**
```bash
touch src/pages/NovaPage.jsx
```

#### **Passo 2: Implementar Componente**
```javascript
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NovaPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Título da Página
          </h1>
          <p className="text-xl text-white/90">
            Descrição da página
          </p>
        </div>
      </section>
      
      {/* Conteúdo */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Seu conteúdo aqui */}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NovaPage;
```

#### **Passo 3: Adicionar Rota**
```javascript
// src/main.jsx
import NovaPage from './pages/NovaPage.jsx';

<Route path="/nova-pagina" element={<NovaPage />} />
```

#### **Passo 4: Adicionar no Navbar (se necessário)**
```javascript
// src/components/Navbar.jsx
const menuItems = [
  // ... itens existentes
  { icon: IconName, label: "Nova Página", path: "/nova-pagina" },
];
```

#### **Passo 5: Testar**
```bash
npm run dev
# Acessar http://localhost:5174/nova-pagina
```

---

### **3. Desenvolvimento de Novo Componente**

#### **Passo 1: Criar Arquivo**
```bash
touch src/components/NovoComponente.jsx
```

#### **Passo 2: Implementar**
```javascript
import React from 'react';
import { Icon } from 'lucide-react';

/**
 * NovoComponente
 * @param {string} title - Título do componente
 * @param {string} description - Descrição
 * @param {function} onClick - Função ao clicar
 */
const NovoComponente = ({ title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-body">
        <Icon className="w-8 h-8 text-primary-600 mb-4" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-secondary-600">{description}</p>
      </div>
    </div>
  );
};

export default NovoComponente;
```

#### **Passo 3: Usar em Página**
```javascript
import NovoComponente from '../components/NovoComponente';

<NovoComponente
  title="Título"
  description="Descrição"
  onClick={() => console.log('Clicado')}
/>
```

---

## 🎨 Estilização

### **1. Tailwind CSS**

#### **Classes Utilitárias:**
```javascript
// Layout
<div className="flex flex-col items-center justify-center">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Espaçamento
<div className="p-4 m-2">        // padding e margin
<div className="px-6 py-4">      // padding horizontal e vertical
<div className="space-y-4">      // espaço entre filhos

// Tipografia
<h1 className="text-4xl font-bold text-secondary-900">
<p className="text-lg text-secondary-600">

// Cores
<div className="bg-primary-600 text-white">
<div className="bg-white text-secondary-900">

// Bordas
<div className="rounded-xl border border-gray-300">
<div className="shadow-lg hover:shadow-xl">

// Responsividade
<div className="hidden md:block">     // Esconde em mobile
<div className="block md:hidden">     // Mostra apenas em mobile
```

#### **Classes Personalizadas:**
```css
/* src/index.css */
@layer components {
  .card {
    @apply bg-white rounded-xl shadow-soft p-6 transition-all duration-300;
  }
  
  .card:hover {
    @apply shadow-xl transform scale-105;
  }
  
  .btn {
    @apply px-6 py-3 rounded-xl font-semibold transition-all duration-300;
  }
  
  .btn-primary {
    @apply bg-primary-600 text-white hover:bg-primary-700;
  }
}
```

---

### **2. Animações com AOS**

```javascript
// Inicializar no App.jsx
import AOS from 'aos';
import 'aos/dist/aos.css';

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);

// Usar em componentes
<div data-aos="fade-up">
  Conteúdo
</div>

<div data-aos="fade-up" data-aos-delay="200">
  Conteúdo com delay
</div>
```

**Animações Disponíveis:**
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `flip-left`, `flip-right`
- `slide-up`, `slide-down`

---

## 🧪 Testes

### **1. Testes Manuais**

```bash
# Checklist de testes
- [ ] Página carrega sem erros
- [ ] Navegação funciona
- [ ] Formulários validam corretamente
- [ ] Links externos abrem em nova aba
- [ ] Responsivo em mobile/tablet/desktop
- [ ] Animações funcionam
- [ ] Console sem erros
```

### **2. Testes de Navegação**

```javascript
// Testar todas as rotas
const routes = [
  '/',
  '/vpn',
  '/jabber',
  '/outlook',
  '/fhemig',
  '/sigaMe',
  '/tutoriais',
  '/suporte',
  '/downloads',
  '/blog',
  '/painel',
  '/contato',
];

routes.forEach(route => {
  console.log(`Testando ${route}`);
  // Acessar e verificar
});
```

---

## 🚀 Deploy

### **1. Build**

```bash
npm run build
```

Arquivos gerados em `dist/`

### **2. Preview Local**

```bash
npm run preview
```

### **3. Deploy (Vercel - Recomendado)**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### **4. Deploy (Netlify)**

```bash
# Build
npm run build

# Deploy pasta dist/
netlify deploy --prod --dir=dist
```

---

## 📚 Recursos

- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Chart.js](https://www.chartjs.org/)

---

**Última Atualização:** Janeiro 2025
**Versão:** 1.0.0
**Mantido por:** Equipe ATI - SES/MG
