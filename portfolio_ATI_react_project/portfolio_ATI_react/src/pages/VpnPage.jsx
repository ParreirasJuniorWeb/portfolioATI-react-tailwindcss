import React, { useState } from 'react';
import { 
  Shield, 
  CheckCircle, 
  AlertCircle, 
  Download, 
  FileText, 
  Mail, 
  Phone,
  Server,
  Lock,
  User,
  Building,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VpnPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const prerequisites = [
    {
      icon: User,
      title: 'Credenciais de Acesso',
      description: 'Login de rede (x ou m) e senha do Active Directory',
    },
    {
      icon: Server,
      title: 'Hostname da Máquina',
      description: 'Nome do dispositivo no padrão SES (D39M + andar + estação + patrimônio)',
    },
    {
      icon: Building,
      title: 'Informações do Local',
      description: 'Prédio, andar e número da estação de trabalho',
    },
    {
      icon: Mail,
      title: 'E-mail Institucional',
      description: 'E-mail corporativo @saude.mg.gov.br ativo',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Preencher Planilha de Solicitação',
      description: 'Acesse a pasta PUBLIC (\\\\arquivos\\arquivos\\PUBLICA) e preencha a planilha "Solicitação de Acesso VPN" com os seguintes dados:',
      details: [
        'Órgão: SES',
        'Hostname: Nome do dispositivo (padrão D39M)',
        'Grupo de Mobilidade: M_SES_Mobilidade_[1-10]',
        'Login de rede: Seu x ou m',
        'Nome completo do solicitante',
        'E-mail institucional',
        'Ramal corporativo',
        'Prédio e andar',
      ],
    },
    {
      number: 2,
      title: 'Enviar para a Equipe de TI',
      description: 'Envie a planilha preenchida para a equipe de TI:',
      details: [
        'E-mail: suporteti.ca@saude.mg.gov.br',
        'Assunto: Solicitação de Acesso VPN',
        'Anexar planilha preenchida',
        'Informar urgência (se houver)',
      ],
    },
    {
      number: 3,
      title: 'Aguardar Processamento',
      description: 'A equipe de TI irá:',
      details: [
        'Verificar suas informações no sistema',
        'Validar os dados da planilha',
        'Encaminhar solicitação para a Prodemge/Positivo',
        'Acompanhar o chamado internamente',
      ],
    },
    {
      number: 4,
      title: 'Receber Notificações por E-mail',
      description: 'A TI enviará e-mails informando:',
      details: [
        'Confirmação do recebimento da solicitação',
        'Status: "Em análise com a Prodemge"',
        'Atualizações sobre o andamento',
        'Prazo médio de resposta: 24 a 48 horas úteis',
      ],
    },
    {
      number: 5,
      title: 'Receber Liberação e Configurar',
      description: 'Após a liberação do acesso, você receberá:',
      details: [
        'E-mail de confirmação da TI',
        'Manual de instalação e configuração (PDF)',
        'Instruções passo a passo',
        'Suporte da TI para primeiro acesso',
      ],
    },
  ];

  const commonErrors = [
    {
      error: 'Planilha com informações incompletas',
      solution: 'Refaça a planilha com todos os dados corretos e completos',
      icon: AlertCircle,
      color: 'text-red-500',
    },
    {
      error: 'Usuário já possui acesso em outra máquina',
      solution: 'Solicite apenas a adição do grupo RDP para a nova máquina',
      icon: AlertCircle,
      color: 'text-yellow-500',
    },
    {
      error: 'Número de protocolo não recebido',
      solution: 'Reenvie o e-mail para a Positivo e verifique as caixas de entrada',
      icon: AlertCircle,
      color: 'text-orange-500',
    },
    {
      error: 'Problemas ao acessar a máquina',
      solution: 'Reinicie a máquina e use comandos: ipconfig, ipconfig /register, ipconfig /flushdns',
      icon: AlertCircle,
      color: 'text-red-500',
    },
  ];

  const faqs = [
    {
      question: 'Quanto tempo leva para liberar o acesso VPN?',
      answer: 'O prazo médio é de 24 a 48 horas úteis após o envio da solicitação. A equipe de TI enviará e-mails informando o status do seu chamado. Para dúvidas, entre em contato pelo telefone 0800 525 2001 (ou ramais 3916-0031 / 3916-0027 se estiver na CAMG) ou e-mail suporteti.ca@saude.mg.gov.br.',
    },
    {
      question: 'Posso acessar de qualquer computador?',
      answer: 'Não. O acesso VPN é vinculado ao hostname específico da máquina cadastrada. Para acessar de outro computador, é necessário fazer uma nova solicitação.',
    },
    {
      question: 'O que fazer se esquecer a senha?',
      answer: 'Entre em contato com o suporte TI pelo telefone 0800 525 2001 (ou ramais 3916-0031 / 3916-0027 se estiver na CAMG) ou e-mail suporteti.ca@saude.mg.gov.br para solicitar reset de senha.',
    },
    {
      question: 'Preciso estar conectado à rede da SES?',
      answer: 'Não. A VPN permite acesso remoto de qualquer local com internet. Porém, para a configuração inicial, pode ser necessário estar na rede interna.',
    },
    {
      question: 'Como sei qual é meu grupo de mobilidade?',
      answer: 'A equipe de TI verificará essa informação no Active Directory. Caso não saiba, deixe em branco na planilha que a TI preencherá.',
    },
  ];

  const downloads = [
    {
      title: 'Manual de Instalação VPN',
      description: 'Guia completo para instalação do cliente VPN',
      file: '1-Manual-de-instalacao-VPN-CA.pdf',
      icon: FileText,
    },
    {
      title: 'Manual de Acesso VPN',
      description: 'Instruções para configuração e primeiro acesso',
      file: '2-Manual-de-Acesso-a-VPN-CA.pdf',
      icon: FileText,
    },
    {
      title: 'Planilha de Solicitação',
      description: 'Formulário para solicitar acesso VPN',
      file: 'Planilha_Solicitacao_VPN.xlsx',
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
              <Shield className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Acesso Remoto VPN
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Conecte-se de forma segura à rede da SES/MG de qualquer lugar
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
              Antes de solicitar o acesso VPN, certifique-se de ter:
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
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary-600" />
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
              Como Solicitar Acesso VPN
            </h2>
            <p className="text-lg text-secondary-600">
              Siga este guia passo a passo para obter seu acesso remoto
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
                      <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
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

      {/* Downloads */}
      <section className="py-16 bg-gray-50">
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
                    Baixar PDF
                  </button>
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
              Tire suas dúvidas sobre o acesso VPN
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
                      <ChevronUp className="w-5 h-5 text-primary-500" />
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
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-600">
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
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg"
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

export default VpnPage;
