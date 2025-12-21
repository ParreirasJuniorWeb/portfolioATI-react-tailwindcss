import React, { useState } from 'react';
import { 
  Mail, 
  CheckCircle, 
  AlertCircle, 
  Download, 
  FileText,
  MailOpen,
  Lock,
  RefreshCw,
  Trash2,
  Settings,
  Chrome,
  Globe,
  ChevronDown,
  ChevronUp,
  XCircle
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OutlookPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const commonCauses = [
    {
      icon: Lock,
      title: 'Credenciais Incorretas ou Expiradas',
      description: 'Senha digitada errada, sessão expirada ou conta bloqueada',
    },
    {
      icon: Trash2,
      title: 'Cache Corrompido',
      description: 'Cache de autenticação inválido ou dados temporários corrompidos',
    },
    {
      icon: Globe,
      title: 'Problemas no Navegador',
      description: 'Extensões conflitantes ou cache do navegador cheio',
    },
    {
      icon: Settings,
      title: 'Problemas de Conexão',
      description: 'Firewall, VPN desconectada ou problemas de rede',
    },
  ];

  const quickSolutions = [
    {
      number: 1,
      title: 'Testar em Navegador Anônimo',
      description: 'Descarte conflitos de extensões e cache:',
      details: [
        'Abra uma janela anônima (Ctrl+Shift+N no Chrome)',
        'Acesse office.com ou outlook.office.com',
        'Tente fazer login normalmente',
        'Se funcionar, o problema está no cache ou extensões',
      ],
    },
    {
      number: 2,
      title: 'Limpar Cache do Navegador',
      description: 'Remove dados temporários que podem causar conflitos:',
      details: [
        'Abra as configurações do navegador',
        'Vá em "Privacidade e Segurança"',
        'Clique em "Limpar dados de navegação"',
        'Marque "Imagens e arquivos em cache"',
        'Selecione "Todo o período"',
        'Clique em "Limpar dados"',
      ],
    },
    {
      number: 3,
      title: 'Verificar Credenciais no Office365',
      description: 'Confirme se suas credenciais estão corretas:',
      details: [
        'Tente acessar office.com ou outlook.office.com',
        'Use suas credenciais corporativas (x ou m)',
        'Se não conseguir, a senha pode estar expirada',
        'Entre em contato com a TI: 0800 525 2001',
      ],
    },
    {
      number: 4,
      title: 'Testar em Outro Navegador',
      description: 'Verifique se o problema é específico do navegador:',
      details: [
        'Teste no Microsoft Edge',
        'Teste no Mozilla Firefox',
        'Teste no Google Chrome',
        'Se funcionar em outro, reinstale o navegador problemático',
      ],
    },
  ];

  const chromeSteps = [
    {
      step: 1,
      title: 'Abrir o Google Chrome',
      description: 'Clique no ícone do Chrome no seu computador',
    },
    {
      step: 2,
      title: 'Acessar Configurações',
      description: 'Clique nos três pontos (⋮) no canto superior direito e selecione "Configurações"',
    },
    {
      step: 3,
      title: 'Ir para Privacidade e Segurança',
      description: 'No menu lateral, clique em "Privacidade e segurança"',
    },
    {
      step: 4,
      title: 'Limpar Dados de Navegação',
      description: 'Clique em "Limpar dados de navegação"',
    },
    {
      step: 5,
      title: 'Selecionar Itens',
      description: 'Marque "Imagens e arquivos em cache" e escolha "Todo o período"',
    },
    {
      step: 6,
      title: 'Confirmar',
      description: 'Clique em "Limpar dados" e aguarde a conclusão',
    },
    {
      step: 7,
      title: 'Reiniciar',
      description: 'Feche e abra o Chrome novamente',
    },
  ];

  const advancedSolutions = [
    {
      title: 'Limpar Credenciais do Windows',
      icon: Lock,
      steps: [
        'Abra o Painel de Controle',
        'Vá em "Gerenciador de Credenciais"',
        'Clique em "Credenciais do Windows"',
        'Procure por credenciais do Office365',
        'Remova todas as credenciais relacionadas',
        'Reinicie o computador',
        'Acesse office.com novamente',
      ],
    },
    {
      title: 'Usar Outro Dispositivo',
      icon: Settings,
      steps: [
        'Tente acessar pelo celular (app Outlook)',
        'Tente acessar por outro computador',
        'Se funcionar, o problema é local',
        'Considere formatar o navegador',
        'Entre em contato com a TI se persistir',
      ],
    },
    {
      title: 'Contatar o Suporte TI',
      icon: RefreshCw,
      steps: [
        'Se nenhuma solução funcionou, entre em contato',
        'Ligue: 0800 525 2001 (ou ramais 3916-0031 / 3916-0027 se estiver na CAMG)',
        'E-mail: suporteti.ca@saude.mg.gov.br',
        'Informe: nome, matrícula, setor',
        'Descreva o erro detalhadamente',
        'A TI verificará sua conta no sistema',
      ],
    },
  ];

  const faqs = [
    {
      question: 'Por que não consigo acessar o Office365 (Outlook Web)?',
      answer: 'Os motivos mais comuns são: senha expirada, cache do navegador cheio, extensões conflitantes ou problemas de conexão. Tente acessar em modo anônimo primeiro para identificar a causa.',
    },
    {
      question: 'Minha senha está correta mas não consigo entrar',
      answer: 'Isso pode indicar que sua conta está bloqueada ou que há problemas com o cache de autenticação. Limpe o cache do navegador e as credenciais salvas. Se persistir, entre em contato com a TI.',
    },
    {
      question: 'A SES ainda usa Outlook Desktop?',
      answer: 'Não. A SES utiliza exclusivamente o Office365 (ambiente em nuvem). O Outlook Desktop 2016 só é usado em casos específicos para recuperar backups de e-mail (.pst). Para uso diário, acesse office.com ou outlook.office.com.',
    },
    {
      question: 'Como configurar o Outlook Desktop se eu precisar?',
      answer: 'O Outlook Desktop não é mais configurado pela TI, exceto para recuperação de arquivos .pst. Entre em contato com a TI (0800 525 2001) apenas se precisar recuperar backups antigos.',
    },
    {
      question: 'Posso acessar o Outlook pelo celular?',
      answer: 'Sim! Baixe o aplicativo Microsoft Outlook na Play Store (Android) ou App Store (iOS) e faça login com suas credenciais corporativas (x ou m).',
    },
    {
      question: 'O que fazer se receber erro "Não é possível conectar ao servidor"?',
      answer: 'Verifique sua conexão com a internet. Se estiver remoto, confirme se a VPN está conectada. Limpe o cache do navegador e tente novamente. Se persistir, entre em contato com a TI.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
              <Mail className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Problemas no Office365
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Soluções para erros de login no Outlook Web, Teams e SharePoint
            </p>
          </div>
        </div>
      </section>

      {/* Causas Comuns */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Causas Comuns
            </h2>
            <p className="text-lg text-secondary-600">
              Principais motivos para erros de acesso ao Office365
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonCauses.map((item, index) => (
              <div
                key={index}
                className="card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluções Rápidas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Soluções Rápidas
            </h2>
            <p className="text-lg text-secondary-600">
              Tente estas soluções antes de entrar em contato com o suporte
            </p>
          </div>

          <div className="space-y-6">
            {quickSolutions.map((solution, index) => (
              <div
                key={index}
                className="card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        {solution.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-secondary-600 mb-4">
                        {solution.description}
                      </p>
                      <ul className="space-y-2">
                        {solution.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span className="text-secondary-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Limpar Cache do Chrome */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
              <Chrome className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Como Limpar o Cache do Chrome
            </h2>
            <p className="text-lg text-secondary-600">
              Passo a passo detalhado para limpar o cache do navegador
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {chromeSteps.map((item, index) => (
                <div
                  key={index}
                  className="card"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="card-body">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-secondary-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-secondary-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg" data-aos="fade-up">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">Opcional:</h4>
                  <p className="text-yellow-800 text-sm">
                    Você também pode marcar "Histórico de navegação" e "Cookies e outros dados do site", 
                    mas isso apagará seus logins salvos e preferências.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções Avançadas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Soluções Avançadas
            </h2>
            <p className="text-lg text-secondary-600">
              Para problemas persistentes, tente estas soluções mais técnicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advancedSolutions.map((solution, index) => (
              <div
                key={index}
                className="card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body">
                  <div className="flex items-center space-x-3 mb-4">
                    <solution.icon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-bold text-secondary-900">
                      {solution.title}
                    </h3>
                  </div>
                  <ol className="space-y-2">
                    {solution.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <span className="font-bold text-blue-600 flex-shrink-0">
                          {idx + 1}.
                        </span>
                        <span className="text-secondary-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caixas Compartilhadas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl mb-4">
              <Mail className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Caixas Compartilhadas (E-mail Setorial)
            </h2>
            <p className="text-lg text-secondary-600">
              Solicite acesso a caixas de e-mail compartilhadas entre equipes
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* O que é */}
            <div className="card" data-aos="fade-up">
              <div className="card-body">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  O que é uma Caixa Compartilhada?
                </h3>
                <p className="text-secondary-700 mb-4">
                  Uma caixa compartilhada é um e-mail setorial que pode ser acessado por múltiplos usuários simultaneamente. 
                  É ideal para equipes que precisam gerenciar e-mails em conjunto, como atendimento, suporte, ou setores específicos.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <strong>Exemplo:</strong> atendimento@saude.mg.gov.br, suporte@saude.mg.gov.br, etc.
                  </p>
                </div>
              </div>
            </div>

            {/* Como Solicitar */}
            <div className="card" data-aos="fade-up" data-aos-delay="100">
              <div className="card-body">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  Como Solicitar Acesso
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-secondary-900 mb-2">Prepare as Informações</h4>
                      <ul className="space-y-1 text-secondary-700 text-sm">
                        <li>• Seu nome completo</li>
                        <li>• Seu e-mail institucional</li>
                        <li>• Nome da caixa compartilhada que deseja acessar</li>
                        <li>• E-mail do administrador/gestor da caixa</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-secondary-900 mb-2">Envie o E-mail de Solicitação</h4>
                      <p className="text-secondary-700 text-sm mb-2">
                        Envie para: <strong>suporteti.ca@saude.mg.gov.br</strong>
                      </p>
                      <div className="bg-gray-50 p-3 rounded border border-gray-200">
                        <p className="text-xs text-secondary-600 mb-2"><strong>Assunto:</strong> Solicitação de Acesso - Caixa Compartilhada</p>
                        <p className="text-xs text-secondary-600 mb-2"><strong>Corpo do e-mail:</strong></p>
                        <ul className="text-xs text-secondary-600 space-y-1">
                          <li>• Nome completo do solicitante</li>
                          <li>• E-mail institucional</li>
                          <li>• Nome da caixa compartilhada</li>
                          <li>• Justificativa (opcional)</li>
                        </ul>
                        <p className="text-xs text-red-600 mt-2">
                          <strong>IMPORTANTE:</strong> Coloque o administrador/gestor da caixa em CÓPIA (CC)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-secondary-900 mb-2">Aguarde a Liberação</h4>
                      <p className="text-secondary-700 text-sm">
                        A TI processará sua solicitação em até <strong>40 minutos</strong> após a aprovação do gestor.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-secondary-900 mb-2">Configure no Outlook Web</h4>
                      <p className="text-secondary-700 text-sm mb-2">
                        Após a liberação, você precisa adicionar a caixa manualmente:
                      </p>
                      <ol className="space-y-2 text-secondary-700 text-sm">
                        <li>1. Acesse outlook.office.com</li>
                        <li>2. Clique com o botão direito sobre sua caixa pessoal</li>
                        <li>3. Selecione "Adicionar pasta compartilhada"</li>
                        <li>4. Digite o nome da caixa compartilhada</li>
                        <li>5. Clique em "Adicionar"</li>
                        <li>6. A caixa aparecerá abaixo da sua caixa pessoal</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Requisitos */}
            <div className="card" data-aos="fade-up" data-aos-delay="200">
              <div className="card-body">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  Requisitos Importantes
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-secondary-700 text-sm">
                      <strong>Aprovação obrigatória:</strong> O administrador/gestor da caixa deve estar em cópia no e-mail de solicitação
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-secondary-700 text-sm">
                      <strong>Qualquer servidor pode solicitar:</strong> Desde que tenha aprovação do gestor responsável
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-secondary-700 text-sm">
                      <strong>Prazo rápido:</strong> Liberação em até 40 minutos após aprovação
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-secondary-700 text-sm">
                      <strong>Configuração manual:</strong> Você precisa adicionar a caixa no Outlook Web após a liberação
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dúvidas Comuns */}
            <div className="card bg-blue-50" data-aos="fade-up" data-aos-delay="300">
              <div className="card-body">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Dúvidas Comuns sobre Caixas Compartilhadas
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-blue-900 text-sm mb-1">
                      Posso solicitar acesso a qualquer caixa compartilhada?
                    </p>
                    <p className="text-blue-800 text-sm">
                      Sim, mas você precisa da aprovação do administrador/gestor responsável pela caixa.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-blue-900 text-sm mb-1">
                      A caixa aparece automaticamente após a liberação?
                    </p>
                    <p className="text-blue-800 text-sm">
                      Não. Você precisa adicionar manualmente no Outlook Web seguindo os passos acima.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-blue-900 text-sm mb-1">
                      Posso acessar pelo celular?
                    </p>
                    <p className="text-blue-800 text-sm">
                      Sim! Após adicionar no Outlook Web, a caixa sincroniza automaticamente no app móvel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-secondary-600">
              Tire suas dúvidas sobre problemas no Office365
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                onClick={() => toggleFaq(index)}
              >
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-secondary-900 flex-1">
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-secondary-400" />
                    )}
                  </div>
                  {openFaq === index && (
                    <p className="text-secondary-600 mt-4 pt-4 border-t border-gray-200">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Suporte */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">
              Ainda com Problemas?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nossa equipe de TI está pronta para ajudar você
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:suporteti.ca@saude.mg.gov.br"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar E-mail
              </a>
              <a
                href="tel:08005252001"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <MailOpen className="w-5 h-5 mr-2" />
                0800 525 2001
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutlookPage;
