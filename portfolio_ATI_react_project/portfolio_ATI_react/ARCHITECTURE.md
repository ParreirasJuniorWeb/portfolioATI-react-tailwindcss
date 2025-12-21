# 📐 Arquitetura do Portfólio ATI - SES/MG

## 🎯 Visão Geral

Portfólio web moderno e escalável para a Assessoria de Tecnologia da Informação (ATI) da Secretaria de Estado de Saúde de Minas Gerais, desenvolvido com React + Vite + Tailwind CSS.

---

## 🏗️ Arquitetura do Sistema

### **Tipo de Arquitetura**
- **Frontend:** SPA (Single Page Application)
- **Backend:** Serverless (sem servidor próprio)
- **Comunicação:** Client-side only (Outlook Web API)

### **Padrão Arquitetural**
- **Component-Based Architecture** (React)
- **Atomic Design** (parcial)
- **Feature-Based Structure**

---

## 📁 Estrutura de Diretórios

```
portfolio_ATI_react/
├── public/                      # Arquivos estáticos públicos
│   └── vite.svg
├── src/
│   ├── components/              # Componentes reutilizáveis
│   │   ├── Navbar.jsx          # Navegação principal (7 links)
│   │   ├── Footer.jsx          # Rodapé
│   │   ├── ContactForm.jsx     # Formulário de contato serverless
│   │   ├── Cards.jsx           # Cards de dúvidas frequentes
│   │   ├── loading.jsx         # Componente de loading
│   │   └── ...
│   ├── pages/                   # Páginas da aplicação
│   │   ├── index.jsx           # Página inicial
│   │   ├── ContatoPage.jsx     # Página de contato (NOVA)
│   │   ├── VpnPage.jsx         # Tutorial VPN
│   │   ├── JabberPage.jsx      # Tutorial Jabber
│   │   ├── OutlookPage.jsx     # Tutorial Outlook/Office365
│   │   ├── FhemigPage.jsx      # Co-Working FHEMIG
│   │   ├── SigaMePage.jsx      # Sistema Siga-me
│   │   ├── TutoriaisPage.jsx   # Central de tutoriais
│   │   ├── SuportePage.jsx     # Central de suporte
│   │   ├── DownloadsPage.jsx   # Central de downloads
│   │   ├── BlogPage.jsx        # Blog/Comunicados
│   │   └── PainelPage.jsx      # Dashboard com gráficos
│   ├── img/                     # Imagens
│   ├── icons/                   # Ícones
│   ├── App.jsx                  # Componente raiz
│   ├── main.jsx                 # Entry point
│   └── index.css                # Estilos globais
├── package.json                 # Dependências
├── vite.config.js              # Configuração Vite
├── tailwind.config.js          # Configuração Tailwind
└── postcss.config.js           # Configuração PostCSS
```

---

## 🔧 Stack Tecnológica

### **Core**
- **React 19.1.0** - Biblioteca UI (sem TypeScript)
- **Vite 6.3.5** - Build tool e dev server
- **React Router DOM 7.6.2** - Roteamento SPA

### **Styling**
- **Tailwind CSS 3.4.17** - Framework CSS utility-first
- **AOS 2.3.4** - Animações on scroll
- **Lucide React** - Ícones modernos

### **Formulários e Notificações**
- **React Toastify 11.0.5** - Notificações toast
- **Validação:** Custom (client-side)

### **Gráficos e Visualizações**
- **Chart.js 4.4.7** - Biblioteca de gráficos
- **react-chartjs-2 5.3.0** - Wrapper React para Chart.js

### **Comunicação**
- **Arquitetura Serverless** - Sem backend próprio
- **Outlook Web API** - Envio de e-mails via deeplink

---

## 🎨 Design System

### **Paleta de Cores**

```javascript
// Tailwind Config
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ...
    500: '#1E6FFF',  // Azul principal
    600: '#1d4ed8',
    // ...
  },
  secondary: {
    // Tons de cinza para textos
  }
}
```

### **Temas por Página**
- **VPN:** Azul (#1E6FFF)
- **Jabber:** Verde (#10b981)
- **Outlook:** Laranja (#f97316)
- **FHEMIG:** Roxo (#a855f7)
- **Siga-me:** Teal (#14b8a6)
- **Tutoriais:** Azul (#3b82f6)
- **Suporte:** Índigo (#6366f1)
- **Downloads:** Esmeralda (#10b981)
- **Blog:** Ciano (#06b6d4)
- **Painel:** Slate (#64748b)
- **Contato:** Azul primário (#1E6FFF)

### **Componentes de UI**
- **Cards:** Sombra suave, hover effects, rounded-xl
- **Buttons:** Gradientes, sombras, transições
- **Forms:** Validação visual, feedback instantâneo
- **Animations:** AOS.js (fade-up, fade-down, delays)

---

## 🔄 Fluxo de Dados

### **Formulário de Contato (Serverless)**

```
Usuário preenche formulário
        ↓
Validação client-side
        ↓
Monta corpo do e-mail formatado
        ↓
Codifica para URL (encodeURIComponent)
        ↓
Abre Outlook Web com deeplink
        ↓
Usuário revisa e envia pelo Outlook
        ↓
E-mail enviado para:
  - joaoparreiras2020@gmail.com (testes)
  - suporteti.ca@saude.mg.gov.br (produção)
  - central@positivo.com.br (produção)
```

### **Navegação**

```
App.jsx (Root)
    ↓
main.jsx (Router)
    ↓
12 Rotas configuradas
    ↓
Cada página importa Navbar + Footer
    ↓
Componentes reutilizáveis
```

---

## 📊 Páginas e Funcionalidades

### **1. Página Inicial (/)** 
- Hero section
- Cards de dúvidas frequentes (Swiper)
- Guia de soluções rápidas

### **2. VPN (/vpn)**
- Tutorial completo de VPN
- FAQ accordion
- Links para manuais
- Telefones de contato

### **3. Jabber (/jabber)**
- Tutorial Cisco Jabber
- Configuração passo a passo
- Solução de problemas
- Planilha de solicitação

### **4. Outlook (/outlook)**
- Tutorial Office 365
- Caixas compartilhadas
- Solução de erros
- Configurações

### **5. FHEMIG (/fhemig)**
- Sistema de reservas Co-Working
- Formulário de solicitação
- Informações de acesso

### **6. Siga-me (/sigaMe)**
- Sistema de desvio de chamadas
- Tutorial de configuração
- FAQ

### **7. Tutoriais (/tutoriais)**
- Central de todos os tutoriais
- Busca e filtros por categoria
- Estatísticas de visualizações
- Links para páginas individuais

### **8. Suporte (/suporte)**
- 4 métodos de contato
- Estrutura organizacional:
  - Coordenação (1 membro)
  - Suporte (6 membros)
  - Infraestrutura (2 membros)
- FAQ com busca (10 perguntas)
- Horários de atendimento
- Links úteis

### **9. Downloads (/downloads)**
- 12 documentos catalogados
- Filtros por categoria e tipo
- Busca
- Botões de download

### **10. Blog (/blog)**
- 8 posts de exemplo
- Filtros por 7 categorias
- Busca
- Posts em destaque
- Estatísticas

### **11. Painel (/painel)**
- 4 cards de estatísticas
- 3 gráficos (Chart.js):
  - Linha: Chamados por mês
  - Barra: Categorias
  - Rosca: Status
- Serviços mais utilizados
- Atividades recentes
- Seletor de período

### **12. Contato (/contato)** ✨ NOVA
- 4 cards informativos
- Formulário serverless
- Validação client-side
- Integração Outlook Web
- Assinatura de e-mail corporativa

---

## 🔐 Segurança

### **Validação de Formulários**
- **Client-side:** Regex patterns, required fields
- **Sanitização:** encodeURIComponent para URLs
- **Feedback:** Mensagens de erro específicas

### **Dados Sensíveis**
- **E-mails de teste:** joaoparreiras2020@gmail.com
- **E-mails de produção:** 
  - suporteti.ca@saude.mg.gov.br
  - central@positivo.com.br

### **CORS e APIs**
- **Sem backend próprio:** Não há problemas de CORS
- **Outlook Web:** Usa deeplink (não requer autenticação)

---

## 📱 Responsividade

### **Breakpoints (Tailwind)**
- **sm:** 640px (mobile landscape)
- **md:** 768px (tablet)
- **lg:** 1024px (desktop)
- **xl:** 1280px (large desktop)

### **Mobile-First**
- Grid responsivo (1 col → 2 cols → 3 cols)
- Menu hamburger em mobile
- Cards empilhados em mobile
- Formulários adaptáveis

---

## ⚡ Performance

### **Otimizações**
- **Code Splitting:** React Router (lazy loading futuro)
- **Imagens:** Otimizadas e comprimidas
- **CSS:** Tailwind purge (produção)
- **Bundle:** Vite (build otimizado)

### **Loading States**
- Componente de loading (3s inicial)
- Estados de envio em formulários
- Skeleton screens (futuro)

---

## 🧪 Testes

### **Páginas Testadas**
- ✅ VPN
- ✅ Jabber
- ✅ Outlook

### **Páginas Pendentes de Teste**
- ⏳ FHEMIG
- ⏳ Siga-me
- ⏳ Tutoriais
- ⏳ Suporte
- ⏳ Downloads
- ⏳ Blog
- ⏳ Painel
- ⏳ Contato (NOVA)

---

## 🚀 Deploy

### **Desenvolvimento**
```bash
npm run dev
# Servidor: http://localhost:5174/
```

### **Produção**
```bash
npm run build
npm run preview
```

### **Hospedagem Sugerida**
- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Azure Static Web Apps**

---

## 🔮 Roadmap Futuro

### **Fase 1: Concluída** ✅
- [x] 12 páginas criadas
- [x] Design system implementado
- [x] Formulário serverless
- [x] Navegação completa

### **Fase 2: Planejada** 🎯
- [ ] **Backend Python (Flask)** para Painel
  - API REST para dados de chamados
  - Integração com Excel/CSV
  - Endpoints:
    - GET /api/chamados/mes
    - GET /api/chamados/categoria
    - GET /api/chamados/status
    - GET /api/previsoes
- [ ] **Machine Learning** para previsões
  - Análise de tendências
  - Previsão de volume de chamados
  - Identificação de padrões

### **Fase 3: Melhorias** 🌟
- [ ] Sistema de autenticação (Azure AD)
- [ ] Área administrativa (CRUD de POPs)
- [ ] Sistema de tickets integrado
- [ ] Notificações em tempo real
- [ ] PWA (Progressive Web App)
- [ ] Dark mode
- [ ] Internacionalização (i18n)

---

## 📚 Documentação de Componentes

### **ContactForm.jsx**

**Responsabilidade:** Formulário de contato serverless

**Props:** Nenhuma

**Estado:**
```javascript
{
  fullName: string,
  email: string,
  ddd: string,
  phone: string,
  subject: string,
  message: string,
  cargo: string (opcional),
  setor: string (opcional),
  superintendencia: string (opcional)
}
```

**Validações:**
- Nome: obrigatório, não vazio
- E-mail: obrigatório, regex válido
- DDD: obrigatório, 2 dígitos
- Telefone: obrigatório, 8-9 dígitos
- Assunto: obrigatório
- Mensagem: obrigatória

**Fluxo:**
1. Usuário preenche formulário
2. Validação client-side
3. Monta corpo do e-mail formatado
4. Abre Outlook Web em nova aba
5. Usuário envia pelo Outlook
6. Formulário é resetado

**Dependências:**
- lucide-react (ícones)
- react-toastify (notificações)

---

## 👥 Estrutura Organizacional

### **Coordenação**
- Henrique Rangel Mattos Jardim (Coordenador Geral)
  - Ramal: 59978

### **Equipe de Suporte (6 membros)**
Atendimento CAMG - Andares 8º, 10º, 12º, 13º
- João Victor Parreiras Soares
- Wesley Francisco Soares Fernandes
- Pedro Nascimento Rodrigues
- Ramon de Paula Silva
- Caio Feliphe Da Silva Martins
- Iago Paiva Faria (Estagiário)
- Ramais: (31) 3916-0031 / 3916-0027

### **Equipe de Infraestrutura (2 membros)**
Atendimento Regionais de MG
- Ederson Moreira Souza (Diretor de Redes) - Ramal: 59978
- Alexander Spelta (Analista de Redes)

---

## 📞 Contatos

### **Geral**
- **E-mail:** suporteti.ca@saude.mg.gov.br
- **Telefone:** 0800 525 2001
- **Ramais:** (31) 3916-0031 / (31) 3916-0027

### **Localização**
- **Endereço:** Cidade Administrativa - Prédio Minas
- **Andar:** 12º andar, lado ímpar
- **Sala:** Final do corredor à esquerda
- **Andares atendidos:** 8º, 10º, 12º, 13º

### **Horário**
- **Segunda a Sexta:** 8h às 18h
- **Finais de semana:** Fechado (emergências: 0800)

---

## 🔄 Fluxo de Atendimento

### **1º Nível: Positivo**
- Agentes de campo
- Instalações hardware/software
- Telefone: 0800 525 2001

### **2º Nível: TI SES**
- Problemas complexos
- Configurações avançadas
- Gestão de ativos
- Controle de acessos
- Sistema: Cervello

---

## 📦 Dependências

### **Produção**
```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router-dom": "^7.6.2",
  "react-toastify": "^11.0.5",
  "aos": "^2.3.4",
  "lucide-react": "latest",
  "chart.js": "^4.4.7",
  "react-chartjs-2": "^5.3.0"
}
```

### **Desenvolvimento**
```json
{
  "vite": "^6.3.5",
  "@vitejs/plugin-react": "^4.4.1",
  "tailwindcss": "^3.4.17",
  "postcss": "^8.4.49",
  "autoprefixer": "^10.4.20",
  "eslint": "^9.25.0"
}
```

---

## 🎯 Boas Práticas Implementadas

### **Código**
- ✅ Componentes funcionais (Hooks)
- ✅ Props destructuring
- ✅ Nomes descritivos
- ✅ Comentários em português
- ✅ Consistência de estilo

### **Performance**
- ✅ Lazy loading de imagens
- ✅ Memoização (futuro)
- ✅ Code splitting (futuro)

### **UX/UI**
- ✅ Feedback visual imediato
- ✅ Estados de loading
- ✅ Mensagens de erro claras
- ✅ Animações suaves
- ✅ Responsividade completa

### **Acessibilidade**
- ✅ Semântica HTML
- ✅ ARIA labels
- ✅ Contraste de cores
- ✅ Navegação por teclado

---

## 🐛 Troubleshooting

### **Problema: Formulário não abre Outlook**
**Solução:** Verificar se o navegador permite pop-ups

### **Problema: Animações não funcionam**
**Solução:** Verificar se AOS.init() está no useEffect

### **Problema: Rotas não funcionam**
**Solução:** Verificar BrowserRouter no main.jsx

### **Problema: Tailwind não aplica estilos**
**Solução:** Verificar tailwind.config.js e content paths

---

## 📝 Convenções de Código

### **Nomenclatura**
- **Componentes:** PascalCase (ContactForm.jsx)
- **Funções:** camelCase (handleSubmit)
- **Constantes:** UPPER_SNAKE_CASE (MAX_FILE_SIZE)
- **CSS Classes:** kebab-case (bg-primary-500)

### **Estrutura de Componente**
```javascript
// 1. Imports
import React, { useState } from 'react';
import { Icon } from 'lucide-react';

// 2. Component
const ComponentName = () => {
  // 3. State
  const [state, setState] = useState(initial);
  
  // 4. Handlers
  const handleAction = () => {};
  
  // 5. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

// 6. Export
export default ComponentName;
```

---

## 🔧 Manutenção

### **Atualizar Equipe**
**Arquivo:** `src/pages/SuportePage.jsx`
**Seções:** `coordenacao`, `equipeSuporte`, `equipeInfraestrutura`

### **Adicionar Tutorial**
1. Criar página em `src/pages/NomeTutorialPage.jsx`
2. Adicionar rota em `src/main.jsx`
3. Adicionar card em `src/pages/TutoriaisPage.jsx`

### **Adicionar POP**
**Arquivo:** `src/pages/DownloadsPage.jsx`
**Array:** `documents`

### **Adicionar Post no Blog**
**Arquivo:** `src/pages/BlogPage.jsx`
**Array:** `posts`

---

## 📈 Métricas e KPIs

### **Atuais (Mock Data)**
- Total de chamados: 1,247
- Chamados resolvidos: 1,089
- Tempo médio de resposta: 2.3h
- Taxa de satisfação: 94%

### **Futuras (Com Backend)**
- Dados reais de Excel/CSV
- Previsões com ML
- Dashboards dinâmicos
- Relatórios exportáveis

---

## 🤝 Contribuindo

### **Para Adicionar Nova Funcionalidade**
1. Criar branch: `git checkout -b feature/nome-feature`
2. Desenvolver e testar
3. Commit: `git commit -m "feat: descrição"`
4. Push e Pull Request

### **Para Corrigir Bug**
1. Criar branch: `git checkout -b fix/nome-bug`
2. Corrigir e testar
3. Commit: `git commit -m "fix: descrição"`
4. Push e Pull Request

---

## 📞 Suporte Técnico

**Dúvidas sobre o código:**
- João Victor Parreiras Soares
- E-mail: joao.soares@saude.mg.gov.br
- Ramal: (31) 3916-0031

**Coordenação:**
- Henrique Rangel Mattos Jardim
- E-mail: henrique.jardim@saude.mg.gov.br
- Ramal: 59978

---

## 📄 Licença

Projeto interno da Secretaria de Estado de Saúde de Minas Gerais.
Todos os direitos reservados © 2024 SES-MG

---

**Última atualização:** Janeiro 2025
**Versão:** 1.0.0
**Mantido por:** Equipe ATI - SES/MG
