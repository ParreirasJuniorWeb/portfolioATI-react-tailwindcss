# 🧪 Guia de Testes - Portfólio ATI

## 📋 Checklist de Testes da Página de Contato

### **Acesso:** http://localhost:5174/contato

---

## ✅ Testes a Realizar

### **1. Navegação**
- [ ] Navbar exibe link "Fale Conosco"
- [ ] Link "Fale Conosco" redireciona para /contato
- [ ] Página carrega sem erros no console
- [ ] Menu mobile funciona

### **2. Hero Section**
- [ ] Ícone de e-mail aparece
- [ ] Título "Entre em Contato" está visível
- [ ] Subtítulo está legível
- [ ] Animação AOS funciona

### **3. Cards de Informações (4 cards)**
- [ ] Card "E-mail" (azul)
  - suporteti.ca@saude.mg.gov.br
  - central@positivo.com.br
- [ ] Card "Telefone" (verde)
  - 0800 525 2001
  - (31) 3916-0031 / 3916-0027
- [ ] Card "Localização" (laranja)
  - Prédio Minas, 12º andar
  - Lado ímpar, final do corredor à esquerda
- [ ] Card "Horário" (roxo)
  - Segunda a Sexta: 8h às 18h
  - Emergências 24/7

### **4. Formulário de Contato**

#### **Campos Obrigatórios:**
- [ ] Nome Completo (ícone de usuário)
- [ ] E-mail (ícone de e-mail)
- [ ] DDD (ícone de telefone)
- [ ] Telefone/Ramal
- [ ] Assunto
- [ ] Descrição Detalhada

#### **Campos Opcionais:**
- [ ] Cargo
- [ ] Setor
- [ ] Superintendência

#### **Validações:**
- [ ] Nome vazio → Erro: "Nome completo é obrigatório"
- [ ] E-mail vazio → Erro: "E-mail é obrigatório"
- [ ] E-mail inválido → Erro: "E-mail inválido"
- [ ] DDD vazio → Erro: "DDD é obrigatório"
- [ ] DDD com 1 dígito → Erro: "DDD deve ter 2 dígitos"
- [ ] DDD com letras → Erro
- [ ] Telefone vazio → Erro: "Telefone é obrigatório"
- [ ] Telefone com 7 dígitos → Erro: "Telefone deve ter 8 ou 9 dígitos"
- [ ] Assunto vazio → Erro: "Assunto é obrigatório"
- [ ] Mensagem vazia → Erro: "Mensagem é obrigatória"

#### **Feedback Visual:**
- [ ] Campos com erro ficam vermelhos
- [ ] Ícone de alerta aparece ao lado do erro
- [ ] Mensagem de erro é clara
- [ ] Campos válidos ficam verdes (após validação)

### **5. Envio do Formulário**

#### **Teste 1: Formulário Vazio**
1. Clique em "Enviar via Outlook Web"
2. **Esperado:** 
   - Toast de erro: "Por favor, corrija os erros no formulário"
   - Todos os campos obrigatórios ficam vermelhos
   - Mensagens de erro aparecem

#### **Teste 2: Formulário Parcialmente Preenchido**
1. Preencha apenas Nome e E-mail
2. Clique em "Enviar"
3. **Esperado:**
   - Erros nos campos vazios (DDD, Telefone, Assunto, Mensagem)

#### **Teste 3: Formulário Completo (PRINCIPAL)**
1. Preencha todos os campos obrigatórios:
   - **Nome:** João Victor Parreiras Soares
   - **E-mail:** joao.soares@saude.mg.gov.br
   - **DDD:** 31
   - **Telefone:** 39160031
   - **Assunto:** Teste de formulário de contato
   - **Mensagem:** Este é um teste do novo formulário de contato serverless do portal ATI.
2. Preencha campos OB:
   - **Cargo:** Técnico de TI
   - **Setor:** ATI
   - **Superintendência:** SARE
3. Clique em "Enviar via Outlook Web"
4. **Esperado:**
   - Botão muda para "Abrindo Outlook..." com spinner
   - Toast de sucesso: "Abrindo Outlook Web com e-mail pré-preenchido!"
   - Nova aba abre com Outlook Web
   - E-mail está pré-preenchido com:
     - **Para:** joaoparreiras2020@gmail.com
     - **Assunto:** [Chamado TI] Teste de formulário de contato
     - **Corpo:** Formatado com todas as informações
   - Formulário é resetado após 1.5s
   - Todos os campos voltam vazios

#### **Teste 4: Verificar Corpo do E-mail**
No Outlook Web, verifique se o corpo contém:
- [ ] Título: "SOLICITAÇÃO DE SUPORTE TI"
- [ ] Seção: "INFORMAÇÕES DO SOLICITANTE"
  - Nome, E-mail, Telefone
  - Cargo, Setor, Superintendência (se preenchidos)
- [ ] Seção: "DESCRIÇÃO DO PROBLEMA"
  - Mensagem completa
- [ ] Seção: "INFORMAÇÕES ADICIONAIS"
  - Data/Hora
  - Origem: Portal ATI
  - Órgão: SES-MG
- [ ] Rodapé com assinatura ATI

### **6. Outras Opções de Contato (2 cards)**
- [ ] Card "Chat Bot AI" (roxo)
  - Link externo funciona
  - Abre em nova aba
- [ ] Card "Central de Suporte" (índigo)
  - Link interno funciona
  - Redireciona para /suporte

### **7. Assinatura de E-mail**
- [ ] Card com gradiente azul
- [ ] Botão "Criar Assinatura Digital"
- [ ] Link abre: http://assinaturaemail.saude.mg.gov.br/
- [ ] Abre em nova aba

### **8. CTA Final**
- [ ] Título: "Precisa de Ajuda Imediata?"
- [ ] Botão "Ligar Agora: 0800 525 2001"
  - Link tel: funciona
- [ ] Botão "Ver Central de Suporte"
  - Redireciona para /suporte

### **9. Responsividade**
- [ ] Desktop (1920px): Layout em grid
- [ ] Tablet (768px): 2 colunas
- [ ] Mobile (375px): 1 coluna
- [ ] Menu mobile funciona
- [ ] Formulário adaptável

### **10. Animações**
- [ ] Hero section: fade-up
- [ ] Cards: fade-up com delay
- [ ] Formulário: fade-up
- [ ] Scroll suave

---

## 🎯 Testes Críticos (Mínimo)

Se tiver pouco tempo, teste apenas:

1. ✅ **Acesso à página** (/contato)
2. ✅ **Formulário completo** (Teste 3)
3. ✅ **Outlook Web abre** com dados corretos
4. ✅ **Responsividade** em mobile

---

## 🐛 Problemas Comuns e Soluções

### **Problema: Outlook não abre**
**Causa:** Bloqueador de pop-ups
**Solução:** Permitir pop-ups para localhost:5174

### **Problema: E-mail não está pré-preenchido**
**Causa:** URL muito longa ou caracteres especiais
**Solução:** Verificar encodeURIComponent

### **Problema: Formulário não reseta**
**Causa:** Timeout não executou
**Solução:** Verificar console para erros

### **Problema: Validação não funciona**
**Causa:** Regex incorreto
**Solução:** Verificar patterns de validação

---

## 📊 Resultados Esperados

### **Sucesso Total:**
- ✅ Todos os 10 itens testados
- ✅ Nenhum erro no console
- ✅ Outlook abre corretamente
- ✅ E-mail formatado perfeitamente
- ✅ Responsivo em todos os tamanhos

### **Sucesso Parcial:**
- ⚠️ 8-9 itens funcionando
- ⚠️ Pequenos ajustes necessários

### **Falha:**
- ❌ Menos de 7 itens funcionando
- ❌ Erros críticos no console
- ❌ Outlook não abre

---

## 📝 Relatório de Teste

Após testar, preencha:

```
Data: ___/___/2025
Testador: _________________
Navegador: ________________
Resolução: ________________

Resultados:
[ ] Navegação: OK / FALHA
[ ] Cards informativos: OK / FALHA
[ ] Formulário: OK / FALHA
[ ] Validações: OK / FALHA
[ ] Outlook Web: OK / FALHA
[ ] Responsividade: OK / FALHA

Observações:
_________________________________
_________________________________
_________________________________

Status Final: ✅ APROVADO / ⚠️ AJUSTES / ❌ REPROVADO
```

---

## 🚀 Próximos Passos Após Aprovação

1. Alterar e-mail de teste para produção
2. Testar com e-mail real da equipe
3. Deploy em ambiente de homologação
4. Testes com usuários reais
5. Deploy em produção
6. Monitoramento de uso

---

**Boa sorte nos testes! 🎉**

Em caso de dúvidas:
- João Victor: joao.soares@saude.mg.gov.br
- Ramal: (31) 3916-0031
