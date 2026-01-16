import React from 'react';
import { Home, BookOpen, Headphones, Download, Newspaper, BarChart3, Users, Shield, Zap } from 'lucide-react';
import { Link } from "react-router-dom";

const HeroSection = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Servidores Atendidos',
      color: 'bg-primary-500',
    },
    {
      icon: Shield,
      value: '99.5%',
      label: 'Disponibilidade',
      color: 'bg-primary-500',
    },
    {
      icon: Zap,
      value: '< 2h',
      label: 'Tempo Médio Resposta',
      color: 'bg-primary-500',
    },
  ];

  const services = [
    {
      icon: BookOpen,
      title: 'Tutoriais Completos',
      description: 'Guias passo a passo para configuração de VPN, Cisco Jabber e muito mais',
      link: '/tutoriais',
      color: 'bg-primary-500',
    },
    {
      icon: Headphones,
      title: 'Suporte Rápido',
      description: 'Abra chamados e obtenha assistência técnica especializada',
      link: '/suporte',
      color: 'bg-purple-500',
    },
    {
      icon: Download,
      title: 'Downloads',
      description: 'POPs, manuais e softwares essenciais para seu trabalho',
      link: '/downloads',
      color: 'bg-green-500',
    },
    {
      icon: Newspaper,
      title: 'Atualizações',
      description: 'Fique por dentro das últimas notícias e procedimentos',
      link: '/blog',
      color: 'bg-orange-500',
    },
  ];

  return (
    <>
      {/* Hero Principal */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white overflow-hidden">
        {/* Padrão de fundo sutil */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="inline-block animate-fade-in-up text-white">Central de Suporte TI</span>
              <br />
              <span className="inline-block text-white/90 animate-fade-in-up animation-delay-300">SES-MG</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Seu portal completo de tecnologia da informação da Cidade Administrativa. 
              Tutoriais, suporte técnico e recursos para facilitar seu dia a dia.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                to="/tutoriais"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explorar Tutoriais
              </Link>
              <Link
                to="/suporte"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <Headphones className="w-5 h-5 mr-2" />
                Falar com Suporte
              </Link>
            </div>

            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`${stat.color} p-4 rounded-xl`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção "Como podemos ajudar?" */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Como podemos ajudar?
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Acesse recursos completos para resolver suas necessidades de TI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-primary-500 font-semibold group-hover:text-primary-600">
                  Acessar
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA de Suporte Imediato */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between" data-aos="fade-up">
            <div className="text-white mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Precisa de ajuda imediata?
              </h3>
              <p className="text-white/90">
                Nossa equipe está pronta para atender você
              </p>
            </div>
            <Link
              to="/contato"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Headphones className="w-5 h-5 mr-2" />
              Falar com Suporte
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
