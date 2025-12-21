# 🚀 Guia de Deploy - Portfólio ATI SES/MG

## 📋 Índice
1. [Pré-requisitos](#pré-requisitos)
2. [Preparação para Deploy](#preparação-para-deploy)
3. [Deploy em Vercel](#deploy-em-vercel)
4. [Deploy em Netlify](#deploy-em-netlify)
5. [Deploy em Servidor Próprio](#deploy-em-servidor-próprio)
6. [Configurações Pós-Deploy](#configurações-pós-deploy)
7. [Monitoramento](#monitoramento)
8. [Rollback](#rollback)

---

## ✅ Pré-requisitos

### **Ferramentas Necessárias:**
- Node.js 18+
- npm ou yarn
- Git
- Conta em plataforma de deploy (Vercel/Netlify)

### **Verificações Antes do Deploy:**
```bash
# 1. Verificar se build funciona
npm run build

# 2. Testar preview local
npm run preview

# 3. Verificar se não há erros
npm run lint

# 4. Verificar testes
# (Consultar COMPLETE_TEST_RESULTS.md)
```

---

## 🔧 Preparação para Deploy

### **1. Atualizar Configurações**

#### **Atualizar E-mails (Produção):**

**Arquivo:** `src/components/ContactForm.jsx`

```javascript
// Linha ~150
// ANTES (Teste):
const destinatarios = 'joaoparreiras2020@gmail.com';

// DEPOIS (Produção):
const destinatarios = 'suporteti.ca@saude.mg.gov.br;central@positivo.com.br';
```

#### **Verificar URLs Externas:**
- Chat Bot: https://app.chatvolt.ai/@chat_bot_ti_ses
- Assinatura: http://assinaturaemail.saude.mg.gov.br/
- SharePoint: Links corretos
- YouTube: Links corretos

---

### **2. Otimizações**

#### **Comprimir Imagens:**
```bash
# Usar ferramenta de compressão
# TinyPNG, ImageOptim, etc.
```

#### **Verificar Bundle Size:**
```bash
npm run build
ls -lh dist/assets/

# JavaScript deve ser < 500KB
# CSS deve ser < 100KB
```

#### **Remover Console.logs:**
```bash
# Buscar e remover console.logs
grep -r "console.log" src/

# Ou usar plugin Vite para remover automaticamente
```

---

### **3. Variáveis de Ambiente**

#### **Criar .env.production:**
```bash
# .env.production
VITE_APP_NAME="Portfólio ATI SES/MG"
VITE_APP_VERSION="1.0.0"
VITE_API_URL="https://api.exemplo.com" # Se houver API
```

#### **Usar em Código:**
```javascript
const appName = import.meta.env.VITE_APP_NAME;
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🌐 Deploy em Vercel (Recomendado)

### **Vantagens:**
- ✅ Deploy automático via Git
- ✅ HTTPS gratuito
- ✅ CDN global
- ✅ Preview de PRs
- ✅ Analytics integrado

### **Passo a Passo:**

#### **1. Instalar Vercel CLI:**
```bash
npm i -g vercel
```

#### **2. Login:**
```bash
vercel login
```

#### **3. Deploy Inicial:**
```bash
# Na pasta do projeto
cd portfolio_ATI_react_project/portfolio_ATI_react

# Deploy
vercel

# Responder perguntas:
# - Set up and deploy? Yes
# - Which scope? Sua conta
# - Link to existing project? No
# - Project name? portfolio-ati-ses-mg
# - Directory? ./
# - Override settings? No
```

#### **4. Deploy para Produção:**
```bash
vercel --prod
```

#### **5. Configurar Domínio Personalizado:**
```bash
# No dashboard Vercel
# Settings → Domains → Add Domain
# Exemplo: ati.saude.mg.gov.br
```

#### **6. Configurar Build:**

**vercel.json:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 🔷 Deploy em Netlify

### **Vantagens:**
- ✅ Deploy automático via Git
- ✅ HTTPS gratuito
- ✅ Forms integrados
- ✅ Functions serverless

### **Passo a Passo:**

#### **1. Instalar Netlify CLI:**
```bash
npm i -g netlify-cli
```

#### **2. Login:**
```bash
netlify login
```

#### **3. Inicializar:**
```bash
netlify init

# Responder perguntas:
# - Create & configure a new site? Yes
# - Team? Sua equipe
# - Site name? portfolio-ati-ses-mg
# - Build command? npm run build
# - Directory to deploy? dist
```

#### **4. Deploy:**
```bash
# Deploy de teste
netlify deploy

# Deploy para produção
netlify deploy --prod
```

#### **5. Configurar Redirects:**

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🖥️ Deploy em Servidor Próprio

### **Opção 1: Apache**

#### **1. Build:**
```bash
npm run build
```

#### **2. Copiar Arquivos:**
```bash
# Copiar pasta dist/ para servidor
scp -r dist/* usuario@servidor:/var/www/html/ati/
```

#### **3. Configurar Apache:**

**.htaccess:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

### **Opção 2: Nginx**

#### **1. Build:**
```bash
npm run build
```

#### **2. Copiar Arquivos:**
```bash
scp -r dist/* usuario@servidor:/var/www/ati/
```

#### **3. Configurar Nginx:**

**/etc/nginx/sites-available/ati:**
```nginx
server {
    listen 80;
    server_name ati.saude.mg.gov.br;
    root /var/www/ati;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache estático
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### **4. Ativar Site:**
```bash
sudo ln -s /etc/nginx/sites-available/ati /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

### **Opção 3: Docker**

#### **Dockerfile:**
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### **nginx.conf:**
```nginx
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

#### **Build e Run:**
```bash
# Build imagem
docker build -t portfolio-ati .

# Run container
docker run -d -p 80:80 portfolio-ati
```

---

## ⚙️ Configurações Pós-Deploy

### **1. Configurar HTTPS**

#### **Vercel/Netlify:**
- Automático ✅

#### **Servidor Próprio (Let's Encrypt):**
```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx

# Obter certificado
sudo certbot --nginx -d ati.saude.mg.gov.br

# Renovação automática
sudo certbot renew --dry-run
```

---

### **2. Configurar DNS**

#### **Apontar Domínio:**
```
Tipo: A
Nome: ati
Valor: [IP do servidor]
TTL: 3600

Ou

Tipo: CNAME
Nome: ati
Valor: portfolio-ati-ses-mg.vercel.app
TTL: 3600
```

---

### **3. Configurar Analytics**

#### **Google Analytics:**
```html
<!-- index.html -->
<head>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

---

### **4. Configurar Monitoramento**

#### **UptimeRobot:**
1. Criar conta em uptimerobot.com
2. Adicionar monitor HTTP(S)
3. URL: https://ati.saude.mg.gov.br
4. Intervalo: 5 minutos
5. Alertas: E-mail/SMS

#### **Sentry (Erros):**
```bash
npm install @sentry/react
```

```javascript
// src/main.jsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://...@sentry.io/...",
  environment: "production",
});
```

---

## 📊 Monitoramento

### **Métricas a Acompanhar:**

#### **Disponibilidade:**
- Uptime: > 99.9%
- Response time: < 500ms

#### **Performance:**
- Lighthouse Score: > 90
- Core Web Vitals: Todos verdes

#### **Uso:**
- Visitantes únicos
- Páginas mais acessadas
- Taxa de rejeição

#### **Erros:**
- Erros JavaScript
- Erros 404
- Erros de servidor

---

## 🔄 Rollback

### **Vercel:**
```bash
# Listar deploys
vercel ls

# Promover deploy anterior
vercel promote [deployment-url]
```

### **Netlify:**
```bash
# No dashboard
# Deploys → Selecionar deploy anterior → Publish deploy
```

### **Servidor Próprio:**
```bash
# Restaurar backup
cp -r /backup/dist-20250115/* /var/www/ati/

# Ou via Git
git checkout v1.0.0
npm run build
# Copiar dist/ para servidor
```

---

## ✅ Checklist de Deploy

### **Pré-Deploy:**
- [ ] Build funciona localmente
- [ ] Preview testado
- [ ] Testes passam (250+ testes)
- [ ] E-mails de produção configurados
- [ ] URLs externas verificadas
- [ ] Imagens otimizadas
- [ ] Console.logs removidos
- [ ] Variáveis de ambiente configuradas

### **Deploy:**
- [ ] Deploy realizado
- [ ] Site acessível
- [ ] HTTPS funcionando
- [ ] DNS configurado
- [ ] Todas as páginas carregam
- [ ] Formulário envia e-mails
- [ ] Links externos funcionam

### **Pós-Deploy:**
- [ ] Analytics configurado
- [ ] Monitoramento ativo
- [ ] Backup configurado
- [ ] Equipe notificada
- [ ] Documentação atualizada

---

## 📞 Suporte

### **Problemas no Deploy:**
- **Desenvolvedor:** João Victor Parreiras Soares
- **E-mail:** joao.soares@saude.mg.gov.br
- **Ramal:** (31) 3916-0031

### **Aprovações:**
- **Coordenador:** Henrique Rangel Mattos Jardim
- **E-mail:** henrique.jardim@saude.mg.gov.br
- **Ramal:** 59978

---

## 📚 Recursos

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)

---

**Última Atualização:** Janeiro 2025
**Versão:** 1.0.0
**Mantido por:** Equipe ATI - SES/MG
