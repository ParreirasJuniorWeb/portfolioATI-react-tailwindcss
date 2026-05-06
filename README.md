# 🏥 Portfólio ATI - SES/MG

Portal web moderno para a Assessoria de Tecnologia da Informação da Secretaria de Estado de Saúde de Minas Gerais.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-SES--MG-blue)

---

## 📋 Índice

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura](#estrutura)
- [Páginas](#páginas)
- [Contribuindo](#contribuindo)
- [Equipe](#equipe)
- [Licença](#licença)

---

## 🎯 Sobre

Portal web público, moderno e intuitivo para os servidores da Cidade Administrativa da Secretaria de Estado de Saúde de Minas Gerais. Oferece tutoriais, suporte técnico, downloads de POPs, blog de comunicados e dashboard de métricas.

### **Características Principais**
- ✅ **Serverless:** Sem necessidade de backend próprio
- ✅ **Responsivo:** Mobile-first design
- ✅ **Moderno:** UI/UX contemporânea
- ✅ **Escalável:** Arquitetura component-based
- ✅ **Documentado:** Código e arquitetura bem documentados

---

## ⚡ Funcionalidades

### **Para Usuários**
- 📚 **Tutoriais Interativos:** VPN, Jabber, Outlook, FHEMIG, Siga-me
- 🎧 **Central de Suporte:** Equipe, FAQ, horários, contatos
- 📥 **Downloads:** POPs e manuais com busca e filtros
- 📰 **Blog:** Comunicados e atualizações
- 📊 **Dashboard:** Métricas e estatísticas (mock data)
- 📧 **Contato:** Formulário serverless com Outlook Web

### **Para Administradores**
- 🔧 **Fácil Manutenção:** Código bem estruturado
- 📝 **Documentação Completa:** ARCHITECTURE.md
- 🎨 **Design System:** Tailwind CSS customizado
- 🔄 **Escalável:** Preparado para backend futuro

---

## 🛠️ Tecnologias

### **Core**
- **React 19.1.0** - Biblioteca UI
- **Vite 6.3.5** - Build tool
- **React Router DOM 7.6.2** - Roteamento

### **Styling**
- **Tailwind CSS 3.4.17** - Framework CSS
- **AOS 2.3.4** - Animações
- **Lucide React** - Ícones

### **Funcionalidades**
- **Chart.js + react-chartjs-2** - Gráficos
- **React Toastify** - Notificações
- **Outlook Web API** - Envio de e-mails

---

## 📦 Instalação

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn

### **Passo a Passo**

```bash
# 1. Clone o repositório
git clone [URL_DO_REPO]

# 2. Entre no diretório
cd portfolio_ATI_react_project/portfolio_ATI_react

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Acesse no navegador
# http://localhost:5174/
```

---

## 🚀 Uso

### **Desenvolvimento**
```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Verifica código com ESLint
```

### **Variáveis de Ambiente**

Para produção, altere o e-mail de destino em `src/components/ContactForm.jsx`:

```javascript
// Linha 73 - Alterar de:
const destinatarios = 'joaoparreiras2020@gmail.com'; // Testes

// Para:
const destinatarios = 'suporteti.ca@saude.mg.gov.br;central@positivo.com.br'; // Produção
```

---

## 📁 Estrutura

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar.jsx      # Navegação (7 links)
│   ├── Footer.jsx      # Rodapé
│   ├── ContactForm.jsx # Formulário serverless
│   └── ...
├── pages/              # Páginas da aplicação
│   ├── index.jsx       # Home
│   ├── ContatoPage.jsx # Contato
│   ├── VpnPage.jsx     # Tutorial VPN
│   ├── JabberPage.jsx  # Tutorial Jabber
│   ├── OutlookPage.jsx # Tutorial Outlook
│   ├── FhemigPage.jsx  # Co-Working
│   ├── SigaMePage.jsx  # Siga-me
│   ├── TutoriaisPage.jsx   # Central tutoriais
│   ├── SuportePage.jsx     # Central suporte
│   ├── DownloadsPage.jsx   # Downloads
│   ├── BlogPage.jsx        # Blog
│   └── PainelPage.jsx      # Dashboard
├── img/                # Imagens
├── icons/              # Ícones
└── ...
```

---

## 📄 Páginas

### **1. Página Inicial** (`/`)
- Hero section
- Cards de dúvidas frequentes
- Guia de soluções rápidas

### **2. Tutoriais** (`/tutoriais`)
- Central com 5 tutoriais
- Busca e filtros
- Estatísticas

### **3. Suporte** (`/suporte`)
- 4 métodos de contato
- Estrutura da equipe (9 membros)
- FAQ com busca (10 perguntas)
- Horários

### **4. Downloads** (`/downloads`)
- 12 documentos (POPs e manuais)
- Filtros por categoria e tipo
- Busca

### **5. Blog** (`/blog`)
- 8 posts
- 7 categorias
- Busca e filtros
- Posts em destaque

### **6. Painel** (`/painel`)
- 4 cards de estatísticas
- 3 gráficos (Chart.js)
- Atividades recentes
- Seletor de período

### **7. Contato** (`/contato`) ✨ NOVA
- 4 cards informativos
- Formulário serverless
- Integração Outlook Web
- Assinatura de e-mail

### **8-12. Tutoriais Individuais**
- VPN (`/vpn`)
- Jabber (`/jabber`)
- Outlook (`/outlook`)
- FHEMIG (`/fhemig`)
- Siga-me (`/sigaMe`)

---

## 🎨 Customização

### **Cores**
Edite `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#1E6FFF', // Azul principal
    // ...
  }
}
```

### **Conteúdo**
- **Equipe:** `src/pages/SuportePage.jsx`
- **POPs:** `src/pages/DownloadsPage.jsx`
- **Posts:** `src/pages/BlogPage.jsx`
- **Tutoriais:** `src/pages/TutoriaisPage.jsx`

---

## 🧪 Testes

### **Manual**
```bash
npm run dev
# Navegue pelas páginas e teste funcionalidades
```

### **Checklist de Testes**
- [ ] Navegação entre páginas
- [ ] Formulário de contato
- [ ] Busca e filtros
- [ ] Responsividade mobile
- [ ] Animações AOS
- [ ] Links externos
- [ ] FAQ accordion
- [ ] Gráficos do painel

---

## 🚀 Deploy

### **Vercel (Recomendado)**
```bash
# 1. Instale Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Deploy para produção
vercel --prod
```

### **Netlify**
```bash
# 1. Build
npm run build

# 2. Deploy pasta dist/
netlify deploy --prod --dir=dist
```

---

## 👥 Equipe

### **Coordenação**
- **Henrique Rangel Mattos Jardim** - Coordenador Geral
  - henrique.jardim@saude.mg.gov.br | Ramal: 59978

### **Suporte Técnico** (CAMG)
- Wesley Francisco Soares Fernandes
- João Victor Parreiras Soares (Estagiário)
- Pedro Nascimento Rodrigues
- Ramon de Paula Silva
- Caio Feliphe Da Silva Martins
- Iago Paiva Faria (Estagiário)

### **Infraestrutura** (Regionais)
- Ederson Moreira Souza (Diretor de Redes)
- Alexander Spelta (Analista de Redes)

---

## 📞 Contato

- **E-mail:** suporteti.ca@saude.mg.gov.br
- **Telefone:** 0800 525 2001
- **Ramais:** (31) 3916-0031 / (31) 3916-0027
- **Localização:** Prédio Minas, 12º andar, lado ímpar
- **Chat Bot:** https://app.chatvolt.ai/@chat_bot_ti_ses

---

## 🔮 Roadmap

### **v1.0 - Atual** ✅
- [x] 12 páginas completas
- [x] Design system
- [x] Formulário serverless
- [x] Documentação

### **v2.0 - Planejado** 🎯
- [ ] Backend Python (Flask)
- [ ] API REST para dados
- [ ] Integração Excel/CSV
- [ ] Machine Learning (previsões)
- [ ] Autenticação Azure AD
- [ ] Sistema de tickets

### **v3.0 - Futuro** 🌟
- [ ] PWA
- [ ] Dark mode
- [ ] Notificações push
- [ ] Área administrativa
- [ ] Relatórios exportáveis

---

## 📚 Documentação

- **Arquitetura:** [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Componentes:** Ver comentários no código
- **API (Futuro):** Será documentada com Swagger

---

## 🐛 Problemas Conhecidos

Nenhum problema crítico identificado.

Para reportar bugs:
- E-mail: suporteti.ca@saude.mg.gov.br
- Assunto: [BUG] Descrição do problema

---

## 📝 Changelog

### **v1.0.0** (Janeiro 2025)
- ✨ 12 páginas criadas
- ✨ Formulário de contato serverless
- ✨ Dashboard com Chart.js
- ✨ Sistema de busca e filtros
- ✨ Design system completo
- ✨ Documentação completa

---

## 🙏 Agradecimentos

- **Equipe ATI SES-MG** - Desenvolvimento e manutenção
- **Secretário Fábio Baccheretti** - Apoio institucional
- **Positivo** - Parceria no atendimento

---

## 📄 Licença

© 2024 Secretaria de Estado de Saúde de Minas Gerais
Todos os direitos reservados.

Projeto interno para uso exclusivo da SES-MG.

---

**Desenvolvido com ❤️ pela Equipe ATI - SES/MG**

**Cidade Administrativa - Prédio Minas, 12º andar**
**Belo Horizonte, Minas Gerais, Brasil**
