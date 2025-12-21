import React, { useState } from 'react';
import { 
  Phone, 
  CheckCircle, 
  AlertCircle, 
  Download, 
  FileText, 
  Mail,
  PhoneCall,
  Wifi,
  WifiOff,
  Settings,
  User,
  Lock,
  ChevronDown,
  ChevronUp,
  RefreshCw
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const JabberPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const prerequisites = [
    {
      icon: User,
      title: 'Credenciais de Rede',
      description: 'Login (x ou m) e senha da CAMG atualizados',
    },
    {
      icon: Wifi,
      title: 'Conexão VPN',
      description: 'Acesso VPN configurado e funcionando',
    },
    {
      icon: Phone,
      title: 'Ramal Corporativo',
      description: 'Ramal ativo e vinculado ao seu usuário',
    },
    {
      icon: Settings,
      title: 'Aplicativo Jabber',
      description: 'Cisco Jabber instalado no computador ou celular',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Verificar Credenciais',
      description: 'Antes de configurar o Jabber, certifique-se de que suas credenciais estão corretas:',
      details: [
        'Tente acessar o Cisco VPN ou PORTAL CA',
        'Se não conseguir, a senha pode estar expirada',
        'Entre em contato com a TI: 0800 525 2001',
        'Solicite reset de senha de rede se necessário',
      ],
    },
    {
      number: 2,
      title: 'Instalar o Cisco Jabber',
      description: 'Baixe e instale o aplicativo Cisco Jabber:',
      details: [
        'Acesse o site oficial da Cisco ou portal da SES',
        'Baixe a versão compatível com seu sistema',
        'Execute o instalador como administrador',
        'Siga as instruções de instalação',
      ],
    },
    {
      number: 3,
      title: 'Configurar o Jabber',
      description: 'Configure o aplicativo com suas credenciais:',
      details: [
        'Abra o Cisco Jabber',
        'Digite seu login de rede (x ou m)',
        'Digite sua senha da CAMG',
        'Aguarde a conexão ser estabelecida',
      ],
    },
    {
      number: 4,
      title: 'Verificar Status',
      description: 'Confirme se o Jabber está funcionando corretamente:',
      details: [
        'Status deve ficar VERDE no nome do usuário',
        'Ramal deve aparecer ao lado do nome',
        'Login deve estar visível',
        'Teste fazendo uma ligação interna',
      ],
    },
    {
      number: 5,
      title: 'Solicitar Cadastro (Se Necessário)',
      description: 'Se não tiver ramal ou conta Jabber:',
      details: [
        'Preencha a Planilha de Solicitação Jabber',
        'Envie para: suporteti.ca@saude.mg.gov.br',
        'Aguarde confirmação da TI',
        'Prazo: 24 a 48 horas úteis',
      ],
    },
  ];

  const commonErrors = [
    {
      error: 'Login Failed - Senha incorreta ou expirada',
      solution: 'Tente acessar o PORTAL CA. Se não conseguir, solicite reset de senha pelo 0800 525 2001',
      icon: Lock,
      color: 'text-red-500',
    },
    {
      error: 'Jabber não conecta mesmo com senha correta',
      solution: 'Apague os dados do aplicativo ou reinstale. Se persistir, entre em contato com a TI',
      icon: WifiOff,
      color: 'text-orange-500',
    },
    {
      error: 'Status não fica verde ou ramal não aparece',
      solution: 'Abra chamado na Positivo (0800 525 2001) para verificar sua conta Jabber',
      icon: AlertCircle,
      color: 'text-yellow-500',
    },
    {
      error: 'Não consigo fazer ou receber ligações',
      solution: 'Verifique se o ramal está ativo e se você tem permissões. Contate a TI para verificação',
      icon: PhoneCall,
      color: 'text-red-500',
    },
  ];

  const faqs = [
    {
      question: 'O que é o Cisco Jabber?',
      answer: 'O Cisco Jabber é um aplicativo de comunicação unificada que permite fazer e receber ligações telefônicas corporativas através do computador ou celular, usando seu ramal da SES.',
    },
    {
      question: 'Preciso estar conectado à VPN para usar o Jabber?',
      answer: 'Sim, para usar o Jabber remotamente é necessário estar conectado à VPN da SES. No ambiente presencial da CAMG, a conexão é automática.',
    },
    {
      question: 'Como solicito um ramal Jabber?',
      answer: 'Preencha a Planilha de Solicitação Jabber disponível nos downloads e envie para suporteti.ca@saude.mg.gov.br. A TI processará sua solicitação em até 48 horas úteis.',
    },
    {
      question: 'Posso usar o Jabber no celular?',
      answer: 'Sim! O Cisco Jabber está disponível para Android e iOS. Baixe na loja de aplicativos e configure com suas credenciais da CAMG.',
    },
    {
      question: 'O que fazer se esquecer minha senha?',
      answer: 'Entre em contato com a TI pelo telefone 0800 525 2001 (ou ramais 3916-0031 / 3916-0027 se estiver na CAMG) para solicitar reset de senha de rede. O reset é feito presencialmente na mesa do Suporte TI.',
    },
    {
      question: 'Posso fazer ligações externas pelo Jabber?',
      answer: 'Depende das permissões do seu ramal. Entre em contato com a TI para verificar suas permissões e solicitar habilitação de ligações externas se necessário.',
    },
  ];

  const downloads = [
    {
      title: 'Manual Jabber',
      description: 'Guia completo de instalação e uso do Cisco Jabber',
      file: 'Manual_Jabber.pdf',
      icon: FileText,
    },
    {
      title: 'Tutorial em Vídeo',
      description: 'Passo a passo em vídeo para configurar o Jabber',
      file: 'https://www.youtube.com/watch?v=JAdEmoU6_o4',
      icon: FileText,
    },
    {
      title: 'Planilha Solicitação Jabber',
      description: 'Formulário para solicitar ramal e conta Jabber',
      file: 'Planilha_Cadastro_Jabber.xlsx',
      icon: FileText,
    },
  ];

  const troubleshooting = [
    {
      title: 'Reinstalar o Jabber',
      steps: [
        'Desinstale completamente o Cisco Jabber',
        'Reinicie o computador',
        'Baixe a versão mais recente',
        'Instale como administrador',
        'Configure novamente com suas credenciais',
      ],
    },
    {
      title: 'Limpar Cache do Jabber',
      steps: [
        'Feche o Cisco Jabber completamente',
        'Vá em Configurações do aplicativo',
        'Procure por "Limpar dados" ou "Clear cache"',
        'Confirme a limpeza',
        'Abra o Jabber e faça login novamente',
      ],
    },
    {
      title: 'Verificar Firewall',
      steps: [
        'Abra as configurações do Firewall do Windows',
        'Verifique se o Cisco Jabber está permitido',
        'Adicione exceção se necessário',
        'Reinicie o Jabber',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
              <Phone className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Cisco Jabber
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Telefonia corporativa integrada - Faça e receba ligações de qualquer lugar
            </p>
          </div>
        </div>
      </section>

      {/* Pré-requisitos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Pré-requisitos
            </h2>
            <p className="text-lg text-secondary-600">
              Antes de configurar o Jabber, certifique-se de ter:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prerequisites.map((item, index) => (
              <div
                key={index}
                className="card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-green-600" />
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

      {/* Passo a Passo */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Como Configurar o Jabber
            </h2>
            <p className="text-lg text-secondary-600">
              Siga este guia passo a passo para configurar sua telefonia corporativa
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-secondary-600 mb-4">
                        {step.description}
                      </p>
                      {step.details && (
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-secondary-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Erros Comuns */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Erros Comuns e Soluções
            </h2>
            <p className="text-lg text-secondary-600">
              Resolva os problemas mais frequentes rapidamente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonErrors.map((item, index) => (
              <div
                key={index}
                className="card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body">
                  <div className="flex items-start space-x-4">
                    <item.icon className={`w-8 h-8 ${item.color} flex-shrink-0`} />
                    <div className="flex-1">
                      <h3 className="font-bold text-secondary-900 mb-2">
                        {item.error}
                      </h3>
                      <p className="text-secondary-600 text-sm">
                        <strong>Solução:</strong> {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting Avançado */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Soluções Avançadas
            </h2>
            <p className="text-lg text-secondary-600">
              Procedimentos detalhados para resolver problemas persistentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {troubleshooting.map((item, index) => (
              <div
                key={index}
                className="card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body">
                  <div className="flex items-center space-x-3 mb-4">
                    <RefreshCw className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-bold text-secondary-900">
                      {item.title}
                    </h3>
                  </div>
                  <ol className="space-y-2">
                    {item.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <span className="font-bold text-green-600 flex-shrink-0">
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

      {/* Downloads */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Downloads
            </h2>
            <p className="text-lg text-secondary-600">
              Manuais e documentos necessários
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloads.map((item, index) => (
              <div
                key={index}
                className="card group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <Download className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <button className="btn btn-outline btn-sm w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar
                  </button>
                </div>
              </div>
            ))}
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
              Tire suas dúvidas sobre o Cisco Jabber
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
                      <ChevronUp className="w-5 h-5 text-green-500" />
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
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">
              Precisa de Ajuda?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nossa equipe está pronta para auxiliar você
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:suporteti.ca@saude.mg.gov.br"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar E-mail
              </a>
              <a
                href="tel:3139160031"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                (31) 39160031
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JabberPage;
