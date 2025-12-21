import React, { useState } from 'react';
import { 
  PhoneForwarded, 
  CheckCircle, 
  AlertCircle, 
  Download, 
  FileText, 
  Mail, 
  Phone,
  PhoneCall,
  PhoneOff,
  Clock,
  User,
  Building,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SigaMePage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const prerequisites = [
    {
      icon: User,
      title: 'Ramal Ativo',
      description: 'Ter um ramal corporativo ativo na SES',
    },
    {
      icon: Phone,
      title: 'Número de Destino',
      description: 'Celular ou telefone fixo para receber as chamadas',
    },
    {
      icon: Building,
      title: 'Dados Completos',
      description: 'Nome, setor, ramal e login de rede',
    },
    {
      icon: Mail,
      title: 'E-mail Institucional',
      description: 'E-mail @saude.mg.gov.br ativo',
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Alguém liga para seu ramal',
      description: 'Uma pessoa disca seu ramal corporativo da SES',
      icon: PhoneCall,
    },
    {
      step: 2,
      title: 'Sistema desvia automaticamente',
      description: 'O Siga-me redireciona a chamada para o número cadastrado',
      icon: PhoneForwarded,
    },
    {
      step: 3,
      title: 'Você recebe no celular',
      description: 'A chamada toca no seu celular ou telefone cadastrado',
      icon: Phone,
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Preparar Informações',
      description: 'Reúna os dados necessários para a solicitação:',
      details: [
        'Nome completo',
        'Setor/Superintendência',
        'Ramal a ser desviado',
        'Número do celular (com DDD)',
        'Login de rede (x ou m)',
      ],
    },
    {
      number: 2,
      title: 'Enviar Solicitação por E-mail',
      description: 'Envie um e-mail para a TI com as informações:',
      details: [
        'Para: suporteti.ca@saude.mg.gov.br',
        'Assunto: Solicitação de Ativação - Sistema Siga-me',
        'Corpo: Incluir todas as informações listadas no passo 1',
        'Confirmar número de celular com DDD',
      ],
    },
    {
      number: 3,
      title: 'Aguardar Ativação',
      description: 'A TI processará sua solicitação:',
      details: [
        'Prazo: até 24 horas úteis',
        'Você receberá confirmação por e-mail',
        'O sistema será ativado automaticamente',
        'Teste fazendo uma ligação para seu ramal',
      ],
    },
    {
      number: 4,
      title: 'Desativação (quando necessário)',
      description: 'Para desativar o Siga-me:',
      details: [
        'Envie e-mail para: suporteti.ca@saude.mg.gov.br',
        'Assunto: Solicitação de Desativação - Sistema Siga-me',
        'Informe os mesmos dados da ativação',
        'Aguarde confirmação da TI',
      ],
    },
  ];

  const features = [
    {
      title: 'Funcionamento 24/7',
      description: 'O sistema funciona 24 horas por dia, 7 dias por semana, incluindo finais de semana e feriados',
      icon: Clock,
      color: 'text-blue-500',
    },
    {
      title: 'Apenas Recebimento',
      description: 'Você pode receber chamadas, mas não pode fazer ligações usando o sistema',
      icon: PhoneCall,
      color: 'text-green-500',
    },
    {
      title: 'Desvio Automático',
      description: 'Todas as chamadas para seu ramal são automaticamente redirecionadas',
      icon: PhoneForwarded,
      color: 'text-purple-500',
    },
    {
      title: 'Número Único',
      description: 'Mantenha apenas um número de contato (seu ramal) mesmo trabalhando remotamente',
      icon: Phone,
      color: 'text-orange-500',
    },
  ];

  const importantNotes = [
    {
      title: 'Apenas Recebimento',
      description: 'O Siga-me permite APENAS receber chamadas. Você NÃO poderá fazer ligações através do sistema.',
      icon: AlertCircle,
      color: 'bg-yellow-50 border-yellow-400 text-yellow-900',
    },
    {
      title: 'Número com DDD',
      description: 'Sempre informe o número de celular com DDD. Exemplo: (31) 99999-9999',
      icon: Phone,
      color: 'bg-blue-50 border-blue-400 text-blue-900',
    },
    {
      title: 'Desativação Necessária',
      description: 'Quando retornar ao trabalho presencial, solicite a desativação do sistema para evitar desvios desnecessários.',
      icon: PhoneOff,
      color: 'bg-red-50 border-red-400 text-red-900',
    },
  ];

  const faqs = [
    {
      question: 'O que é o sistema Siga-me?',
      answer: 'O Siga-me é um sistema de desvio automático de chamadas que redireciona ligações do seu ramal corporativo para um número de celular ou telefone fixo de sua escolha. Foi liberado pela PRODEMGE para uso durante o período de trabalho remoto.',
    },
    {
      question: 'Posso fazer ligações usando o Siga-me?',
      answer: 'Não. O sistema Siga-me permite APENAS receber chamadas. Você não conseguirá fazer ligações através dele. Para fazer ligações, use o Cisco Jabber ou seu telefone pessoal.',
    },
    {
      question: 'O sistema funciona em finais de semana e feriados?',
      answer: 'Sim! O Siga-me funciona 24 horas por dia, 7 dias por semana, incluindo finais de semana e feriados.',
    },
    {
      question: 'Posso desviar para qualquer número?',
      answer: 'Sim, você pode desviar para qualquer número de celular ou telefone fixo. Lembre-se de informar o número completo com DDD.',
    },
    {
      question: 'Como faço para desativar o Siga-me?',
      answer: 'Envie um e-mail para suporteti.ca@saude.mg.gov.br com o assunto "Solicitação de Desativação - Sistema Siga-me" e informe os mesmos dados usados na ativação.',
    },
    {
      question: 'Quanto tempo leva para ativar?',
      answer: 'A TI processa as solicitações em até 24 horas úteis. Você receberá um e-mail de confirmação quando o sistema estiver ativo.',
    },
    {
      question: 'Posso mudar o número de destino depois?',
      answer: 'Sim. Envie um novo e-mail para a TI solicitando a alteração do número de destino, informando o novo número com DDD.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
              <PhoneForwarded className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Sistema Siga-me
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Desvio automático de chamadas do seu ramal para qualquer telefone
            </p>
          </div>
        </div>
      </section>

      {/* O que é */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                O que é o Siga-me?
              </h2>
              <p className="text-lg text-secondary-600">
                Sistema de desvio automático de chamadas para trabalho remoto
              </p>
            </div>

            <div className="card" data-aos="fade-up">
              <div className="card-body">
                <p className="text-secondary-700 text-lg mb-6">
                  O sistema <strong>"Siga-me"</strong> é uma funcionalidade liberada pela PRODEMGE que permite 
                  redirecionar automaticamente todas as chamadas do seu ramal corporativo para um número de 
                  celular ou telefone fixo de sua escolha.
                </p>
                <div className="bg-teal-50 p-6 rounded-lg">
                  <p className="text-teal-900">
                    <strong>Em resumo:</strong> Quando alguém liga para o seu ramal, o sistema encaminha 
                    automaticamente a chamada para o número que você definiu. Isso permite que você receba 
                    chamadas em diferentes locais, mantendo apenas um número de telefone (seu ramal).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-secondary-600">
              Entenda o processo de desvio de chamadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative">
                  <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-teal-200" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary-600">
                  {item.description}
                </p>
              </div>
            ))}
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
              O que você precisa para solicitar o Siga-me
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
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-teal-600" />
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
              Como Solicitar
            </h2>
            <p className="text-lg text-secondary-600">
              Siga este guia para ativar ou desativar o Siga-me
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
                      <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
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
                              <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
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

      {/* Características */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Características do Sistema
            </h2>
            <p className="text-lg text-secondary-600">
              Entenda como o Siga-me funciona
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => (
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
        </div>
      </section>

      {/* Notas Importantes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Informações Importantes
            </h2>
            <p className="text-lg text-secondary-600">
              Leia atentamente antes de solicitar
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {importantNotes.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border-l-4 ${item.color}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start space-x-4">
                  <item.icon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-secondary-600">
              Tire suas dúvidas sobre o sistema Siga-me
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
                      <ChevronUp className="w-5 h-5 text-teal-500" />
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
      <section className="py-16 bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">
              Precisa de Ajuda?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Entre em contato com a TI para solicitar o Siga-me
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:suporteti.ca@saude.mg.gov.br"
                className="inline-flex items-center px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar E-mail
              </a>
              <a
                href="tel:08005252001"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <Phone className="w-5 h-5 mr-2" />
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

export default SigaMePage;
