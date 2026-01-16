import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Headphones,
  Send,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const ContatoPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      primary: 'suporteti.ca@saude.mg.gov.br',
      secondary: 'central@positivo.com.br',
      description: 'Resposta em até 24 horas úteis',
      color: 'bg-blue-500',
    },
    {
      icon: Phone,
      title: 'Telefone',
      primary: '0800 525 2001',
      secondary: '(31) 3916-0031 / 3916-0027',
      description: 'Atendimento 24/7',
      color: 'bg-green-500',
    },
    {
      icon: MapPin,
      title: 'Localização',
      primary: 'Prédio Minas, 12º andar',
      secondary: 'Lado ímpar, final do corredor à esquerda',
      description: 'Cidade Administrativa - Belo Horizonte/MG',
      color: 'bg-orange-500',
    },
    {
      icon: Clock,
      title: 'Horário',
      primary: 'Segunda a Sexta: 8h às 18h',
      secondary: 'Sábados, Domingos e Feriados: Fechado',
      description: 'Emergências: 0800 525 2001 (24/7)',
      color: 'bg-purple-500',
    },
  ];

  const quickContacts = [
    {
      title: 'Chat Bot AI',
      description: 'Atendimento automatizado inteligente',
      link: 'https://app.chatvolt.ai/@chat_bot_ti_ses',
      icon: MessageSquare,
      color: 'bg-purple-600',
      external: true,
    },
    {
      title: 'Central de Suporte',
      description: 'Veja nossa equipe e FAQ',
      link: '/suporte',
      icon: Headphones,
      color: 'bg-indigo-600',
      external: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
              <Mail className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Entre em Contato
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Estamos prontos para ajudar você. Preencha o formulário abaixo ou use um de nossos canais de atendimento
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Informações de Contato
            </h2>
            <p className="text-lg text-secondary-600">
              Múltiplas formas de entrar em contato conosco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="card group hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body text-center">
                  <div className={`w-16 h-16 ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-3">
                    {info.title}
                  </h3>
                  <p className="font-semibold text-secondary-900 mb-1">
                    {info.primary}
                  </p>
                  <p className="text-sm text-secondary-600 mb-3">
                    {info.secondary}
                  </p>
                  <p className="text-xs text-secondary-500">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Formulário de Contato
            </h2>
            <p className="text-lg text-secondary-600">
              Preencha o formulário abaixo e envie sua solicitação
            </p>
          </div>

          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <div className="card-body">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Outras Opções de Contato
            </h2>
            <p className="text-lg text-secondary-600">
              Escolha a melhor forma de se comunicar conosco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {quickContacts.map((contact, index) => (
              contact.external ? (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group hover:shadow-xl transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="card-body text-center">
                    <div className={`w-16 h-16 ${contact.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {contact.description}
                    </p>
                    <span className="inline-flex items-center text-primary-600 font-medium">
                      Acessar
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </a>
              ) : (
                <Link
                  key={index}
                  to={contact.link}
                  className="card group hover:shadow-xl transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="card-body text-center">
                    <div className={`w-16 h-16 ${contact.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {contact.description}
                    </p>
                    <span className="inline-flex items-center text-primary-600 font-medium">
                      Acessar
                      <Send className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Assinatura de E-mail */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200" data-aos="fade-up">
            <div className="card-body text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                Assinatura de E-mail Corporativa
              </h3>
              <p className="text-secondary-600 mb-6">
                Caso não possua uma assinatura de e-mail corporativa da SES-MG, clique no botão abaixo para gerar uma
              </p>
              <a
                href="http://assinaturaemail.saude.mg.gov.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Criar Assinatura Digital
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Precisa de Ajuda Imediata?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nossa equipe está disponível para atender você
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:08005252001"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora: 0800 525 2001 ou (31) 39160031
              </a>
              <Link
                to="/suporte"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                Ver Central de Suporte
                <Send className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContatoPage;
