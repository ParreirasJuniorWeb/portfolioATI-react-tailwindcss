# 🎨 Documentação de Interface Gráfica - Portfólio ATI SES/MG

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Páginas do Sistema](#páginas-do-sistema)
3. [Componentes Reutilizáveis](#componentes-reutilizáveis)
4. [Design System](#design-system)
5. [Responsividade](#responsividade)
6. [Acessibilidade](#acessibilidade)

---

## 🎯 Visão Geral

### **Tema Visual**
- **Estilo:** Moderno, Corporativo, Profissional
- **Paleta Principal:** Azul (#1E6FFF), Branco, Cinza
- **Tipografia:** System fonts (Arial, sans-serif)
- **Ícones:** Lucide React
- **Animações:** AOS.js (Animate On Scroll)

### **Resolução Suportada**
- **Desktop:** 1920px+
- **Laptop:** 1366px - 1920px
- **Tablet:** 768px - 1365px
- **Mobile:** 375px - 767px

---

## 📄 Páginas do Sistema

### **1. Página Inicial (Home) - `/`**

#### **Estrutura:**
```
┌─────────────────────────────────────┐
│         NAVBAR (Fixo)               │
├─────────────────────────────────────┤
│                                     │
│         HERO SECTION                │
│    (Logo + Título + Descrição)      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│      DÚVIDAS FREQUENTES             │
│    (Cards em Swiper/Carrossel)      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   GUIA DE SOLUÇÕES RÁPIDAS          │
│    (Tutoriais e Procedimentos)      │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

#### **Componentes:**
- **Navbar:** Navegação principal com 7 links
- **Hero Section:** Apresentação do portal
- **Cards (Swiper):** 5 cards de dúvidas frequentes
  - VPN (Acesso Remoto)
  - Erro ao logar no Outlook
  - Co-Working FHEMIG
  - JABBER
  - Siga-me
- **Guia de Soluções:** Procedimentos detalhados

#### **Cores:**
- Background: `bg-light` (#f8f9fa)
- Cards: `bg-white` com sombra
- Texto: `text-secondary` (#6c757d)
- Links: `text-primary` (#1E6FFF)

#### **Animações:**
- Fade-up nos cards
- Hover effects nos botões
- Transições suaves (300ms)

---

### **2. Página VPN - `/vpn`**

#### **Estrutura:**
```
┌─────────────────────────────────────┐
│         NAVBAR                      │
├─────────────────────────────────────┤
│                                     │
│      HERO SECTION (Azul)            │
│    Ícone VPN + Título               │
│                                     │
├─────────────────────────────────────┤
│                                     │
│    CARDS INFORMATIVOS (3)           │
│  Manual | Planilha | Telefone       │
│                                     │
├─────────────────────────────────────┤
│                                     │
│      FAQ ACCORDION                  │
│   (10 perguntas frequentes)         │
│                                     │
├─────────────────────────────────────┤
│                                     │
│    PROCEDIMENTOS PASSO A PASSO      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│      LINKS ÚTEIS                    │
│   (Manuais e Tutoriais)             │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

#### **Elementos Visuais:**
- **Hero:** Gradiente azul (`from-blue-600 to-blue-800`)
- **Cards:** Brancos com ícones coloridos
- **Accordion:** Bordas arredondadas, hover effects
- **Badges:** Status (Ativo, Pendente, etc.)

#### **Ícones Usados:**
- Shield (VPN)
- Download (Manuais)
- Phone (Contato)
- HelpCircle (FAQ)
- CheckCircle (Procedimentos)

---

### **3. Página Jabber - `/jabber`**

#### **Estrutura:**
```
┌─────────────────────────────────────┐
│         NAVBAR                      │
├─────────────────────────────────────┤
│                                     │
│    HERO SECTION (Verde)             │
│   Ícone Jabber + Título             │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   TUTORIAL DE INSTALAÇÃO            │
│    (Passo a passo numerado)         │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   CONFIGURAÇÃO INICIAL              │
│    (Screenshots + Instruções)       │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   SOLUÇÃO DE PROBLEMAS              │
│    (Erros comuns + Soluções)        │
│                                     │
├─────────────────────────────────────┤
│                                     │
│      RECURSOS                       │
│  Manual | Vídeo | Planilha          │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

#### **Elementos Visuais:**
- **Hero:** Gradiente verde (`from-green-600 to-green-800`)
- **Steps:** Números em círculos coloridos
- **Screenshots:** Bordas arredondadas, sombra
- **Alerts:** Info boxes com ícones

---

### **4. Página Outlook - `/outlook`**

#### **Estrutura:**
```
┌─────────────────────────────────────┐
│         NAVBAR                      │
├─────────────────────────────────────┤
│                                     │
│   HERO SECTION (Laranja)            │
│  Ícone Outlook + Título             │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   OFFICE 365 OVERVIEW               │
│    (Recursos disponíveis)           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   CAIXAS COMPARTILHADAS             │
│  (Como solicitar e configurar)      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   ERROS COMUNS                      │
│    (Troubleshooting)                │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   TUTORIAIS EM VÍDEO                │
│    (Links externos)                 │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

#### **Elementos Visuais:**
- **Hero:** Gradiente laranja (`from-orange-600 to-orange-800`)
- **Feature Cards:** Grid 3 colunas
- **Video Thumbnails:** Aspect ratio 16:9
- **Code Blocks:** Fundo cinza, fonte monospace

---

### **5. Página FHEMIG - `/fhemig`**

#### **Estrutura:**
```
┌─────────────────────────────────────┐
│         NAVBAR                      │
├─────────────────────────────────────┤
│                                     │
│   HERO SECTION (Roxo)               │
│  Ícone Building + Título            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   SOBRE O CO-WORKING                │
│    (Informações gerais)             │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   SISTEMA DE RESERVAS               │
│  (Como reservar estação)            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   LOCALIZAÇÃO E ACESSO              │
│    (Mapa + Instruções)              │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   FORMULÁRIO DE SOLICITAÇÃO         │
│    (Reserva de estação)             │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

#### **Elementos Visuais:**
- **Hero:** Gradiente roxo (`from-purple-600 to-purple-800`)
- **Info Cards:** Ícones grandes, texto centralizado
- **Form:** Campos com validação visual
- **Map:** Iframe ou imagem estática

---

### **6. Página Siga-me - `/sigaMe`**

#### **Estrutura:**
```
┌─────────────────────────────────────┐
│         NAVBAR                      │
├─────────────────────────────────────┤
│                                     │
│   HERO SECTION (Teal)               │
│  Ícone Phone + Título               │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   O QUE É O SIGA-ME                 │
│    (Explicação do sistema)          │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   COMO CONFIGURAR                   │
│    (Tutorial passo a passo)         │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   FAQ                               │
│    (Perguntas frequentes)           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   CONTATO PRODEMGE                  │
│    (Informações de suporte)         │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

#### **Elementos Visuais:**
- **Hero:** Gradiente teal (`from-teal-600 to-teal-800`)
- **Timeline:** Steps verticais com linhas conectoras
- **Callouts:** Boxes destacados com ícones
- **Contact Cards:** Informações de contato estilizadas

---

### **7. Página Tutoriais - `/tutoriais`**

#### **Estrutura:**
```
┌─────────────────────────────────────┐
│         NAVBAR                      │
├─────────────────────────────────────┤
│                                     │
│   HERO SECTION (Azul)               │
│  Ícone BookOpen + Título            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   BARRA DE BUSCA                    │
│    (Pesquisar tutoriais)            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   FILTROS                           │
│  Categoria | Dificuldade | Tipo     │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   GRID DE TUTORIAIS                 │
│    (Cards 3 colunas)                │
│  - VPN                              │
│  - Jabber                           │
│  - Outlook                          │
│  - FHEMIG                           │
│  - Siga-me                          │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   ESTATÍSTICAS                      │
│  Total | Visualizações | Novos      │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

#### **Elementos Visuais:**
- **Hero:** Gradiente azul
- **Search Bar:** Input grande com ícone de lupa
- **Filter Chips:** Pills clicáveis
- **Tutorial Cards:** Imagem + Título + Descrição + Badge
- **Stats:** Números grandes com ícones

---

### **8. Página Suporte - `/suporte`**

#### **Estrutura:**
```
┌─────────────────────────────────────┐
│         NAVBAR                      │
├─────────────────────────────────────┤
│                                     │
│   HERO SECTION (Índigo)             │
│  Ícone Headphones + Título          │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   4 MÉTODOS DE CONTATO              │
│  Telefone | E-mail | Chat | Presencial│
│                                     │
├─────────────────────────────────────┤
│                                     │
│   ESTRUTURA DA EQUIPE               │
│  Coordenação (1)                    │
│  Suporte (6)                        │
│  Infraestrutura (2)                 │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   FAQ COM BUSCA                     │
│    (10 perguntas + busca)           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   HORÁRIOS DE ATENDIMENTO           │
│    (Tabela de horários)             │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   LINKS ÚTEIS                       │
│    (Recursos adicionais)            │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

#### **Elementos Visuais:**
- **Hero:** Gradiente índigo
- **Contact Cards:** 4 cards com ícones grandes
- **Team Cards:** Fotos (placeholder) + Nome + Cargo + Ramal
- **FAQ Accordion:** Busca integrada
- **Schedule Table:** Tabela responsiva

---

### **9. Página Downloads - `/downloads`**

#### **Estrutura:**
```
┌─────────────────────────────────────┐
│         NAVBAR                      │
├─────────────────────────────────────┤
│                                     │
│   HERO SECTION (Esmeralda)          │
│  Ícone Download + Título            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   BARRA DE BUSCA                    │
│    (Pesquisar documentos)           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   FILTROS                           │
│  Categoria | Tipo | Data            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   LISTA DE DOCUMENTOS               │
│    (12 POPs e Manuais)              │
│  - POP VPN                          │
│  - Manual Jabber                    │
│  - Guia OneDrive                    │
│  - etc...                           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   ESTATÍSTICAS                      │
│  Total Downloads | Mais Baixados    │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

#### **Elementos Visuais:**
- **Hero:** Gradiente esmeralda
- **Document Cards:** Ícone de arquivo + Nome + Tamanho + Botão
- **File Icons:** PDF (vermelho), Word (azul), Excel (verde)
- **Download Button:** Ícone + Texto
- **Stats:** Gráfico de barras simples

---

### **10. Página Blog - `/blog`**

#### **Estrutura:**
```
┌─────────────────────────────────────┐
│         NAVBAR                      │
├─────────────────────────────────────┤
│                                     │
│   HERO SECTION (Ciano)              │
│  Ícone Newspaper + Título           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   POST EM DESTAQUE                  │
│    (Card grande com imagem)         │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   FILTROS POR CATEGORIA             │
│  7 categorias disponíveis           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   GRID DE POSTS                     │
│    (8 posts em cards)               │
│  Imagem + Título + Resumo + Data    │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   PAGINAÇÃO                         │
│    (Navegação entre páginas)        │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

#### **Elementos Visuais:**
- **Hero:** Gradiente ciano
- **Featured Post:** Card grande com imagem de fundo
- **Category Pills:** Badges coloridos clicáveis
- **Post Cards:** Grid 2-3 colunas
- **Author Info:** Avatar + Nome + Data
- **Pagination:** Números + Setas

---

### **11. Página Painel - `/painel`**

#### **Estrutura:**
```
┌─────────────────────────────────────┐
│         NAVBAR                      │
├─────────────────────────────────────┤
│                                     │
│   HERO SECTION (Slate)              │
│  Ícone BarChart + Título            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   4 CARDS DE ESTATÍSTICAS           │
│  Total | Resolvidos | Tempo | Satisfação│
│                                     │
├─────────────────────────────────────┤
│                                     │
│   SELETOR DE PERÍODO                │
│  Hoje | Semana | Mês | Ano          │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   GRÁFICO DE LINHA                  │
│  (Chamados por mês - Chart.js)      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   GRÁFICO DE BARRAS                 │
│  (Chamados por categoria)           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   GRÁFICO DE ROSCA                  │
│  (Status dos chamados)              │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   SERVIÇOS MAIS UTILIZADOS          │
│    (Lista com barras de progresso)  │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   ATIVIDADES RECENTES               │
│    (Timeline de eventos)            │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

#### **Elementos Visuais:**
- **Hero:** Gradiente slate
- **Stat Cards:** Números grandes + Ícones + Tendência
- **Period Selector:** Tabs horizontais
- **Charts:** Chart.js com cores do tema
- **Progress Bars:** Animadas, cores variadas
- **Timeline:** Linha vertical com pontos

---

### **12. Página Contato - `/contato`** ⭐ PRINCIPAL

#### **Estrutura:**
```
┌─────────────────────────────────────┐
│         NAVBAR                      │
├─────────────────────────────────────┤
│                                     │
│   HERO SECTION (Azul Primário)      │
│  Ícone Mail + Título                │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   4 CARDS INFORMATIVOS              │
│  E-mail | Telefone | Local | Horário│
│                                     │
├─────────────────────────────────────┤
│                                     │
│   FORMULÁRIO DE CONTATO             │
│  ┌───────────────────────────────┐  │
│  │ Nome Completo *               │  │
│  │ E-mail *                      │  │
│  │ Telefone/Ramal * (formatado)  │  │
│  │ Cargo *                       │  │
│  │ Setor *                       │  │
│  │ Superintendência *            │  │
│  │                               │  │
│  │ ┌─ CLASSIFICAÇÃO ─────────┐   │  │
│  │ │ Categoria *              │   │  │
│  │ │ Tipo de Problema *       │   │  │
│  │ └─────────────────────────┘   │  │
│  │                               │  │
│  │ Assunto *                     │  │
│  │ Descrição Detalhada *         │  │
│  │ (mínimo 30 caracteres)        │  │
│  │                               │  │
│  │ [Enviar via Outlook Web]      │  │
│  └───────────────────────────────┘  │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   OUTRAS OPÇÕES DE CONTATO          │
│  Chat Bot AI | Central Suporte      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   ASSINATURA DE E-MAIL              │
│    (Link para gerador)              │
│                                     │
├─────────────────────────────────────┤
│                                     │
│   CTA FINAL                         │
│  Ligar Agora | Ver Suporte          │
│                                     │
├─────────────────────────────────────┤
│         FOOTER                      │
└─────────────────────────────────────┘
```

#### **Elementos Visuais Detalhados:**

**Hero Section:**
- Background: Gradiente `from-primary-600 via-primary-700 to-primary-800`
- Ícone: Mail em círculo branco/20% opacity
- Título: `text-4xl md:text-5xl font-bold`
- Subtítulo: `text-xl text-white/90`

**Cards Informativos:**
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- Cada card:
  - Ícone colorido em círculo (16x16)
  - Título em negrito
  - Informação primária
  - Informação secundária
  - Descrição pequena
- Hover: Sombra aumenta, escala 1.02

**Formulário:**
- Container: Card branco com sombra suave
- Campos:
  - Labels: `text-sm font-medium text-secondary-700`
  - Inputs: `rounded-xl border py-3 px-4`
  - Ícones: Posicionados à esquerda (absolute)
  - Erro: Borda vermelha + mensagem + ícone AlertCircle
  - Sucesso: Borda verde (após validação)

**Card de Classificação:**
- Background: Gradiente `from-blue-50 to-indigo-50`
- Borda: `border-2 border-blue-200`
- Título: Com ícone Cpu
- Selects: 2 colunas em desktop, 1 em mobile
- Dica: Box branco/50% com ícone

**Botão de Envio:**
- Background: `bg-primary-600`
- Hover: `bg-primary-700`
- Sombra: `shadow-lg hover:shadow-xl`
- Loading: Spinner + texto "Abrindo Outlook..."
- Disabled: Opacidade 50%

**Validações Visuais:**
- Campo vazio + submit: Borda vermelha
- Campo com erro: Mensagem vermelha + ícone
- Campo válido: Borda normal
- Formatação telefone: Automática em tempo real

---

## 🧩 Componentes Reutilizáveis

### **1. Navbar**

**Arquivo:** `src/components/Navbar.jsx`

**Estrutura:**
```jsx
<nav className="bg-white shadow-soft sticky top-0 z-50">
  <div className="max-w-7xl mx-auto">
    <div className="flex justify-between items-center h-20">
      {/* Logo */}
      <Link to="/">
        <div className="w-12 h-12 bg-primary-500 rounded-xl">
          TI
        </div>
        <div>
          <div>Suporte TI</div>
          <div>SES-MG • Cidade Administrativa</div>
        </div>
      </Link>
      
      {/* Menu Desktop */}
      <div className="hidden lg:flex">
        {menuItems.map(item => (
          <Link to={item.path}>
            <item.icon />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
      
      {/* Menu Mobile */}
      <button onClick={toggleMenu}>
        <Menu />
      </button>
    </div>
  </div>
</nav>
```

**Props:** Nenhuma (usa react-router-dom)

**Estados:**
- `isMenuOpen`: Boolean para menu mobile

**Estilos:**
- Fixo no topo (`sticky top-0`)
- Sombra suave
- Altura: 80px (h-20)
- Z-index: 50

**Responsividade:**
- Desktop: Menu horizontal
- Mobile: Hamburger menu

---

### **2. Footer**

**Arquivo:** `src/components/Footer.jsx`

**Estrutura:**
```jsx
<footer className="bg-secondary-900 text-white">
  <div className="max-w-7xl mx-auto py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Coluna 1: Logo e Descrição */}
      <div>
        <div className="logo">TI</div>
        <p>Assessoria de Tecnologia da Informação</p>
      </div>
      
      {/* Coluna 2: Links Rápidos */}
      <div>
        <h3>Links Rápidos</h3>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/tutoriais">Tutoriais</Link></li>
          <li><Link to="/suporte">Suporte</Link></li>
        </ul>
      </div>
      
      {/* Coluna 3: Contato */}
      <div>
        <h3>Contato</h3>
        <p>📞 (31) 3916-0031</p>
        <p>📧 suporteti.ca@saude.mg.gov.br</p>
      </div>
      
      {/* Coluna 4: Redes Sociais */}
      <div>
        <h3>Siga-nos</h3>
        {/* Links sociais */}
      </div>
    </div>
    
    <div className="border-t border-white/10 mt-8 pt-8">
      <p>© 2024 SES-MG. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>
```

**Estilos:**
- Background: Cinza escuro
- Texto: Branco
- Grid: 4 colunas em desktop, 1 em mobile
- Links: Hover com underline

---

### **3. ContactForm**

**Arquivo:** `src/components/ContactForm.jsx`

**Estrutura:** (Ver seção Página Contato acima)

**Props:** Nenhuma

**Estados:**
- `formData`: Objeto com todos os campos
- `errors`: Objeto com erros de validação
- `isSending`: Boolean para loading state

**Funções:**
- `handleChange`: Atualiza formData
- `handlePhoneChange`: Formata telefone automaticamente
- `validateForm`: Valida todos os campos
- `handleSubmit`: Envia formulário

**Validações:**
- Nome: Não vazio
- E-mail: Regex válido
- Telefone: DDD 31 + 8 dígitos
- Cargo: Não vazio
- Setor: Não vazio
- Superintendência: Não vazio
- Categoria: Selecionada
- Tipo: Selecionado
- Assunto: Não vazio
- Mensagem: Mínimo 30 caracteres

---

### **4. Cards**

**Arquivo:** `src/components/Cards.jsx`

**Estrutura:**
```jsx
<Swiper>
  {dataList.items.map(item => (
    <SwiperSlide>
      <Link to={item.link}>
        <div className="card">
          <h3>{item.title}</h3>
          <img src={item.img} />
          <p>{item.description}</p>
          <p>LER MAIS</p>
        </div>
      </Link>
    </SwiperSlide>
  ))}
</Swiper>
```

**Props:**
- `items`: Array de objetos com title, description, link, img

**Estilos:**
- Card branco com sombra
- Imagem: aspect-ratio 16:9
- Hover
