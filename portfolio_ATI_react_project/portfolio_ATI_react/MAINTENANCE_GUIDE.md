# 🔧 Guia de Manutenção - Portfólio ATI SES/MG

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Manutenção Preventiva](#manutenção-preventiva)
3. [Manutenção Corretiva](#manutenção-corretiva)
4. [Atualizações de Conteúdo](#atualizações-de-conteúdo)
5. [Monitoramento](#monitoramento)
6. [Backup e Recuperação](#backup-e-recuperação)
7. [Checklist de Manutenção](#checklist-de-manutenção)

---

## 🎯 Visão Geral

### **Objetivo**
Este guia fornece instruções detalhadas para manter o sistema operante, atualizado e funcionando corretamente.

### **Responsáveis**
- **Equipe de Suporte TI:** Manutenção de conteúdo
- **Desenvolvedores:** Manutenção técnica
- **Coordenação:** Aprovação de mudanças

### **Frequência de Manutenção**
- **Diária:** Monitoramento de erros
- **Semanal:** Verificação de links e conteúdo
- **Mensal:** Atualização de dependências
- **Trimestral:** Revisão completa do sistema

---

## 🛡️ Manutenção Preventiva

### **1. Atualização de Dependências**

#### **Verificar Atualizações Disponíveis:**
```bash
cd portfolio_ATI_react_project/portfolio_ATI_react
npm outdated
```

#### **Atualizar Dependências Menores:**
```bash
npm update
```

#### **Atualizar Dependências Maiores (com cuidado):**
```bash
# Verificar changelog antes de atualizar
npm install react@latest react-dom@latest
npm install tailwindcss@latest
```

#### **Testar Após Atualização:**
```bash
npm run dev
# Testar todas as páginas
# Verificar console por erros
npm run build
# Verificar se build funciona
```

#### **Checklist de Atualização:**
- [ ] Backup do código atual
- [ ] Ler changelog das dependências
- [ ] Atualizar uma dependência por vez
- [ ] Testar completamente
- [ ] Commit das mudanças
- [ ] Deploy em homologação
- [ ] Testar em produção

---

### **2. Limpeza de Cache e Arquivos Temporários**

#### **Limpar Cache do npm:**
```bash
npm cache clean --force
```

#### **Remover node_modules e reinstalar:**
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

#### **Limpar build anterior:**
```bash
rm -rf dist
npm run build
```

---

### **3. Verificação de Links**

#### **Links Internos:**
```bash
# Verificar manualmente ou usar ferramenta
# Testar navegação entre páginas
# Verificar se todos os links funcionam
```

**Páginas a verificar:**
- [ ] / → Todas as páginas
- [ ] /vpn → Links para manuais
- [ ] /jabber → Links para tutoriais
- [ ] /outlook → Links para Office 365
- [ ] /fhemig → Links para reservas
- [ ] /sigaMe → Links para PRODEMGE
- [ ] /tutoriais → Links para páginas individuais
- [ ] /suporte → Links para contato
- [ ] /downloads → Links para arquivos
- [ ] /blog → Links para posts
- [ ] /painel → Sem links externos
- [ ] /contato → Links para Chat Bot e Suporte

#### **Links Externos:**
- [ ] Chat Bot AI: https://app.chatvolt.ai/@chat_bot_ti_ses
- [ ] Assinatura E-mail: http://assinaturaemail.saude.mg.gov.br/
- [ ] Manuais VPN (SharePoint)
- [ ] Tutoriais Jabber (YouTube)
- [ ] Planilhas (SharePoint)

---

### **4. Otimização de Performance**

#### **Analisar Bundle Size:**
```bash
npm run build
# Verificar tamanho dos arquivos em dist/
```

#### **Otimizar Imagens:**
- Comprimir imagens grandes
- Usar formatos modernos (WebP)
- Lazy loading para imagens

#### **Code Splitting:**
```javascript
// Implementar lazy loading de páginas
const VpnPage = lazy(() => import('./pages/VpnPage'));
```

#### **Remover Código Não Utilizado:**
```bash
# Verificar imports não utilizados
# Remover componentes obsoletos
# Limpar console.logs
```

---

## 🔨 Manutenção Corretiva

### **1. Correção de Bugs**

#### **Processo:**
1. **Identificar o Bug:**
   - Reproduzir o erro
   - Verificar console do navegador
   - Verificar logs do servidor

2. **Isolar o Problema:**
   - Identificar componente afetado
   - Verificar código relacionado
   - Testar em diferentes navegadores

3. **Corrigir:**
   - Fazer alterações necessárias
   - Testar localmente
   - Commit com mensagem descritiva

4. **Validar:**
   - Testar em todos os navegadores
   - Verificar responsividade
   - Confirmar que não quebrou nada

5. **Deploy:**
   - Deploy em homologação
   - Testes finais
   - Deploy em produção

#### **Exemplo de Correção:**

**Bug:** Formulário não envia em mobile

**Diagnóstico:**
```javascript
// Verificar console
// Erro: "Cannot read property 'value' of null"
```

**Correção:**
```javascript
// Antes
const value = e.target.value;

// Depois
const value = e.target?.value || '';
```

**Teste:**
```bash
npm run dev
# Testar em mobile
# Verificar se funciona
```

---

### **2. Problemas Comuns e Soluções**

#### **Problema 1: Página Branca**

**Sintomas:**
- Página não carrega
- Console mostra erro

**Diagnóstico:**
```bash
# Verificar console do navegador
# Verificar terminal do Vite
```

**Soluções:**
1. Verificar imports incorretos
2. Verificar sintaxe JSX
3. Verificar dependências faltando
4. Limpar cache e reinstalar

```bash
rm -rf node_modules
npm install
npm run dev
```

---

#### **Problema 2: Formulário Não Envia**

**Sintomas:**
- Botão não responde
- Outlook não abre

**Diagnóstico:**
```javascript
// Verificar validações
console.log('Errors:', errors);
console.log('Form Data:', formData);
```

**Soluções:**
1. Verificar validações
2. Verificar bloqueador de pop-ups
3. Verificar URL do Outlook
4. Verificar encodeURIComponent

---

#### **Problema 3: Estilos Não Aplicam**

**Sintomas:**
- Página sem estilo
- Classes Tailwind não funcionam

**Diagnóstico:**
```bash
# Verificar tailwind.config.js
# Verificar postcss.config.js
```

**Soluções:**
1. Verificar configuração Tailwind
2. Rebuild do projeto
3. Verificar purge/content paths

```bash
npm run build
npm run dev
```

---

#### **Problema 4: Rotas Não Funcionam**

**Sintomas:**
- 404 ao acessar página
- Navegação quebrada

**Diagnóstico:**
```javascript
// Verificar main.jsx
// Verificar rotas configuradas
```

**Soluções:**
1. Verificar BrowserRouter
2. Verificar paths das rotas
3. Verificar imports dos componentes

---

## 📝 Atualizações de Conteúdo

### **1. Atualizar Equipe de Suporte**

**Arquivo:** `src/pages/SuportePage.jsx`

**Localização:**
```javascript
// Linha ~50
const coordenacao = [
  {
    nome: 'Henrique Rangel Mattos Jardim',
    cargo: 'Coordenador Geral',
    ramal: '59978',
  },
];

// Linha ~60
const equipeSuporte = [
  {
    nome: 'João Victor Parreiras Soares',
    cargo: 'Técnico de TI',
    ramal: '(31) 3916-0031',
  },
  // ... adicionar/remover membros aqui
];
```

**Passos:**
1. Abrir arquivo
2. Localizar array correspondente
3. Adicionar/remover/editar membro
4. Salvar arquivo
5. Testar página /suporte
6. Commit e deploy

---

### **2. Adicionar Novo Tutorial**

**Passo 1: Criar Página do Tutorial**

```bash
# Criar arquivo
touch src/pages/NovoTutorialPage.jsx
```

**Passo 2: Implementar Componente**

```javascript
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NovoTutorialPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Novo Tutorial</h1>
          <p className="text-xl">Descrição do tutorial</p>
        </div>
      </section>
      
      {/* Conteúdo */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Seu conteúdo aqui */}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NovoTutorialPage;
```

**Passo 3: Adicionar Rota**

**Arquivo:** `src/main.jsx`

```javascript
import NovoTutorialPage from './pages/NovoTutorialPage.jsx';

// Adicionar rota
<Route path="/novo-tutorial" element={<NovoTutorialPage />} />
```

**Passo 4: Adicionar na Página de Tutoriais**

**Arquivo:** `src/pages/TutoriaisPage.jsx`

```javascript
const tutorials = [
  // ... tutoriais existentes
  {
    id: 6,
    title: 'Novo Tutorial',
    description: 'Descrição breve',
    category: 'Categoria',
    difficulty: 'Intermediário',
    views: 0,
    link: '/novo-tutorial',
    icon: IconName,
    color: 'bg-blue-600',
  },
];
```

**Passo 5: Testar e Deploy**

```bash
npm run dev
# Testar /tutoriais
# Testar /novo-tutorial
# Verificar navegação
npm run build
# Deploy
```

---

### **3. Adicionar Novo POP/Manual**

**Arquivo:** `src/pages/DownloadsPage.jsx`

**Localização:**
```javascript
// Linha ~50
const documents = [
  // ... documentos existentes
  {
    id: 13,
    title: 'Novo POP',
    description: 'Descrição do procedimento',
    category: 'POPs',
    type: 'PDF',
    size: '2.5 MB',
    date: '2025-01-15',
    downloads: 0,
    url: '/caminho/para/arquivo.pdf',
  },
];
```

**Passos:**
1. Adicionar arquivo na pasta `public/` ou servidor
2. Adicionar entrada no array `documents`
3. Salvar arquivo
4. Testar download
5. Commit e deploy

---

### **4. Atualizar Post do Blog**

**Arquivo:** `src/pages/BlogPage.jsx`

**Adicionar Novo Post:**
```javascript
const posts = [
  // ... posts existentes
  {
    id: 9,
    title: 'Novo Post',
    excerpt: 'Resumo do post',
    content: 'Conteúdo completo...',
    category: 'Comunicados',
    author: 'Nome do Autor',
    date: '2025-01-15',
    readTime: '5 min',
    image: '/caminho/imagem.jpg',
    featured: false,
  },
];
```

**Editar Post Existente:**
1. Localizar post pelo ID
2. Editar campos necessários
3. Salvar
4. Testar
5. Deploy

---

### **5. Atualizar Telefones e E-mails**

**Locais a Atualizar:**

1. **Navbar** (se houver)
2. **Footer:** `src/components/Footer.jsx`
3. **Página Suporte:** `src/pages/SuportePage.jsx`
4. **Página Contato:** `src/pages/ContatoPage.jsx`
5. **ContactForm:** `src/components/ContactForm.jsx`

**Buscar e Substituir:**
```bash
# Buscar todas as ocorrências
grep -r "3916-0031" src/
grep -r "suporteti.ca@saude.mg.gov.br" src/
```

**Substituir:**
1. Abrir cada arquivo
2. Substituir número/e-mail
3. Salvar
4. Testar todas as páginas
5. Commit e deploy

---

## 📊 Monitoramento

### **1. Monitoramento de Erros**

#### **Console do Navegador:**
- Abrir DevTools (F12)
- Verificar aba Console
- Procurar erros (vermelho)
- Anotar e corrigir

#### **Logs do Servidor:**
```bash
# Durante desenvolvimento
npm run dev
# Verificar terminal por erros
```

#### **Ferramentas Recomendadas:**
- **Sentry:** Monitoramento de erros em produção
- **Google Analytics:** Monitoramento de uso
- **Lighthouse:** Performance e acessibilidade

---

### **2. Monitoramento de Performance**

#### **Métricas a Acompanhar:**
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **TTI (Time to Interactive):** < 3.8s

#### **Ferramentas:**
```bash
# Lighthouse
npm install -g lighthouse
lighthouse http://localhost:5174 --view

# Bundle Analyzer
npm install --save-dev vite-plugin-bundle-analyzer
```

---

### **3. Monitoramento de Disponibilidade**

#### **Uptime Monitoring:**
- **UptimeRobot:** Gratuito, verifica a cada 5 min
- **Pingdom:** Monitoramento avançado
- **StatusCake:** Alternativa gratuita

#### **Configuração:**
1. Criar conta no serviço
2. Adicionar URL do site
3. Configurar alertas (e-mail/SMS)
4. Verificar dashboard regularmente

---

## 💾 Backup e Recuperação

### **1. Backup do Código**

#### **Git (Principal):**
```bash
# Commit regular
git add .
git commit -m "feat: descrição da mudança"
git push origin main

# Tags para versões
git tag -a v1.0.0 -m "Versão 1.0.0"
git push origin v1.0.0
```

#### **Backup Local:**
```bash
# Criar backup compactado
tar -czf backup-$(date +%Y%m%d).tar.gz portfolio_ATI_react_project/

# Mover para local seguro
mv backup-*.tar.gz /caminho/backup/
```

---

### **2. Backup de Conteúdo**

#### **Documentos (POPs, Manuais):**
- Manter cópias no SharePoint
- Backup local mensal
- Versionamento de documentos

#### **Imagens:**
- Backup de `src/img/` e `src/icons/`
- Manter originais em alta resolução

---

### **3. Recuperação de Desastres**

#### **Cenário 1: Código Corrompido**

```bash
# Reverter para commit anterior
git log
git reset --hard <commit-hash>

# Ou restaurar de backup
tar -xzf backup-20250115.tar.gz
```

#### **Cenário 2: Deploy com Erro**

```bash
# Rollback rápido
git revert HEAD
git push origin main

# Ou deploy de versão anterior
git checkout v1.0.0
npm run build
# Deploy
```

#### **Cenário 3: Perda de Dados**

1. Restaurar de backup mais recente
2. Verificar integridade
3. Testar completamente
4. Deploy gradual

---

## ✅ Checklist de Manutenção

### **Diária:**
- [ ] Verificar console por erros
- [ ] Verificar formulário de contato funciona
- [ ] Verificar site está no ar

### **Semanal:**
- [ ] Testar todos os links
- [ ] Verificar formulários
- [ ] Revisar logs de erro
- [ ] Backup do código (git push)

### **Mensal:**
- [ ] Atualizar dependências menores
- [ ] Verificar performance (Lighthouse)
- [ ] Revisar conteúdo desatualizado
- [ ] Backup completo
- [ ] Testar em diferentes navegadores

### **Trimestral:**
- [ ] Atualizar dependências maiores
- [ ] Revisão completa de segurança
- [ ] Otimização de performance
- [ ] Atualização de documentação
- [ ] Treinamento da equipe

### **Anual:**
- [ ] Revisão completa do sistema
- [ ] Planejamento de melhorias
- [ ] Atualização de design (se necessário)
- [ ] Auditoria de acessibilidade

---

## 📞 Suporte

### **Problemas Técnicos:**
- **Desenvolvedor:** João Victor Parreiras Soares
- **E-mail:** joao.soares@saude.mg.gov.br
- **Ramal:** (31) 3916-0031

### **Aprovações:**
- **Coordenador:** Henrique Rangel Mattos Jardim
- **E-mail:** henrique.jardim@saude.mg.gov.br
- **Ramal:** 59978

---

## 📚 Recursos Adicionais

- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Solução de problemas
- [UPGRADE_GUIDE.md](./UPGRADE_GUIDE.md) - Guia de upgrades
- [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) - Guia para desenvolvedores

---

**Última Atualização:** Janeiro 2025
**Versão:** 1.0.0
**Mantido por:** Equipe ATI - SES/MG
