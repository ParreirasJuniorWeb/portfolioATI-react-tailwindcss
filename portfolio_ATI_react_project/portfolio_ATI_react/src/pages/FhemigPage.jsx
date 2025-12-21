import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle, 
  AlertCircle, 
  Download, 
  FileText, 
  Mail, 
  Phone,
  MapPin,
  Clock,
  Users,
  Calendar,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FhemigPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const prerequisites = [
    {
      icon: Users,
      title: 'Servidor da SES',
      description: 'Ser servidor ativo da Secretaria de Estado de Saúde',
    },
    {
      icon: MapPin,
      title: 'Impossibilidade CAMG',
      description: 'Não poder utilizar os andares 10°, 12° ou 13° do Prédio Minas',
    },
    {
      icon: Calendar,
      title: 'Reserva Prévia',
      description: 'Fazer reserva antecipada através do sistema',
    },
    {
      icon: CheckCircle,
      title: 'Confirmação',
      description: 'Aguardar confirmação da reserva pela TI',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Verificar Necessidade',
      description: 'Antes de solicitar o Co-Working, confirme se realmente precisa:',
      details: [
        'Você não pode trabalhar remotamente?',
        'Não há espaço disponível no Prédio Minas (10°, 12°, 13° andar)?',
        'Seu trabalho exige presença física?',
        'Você tem equipamentos/documentos que precisam estar presencialmente?',
      ],
    },
    {
      number: 2,
      title: 'Acessar o Sistema de Reservas',
      description: 'Acesse o sistema de reservas da SES:',
      details: [
        'Entre no SharePoint da SES',
        'Navegue até "Sistema de Reserva de Estações"',
        'Faça login com suas credenciais (x ou m)',
        'Verifique a disponibilidade de estações',
      ],
    },
    {
      number: 3,
      title: 'Fazer a Reserva',
      description: 'Preencha os dados da reserva:',
      details: [
        'Selecione a data desejada',
        'Escolha o horário (período ou dia inteiro)',
        'Informe o motivo da reserva',
        'Confirme seus dados de contato',
        'Envie a solicitação',
      ],
    },
    {
      number: 4,
      title: 'Aguardar Confirmação',
      description: 'A TI processará sua solicitação:',
      details: [
        'Você receberá um e-mail de confirmação',
        'Prazo de resposta: até 24 horas úteis',
        'Verifique o número da estação reservada',
        'Anote o horário autorizado',
      ],
    },
    {
      number: 5,
      title: 'Comparecer no Dia',
      description: 'No dia da reserva:',
      details: [
        'Chegue no horário reservado',
        'Apresente-se na recepção da FHEMIG',
        'Informe seu nome e número da reserva',
        'Dirija-se à estação indicada',
        'Respeite o horário de saída',
      ],
    },
  ];

  const locationInfo = [
    {
      title: 'Endereço',
      icon: MapPin,
      details: [
        'Fundação Hospitalar do Estado de Minas Gerais (FHEMIG)',
        'Alameda Vereador Álvaro Celso, 100',
        'Santa Efigênia, Belo Horizonte - MG',
        'CEP: 30150-260',
      ],
    },
    {
      title: 'Horário de Funcionamento',
      icon: Clock,
      details: [
        'Segunda a Sexta: 8h às 18h',
        'Almoço: 12h às 14h (estações disponíveis)',
        'Sábados, Domingos e Feriados: Fechado',
      ],
    },
    {
      title: 'Recursos Disponíveis',
      icon: Building2,
      details: [
        'Estações de trabalho equipadas',
        'Acesso à internet',
        'Telefone (ramal)',
        'Impressora compartilhada',
        'Ar condicionado',
      ],
    },
  ];

  const importantRules = [
    {
      title: 'Prioridade CAMG',
      description: 'O Co-Working FHEMIG é apenas para quem NÃO pode usar o Prédio Minas (10°, 12°, 13° andar)',
      icon: AlertCircle,
      color: 'text-red-500',
    },
    {
      title: 'Reserva Obrigatória',
      description: 'Não é permitido comparecer sem reserva prévia confirmada',
      icon: Calendar,
      color: 'text-orange-500',
    },
    {
      title: 'Pontualidade',
      description: 'Respeite o horário reservado. Atrasos podem resultar em perda da reserva',
      icon: Clock,
      color: 'text-yellow-500',
    },
    {
      title: 'Limpeza e Organização',
      description: 'Mantenha a estação limpa e organizada. Não deixe pertences pessoais',
      icon: CheckCircle,
      color: 'text-green-500',
    },
  ];

  const faqs = [
    {
      question: 'Quando devo usar o Co-Working FHEMIG?',
      answer: 'Apenas quando não for possível trabalhar remotamente E não houver espaço disponível no Prédio Minas (10°, 12° ou 13° andar da CAMG). O Co-Working é uma alternativa secundária.',
    },
    {
      question: 'Como faço a reserva?',
      answer: 'Acesse o Sistema de Reserva de Estações no SharePoint da SES, selecione a data e horário desejados, preencha o formulário e aguarde a confirmação por e-mail.',
    },
    {
      question: 'Com quanto tempo de antecedência devo reservar?',
      answer: 'Recomendamos fazer a reserva com pelo menos 48 horas de antecedência para garantir disponibilidade e tempo hábil para confirmação.',
    },
    {
      question: 'Posso reservar para várias pessoas ao mesmo tempo?',
      answer: 'Não. Cada servidor deve fazer sua própria reserva individual no sistema.',
    },
    {
      question: 'E se eu precisar cancelar minha reserva?',
      answer: 'Entre em contato com a TI o quanto antes pelo e-mail suporteti.ca@saude.mg.gov.br ou telefone 0800 525 2001 para cancelar e liberar a estação para outros servidores.',
    },
    {
      question: 'Posso usar a mesma estação todos os dias?',
      answer: 'Não há garantia de que a mesma estação estará disponível. As reservas são feitas por ordem de chegada e disponibilidade.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
              <Building2 className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Co-Working FHEMIG
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Sistema de Reserva de Estações para Trabalho Presencial
            </p>
          </div>
        </div>
      </section>

      {/* Alerta Importante */}
      <section className="py-8 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4" data-aos="fade-up">
            <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-red-900 mb-2">
                Importante: Prioridade para o Prédio Minas (CAMG)
              </h3>
              <p className="text-red-800">
                O Co-Working FHEMIG é uma alternativa <strong>apenas para servidores que não podem utilizar</strong> os espaços disponíveis no <strong>10°, 12° ou 13° andar do Prédio Minas</strong> na Cidade Administrativa. 
                Se houver espaço disponível na CAMG, você deve utilizá-lo prioritariamente.
              </p>
            </div>
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
              Antes de solicitar o Co-Working, certifique-se de atender aos requisitos:
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
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-purple-600" />
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
              Como Reservar uma Estação
            </h2>
            <p className="text-lg text-secondary-600">
              Siga este guia passo a passo para fazer sua reserva
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
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
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
                              <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
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

      {/* Informações de Localização */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Informações do Local
            </h2>
            <p className="text-lg text-secondary-600">
              Tudo que você precisa saber sobre o Co-Working FHEMIG
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locationInfo.map((item, index) => (
              <div
                key={index}
                className="card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body">
                  <div className="flex items-center space-x-3 mb-4">
                    <item.icon className="w-6 h-6 text-purple-600" />
                    <h3 className="text-lg font-bold text-secondary-900">
                      {item.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="text-secondary-700 text-sm">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regras Importantes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Regras Importantes
            </h2>
            <p className="text-lg text-secondary-600">
              Leia atentamente antes de fazer sua reserva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {importantRules.map((item, index) => (
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

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-secondary-600">
              Tire suas dúvidas sobre o Co-Working FHEMIG
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
                      <ChevronUp className="w-5 h-5 text-purple-500" />
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
      <section className="py-16 bg-gradient-to-r from-purple-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">
              Precisa de Ajuda?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Entre em contato com a TI para mais informações
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:suporteti.ca@saude.mg.gov.br"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg"
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

export default FhemigPage;
