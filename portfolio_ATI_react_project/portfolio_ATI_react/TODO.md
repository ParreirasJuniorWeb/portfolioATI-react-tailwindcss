# TODO - Portfólio ATI SES/MG

## Status do Projeto
**Fase Atual:** Configuração Inicial e Desenvolvimento do Formulário de Contato

**E-mail para Testes:** joaoparreiras2020@gmail.com  
**E-mail Corporativo (Apenas Deploy Final):** suporteti.ca@saude.mg.gov.br

---

## ✅ Fase 1: Configuração Inicial (PRIORIDADE ALTA)

### 1.1 Instalação e Configuração do Tailwind CSS
- [ ] Instalar Tailwind CSS, PostCSS e Autoprefixer
- [ ] Criar e configurar `tailwind.config.js` com tema personalizado (azul, branco, preto)
- [ ] Criar `postcss.config.js`
- [ ] Atualizar `index.css` com diretivas do Tailwind
- [ ] Testar configuração básica

### 1.2 Instalação de Dependências Adicionais
- [ ] Instalar Chart.js e react-chartjs-2
- [ ] Instalar bibliotecas para relatórios (jsreport ou alternativas)
- [ ] Configurar variáveis de ambiente (.env)

---

## ✅ Fase 2: Formulário de Contato (PRIORIDADE MÁXIMA)

### 2.1 Desenvolvimento do Formulário
- [ ] Criar componente de formulário com Tailwind CSS
- [ ] Implementar validação completa de campos
- [ ] Adicionar campos: Nome, E-mail, Cargo, Setor, Superintendência, Telefone/Ramal, Assunto, Descrição
- [ ] Implementar upload de anexos (prints, logs)
- [ ] Adicionar feedback visual (loading, success, error)

### 2.2 Sistema de Envio de E-mails
- [ ] Configurar EmailJS com e-mail de teste: joaoparreiras2020@gmail.com
- [ ] Criar template de e-mail profissional
- [ ] Implementar envio com anexos
- [ ] Testar envio de e-mails
- [ ] Adicionar confirmação de envio ao usuário

### 2.3 Validações e Segurança
- [ ] Validação de formato de e-mail
- [ ] Validação de campos obrigatórios
- [ ] Sanitização de inputs
- [ ] Proteção contra spam (captcha ou rate limiting)
- [ ] Mensagens de erro amigáveis

---

## ✅ Fase 3: Migração para Tailwind CSS

### 3.1 Componentes de Layout
- [ ] Migrar Navbar para Tailwind
- [ ] Migrar Footer para Tailwind
- [ ] Criar componente de Loading com Tailwind
- [ ] Atualizar LogoSES com Tailwind

### 3.2 Componentes de Conteúdo
- [ ] Migrar Cards para Tailwind
- [ ] Migrar GuiaSolucoesRapidasSuporteti para Tailwind
- [ ] Atualizar componentes de páginas (VPN, Outlook, etc.)

### 3.3 Remover Bootstrap
- [ ] Remover imports do Bootstrap
- [ ] Verificar funcionalidades que dependem do Bootstrap
- [ ] Substituir classes Bootstrap por Tailwind
- [ ] Testar responsividade

---

## ✅ Fase 4: Estrutura de Dados e Conteúdo

### 4.1 Organização de POPs e Manuais
- [ ] Criar pasta `src/data/` para POPs
- [ ] Criar arquivo JSON com metadados dos POPs
- [ ] Organizar POPs por categorias
- [ ] Criar sistema de busca e filtros

### 4.2 Sistema de Downloads
- [ ] Criar página de Downloads
- [ ] Implementar listagem de POPs
- [ ] Adicionar filtros por categoria
- [ ] Implementar busca
- [ ] Adicionar preview de documentos (se possível)

---

## ✅ Fase 5: Tutoriais e Autoatendimento

### 5.1 Página de Tutoriais
- [ ] Criar layout de tutoriais com Tailwind
- [ ] Implementar sistema de categorias
- [ ] Adicionar tutoriais existentes (VPN, Jabber, Outlook, etc.)
- [ ] Criar componente de passo a passo
- [ ] Adicionar imagens e vídeos

### 5.2 Guia de Soluções Rápidas
- [ ] Melhorar componente existente
- [ ] Adicionar mais soluções baseadas nos POPs
- [ ] Implementar busca rápida
- [ ] Adicionar FAQ

---

## ✅ Fase 6: Dashboard e Gráficos

### 6.1 Componentes de Gráficos (Chart.js)
- [ ] Criar componente base para gráficos
- [ ] Implementar gráfico de chamados por categoria
- [ ] Implementar gráfico de tempo de resolução
- [ ] Implementar gráfico de chamados abertos vs fechados
- [ ] Adicionar interatividade aos gráficos

### 6.2 Página de Dashboard
- [ ] Criar layout do dashboard
- [ ] Integrar gráficos
- [ ] Adicionar cards de estatísticas
- [ ] Implementar filtros de período

---

## ✅ Fase 7: Sistema de Blog/Comunicados

### 7.1 Estrutura do Blog
- [ ] Criar modelo de dados para posts
- [ ] Criar página de listagem de posts
- [ ] Criar página individual de post
- [ ] Implementar categorias e tags
- [ ] Adicionar sistema de busca

### 7.2 Conteúdo Inicial
- [ ] Criar posts de exemplo
- [ ] Adicionar comunicados importantes
- [ ] Organizar por categorias

---

## ✅ Fase 8: Integração Chat Volt

### 8.1 Widget de Chat
- [ ] Integrar script do Chat Volt
- [ ] Configurar URL: https://chatvolt.ai/@chat_bot_ti_ses
- [ ] Estilizar widget com tema do site
- [ ] Posicionar estrategicamente
- [ ] Testar funcionalidade

---

## ✅ Fase 9: Sistema de Relatórios

### 9.1 Geração de Relatórios
- [ ] Implementar geração de PDF
- [ ] Implementar exportação para Excel
- [ ] Criar templates de relatórios
- [ ] Adicionar opções de personalização

---

## ✅ Fase 10: Otimizações e Performance

### 10.1 Performance
- [ ] Implementar lazy loading de componentes
- [ ] Otimizar imagens
- [ ] Code splitting
- [ ] Minificação de assets

### 10.2 SEO e Acessibilidade
- [ ] Adicionar meta tags
- [ ] Implementar tags semânticas
- [ ] Adicionar alt text em imagens
- [ ] Testar com screen readers
- [ ] Validar contraste de cores

### 10.3 Responsividade
- [ ] Testar em mobile
- [ ] Testar em tablet
- [ ] Testar em desktop
- [ ] Ajustar breakpoints

---

## ✅ Fase 11: Documentação

### 11.1 Documentação Técnica
- [ ] Atualizar README.md completo
- [ ] Documentar estrutura de pastas
- [ ] Documentar componentes principais
- [ ] Criar guia de instalação
- [ ] Criar guia de desenvolvimento

### 11.2 Documentação de Arquitetura
- [ ] Documentar padrões de design
- [ ] Documentar fluxo de dados
- [ ] Criar diagramas (se necessário)
- [ ] Documentar decisões técnicas

### 11.3 Manual de Manutenção
- [ ] Como adicionar novos POPs
- [ ] Como atualizar conteúdo
- [ ] Como adicionar novas páginas
- [ ] Troubleshooting comum
- [ ] Guia de deploy

---

## ✅ Fase 12: Testes Finais

### 12.1 Testes Funcionais
- [ ] Testar todos os formulários
- [ ] Testar navegação
- [ ] Testar downloads
- [ ] Testar responsividade
- [ ] Testar em diferentes navegadores

### 12.2 Testes de E-mail
- [ ] Testar envio com joaoparreiras2020@gmail.com
- [ ] Verificar formatação de e-mails
- [ ] Testar anexos
- [ ] Validar templates

### 12.3 Configuração para Deploy
- [ ] Atualizar e-mail para suporteti.ca@saude.mg.gov.br
- [ ] Configurar variáveis de ambiente de produção
- [ ] Testar envio final com e-mail corporativo
- [ ] Validar todas as funcionalidades

---

## ✅ Fase 13: Deploy

### 13.1 Preparação
- [ ] Build de produção
- [ ] Otimização final
- [ ] Configuração de servidor
- [ ] Configuração de domínio

### 13.2 Deploy
- [ ] Deploy em ambiente de produção
- [ ] Testes pós-deploy
- [ ] Monitoramento inicial
- [ ] Documentação de deploy

---

## Notas Importantes

⚠️ **E-MAIL DE TESTE:** joaoparreiras2020@gmail.com  
⚠️ **E-MAIL CORPORATIVO (APENAS NO DEPLOY):** suporteti.ca@saude.mg.gov.br  
⚠️ **NÃO ENVIAR E-MAILS PARA A EQUIPE DURANTE DESENVOLVIMENTO**

---

## Progresso Geral

- [ ] Fase 1: Configuração Inicial (0%)
- [ ] Fase 2: Formulário de Contato (0%) - **PRIORIDADE**
- [ ] Fase 3: Migração Tailwind (0%)
- [ ] Fase 4: Estrutura de Dados (0%)
- [ ] Fase 5: Tutoriais (0%)
- [ ] Fase 6: Dashboard (0%)
- [ ] Fase 7: Blog (0%)
- [ ] Fase 8: Chat Volt (0%)
- [ ] Fase 9: Relatórios (0%)
- [ ] Fase 10: Otimizações (0%)
- [ ] Fase 11: Documentação (0%)
- [ ] Fase 12: Testes (0%)
- [ ] Fase 13: Deploy (0%)

**Última Atualização:** 2025-01-XX
