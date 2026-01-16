import React, { useState } from 'react';
import { 
  Headphones, 
  Mail,
  Phone,
  Clock,
  MapPin,
  MessageSquare,
  FileText,
  Search,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertCircle,
  Info,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SuportePage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefone',
      description: 'Ligue para nossa central de atendimento',
      info: '0800 525 2001',
      action: 'tel:08005252001',
      color: 'bg-blue-500',
      available: '24/7',
    },
    {
      icon: Mail,
      title: 'E-mail',
      description: 'Envie sua dúvida ou solicitação',
      info: 'suporteti.ca@saude.mg.gov.br',
      action: 'mailto:suporteti.ca@saude.mg.gov.br',
      color: 'bg-green-500',
      available: 'Resposta em até 24h',
    },
    {
      icon: MessageSquare,
      title: 'Chat Bot AI',
      description: 'Atendimento automatizado inteligente',
      info: 'Chat Volt AI',
      action: 'https://app.chatvolt.ai/@chat_bot_ti_ses',
      color: 'bg-purple-500',
      available: '24/7',
      external: true,
    },
    {
      icon: MapPin,
      title: 'Presencial (CAMG)',
      description: 'Prédio Minas, 12º andar lado ímpar',
      info: 'Final do corredor à esquerda',
      action: null,
      color: 'bg-orange-500',
      available: 'Seg-Sex: 8h-18h',
    },
  ];

  const assessoria = [
    {
      name: 'Rafael Matos Paiva',
      cargo: 'Assessor Chefe • SES - MG',
      email: 'rafael.paiva@saude.mg.gov.br',
      ramal: 'N/A',
    },
  ];

  const coordenacao = [
    {
      name: 'Henrique Rangel Mattos Jardim',
      cargo: 'Coordenador Geral',
      email: 'henrique.jardim@saude.mg.gov.br',
      ramal: '59978',
    },
  ];

  const equipeSuporte = [
    {
      name: 'Wesley Francisco Soares Fernandes',
      email: 'wesley.fernandes@saude.mg.gov',
      ramal: '(31) 3916-0031',
    },
    {
      name: 'Pedro Nascimento Rodrigues',
      email: 'pedro.nascimento@saude.mg.gov',
      ramal: '(31) 3916-0031',
    },
    {
      name: 'Ramon de Paula Silva',
      email: 'ramon.silva@saude.mg.gov.br',
      ramal: '(31) 3916-0031',
    },
    {
      name: 'João Victor Parreiras Soares (Estagiário)',
      email: 'joao.soares@saude.mg.gov.br',
      ramal: '(31) 3916-0031',
    },
    {
      name: 'Iago Paiva Faria (Estagiário)',
      email: 'iago.paiva@saude.mg.gov.br',
      ramal: '(31) 3916-0031',
    },
  ];

  const equipeInfraestrutura = [
    {
      name: 'Ederson Moreira Souza',
      cargo: 'Diretor de Redes',
      email: 'ederson.souza@saude.mg.gov.br',
      ramal: '59978',
    },
    {
      name: 'Alexander Spelta',
      cargo: 'Analista de Redes',
      email: 'alexander.spelta@saude.mg.gov.br',
      ramal: '(31) 3916-0031',
    },
    {
      name: 'Caio Feliphe Da Silva Martins',
      cargo: 'Analista de Redes',
      email: 'caio.martins@saude.mg.gov.br',
      ramal: '(31) 3916-0031',
    },
  ];

  const serviceHours = [
    {
      day: 'Segunda a Sexta',
      hours: '8h às 18h',
      status: 'Atendimento completo',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      day: 'Sábados, Domingos e Feriados',
      hours: 'Fechado',
      status: 'Apenas emergências pelo 0800',
      icon: AlertCircle,
      color: 'text-orange-600',
    },
  ];

  const quickLinks = [
    {
      title: 'Tutoriais',
      description: 'Guias passo a passo',
      link: '/tutoriais',
      icon: FileText,
    },
    {
      title: 'Downloads',
      description: 'POPs e manuais',
      link: '/downloads',
      icon: FileText,
    },
    {
      title: 'Blog',
      description: 'Comunicados e novidades',
      link: '/blog',
      icon: FileText,
    },
  ];

  const faqs = [
    {
      question: 'Como abrir um chamado?',
      answer: 'Você pode abrir um chamado de 3 formas: 1) Ligando para 0800 525 2001 (Positivo - primeiro atendimento), 2) Enviando e-mail para suporteti.ca@saude.mg.gov.br com descrição detalhada do problema, ou 3) Presencialmente nos andares 8º, 10º, 12º ou 13º do Prédio Minas. O primeiro atendimento é feito pelos agentes de campo da Positivo. Se o problema persistir, o chamado é encaminhado para nossa equipe de TI.',
    },
    {
      question: 'Qual o fluxo de atendimento?',
      answer: 'Primeiro, os agentes de campo da Positivo atendem (instalações de hardware e software). Se não conseguirem solucionar, o chamado vai para nossa fila no Cervello. Nossa equipe atende problemas de todos os níveis, faz manutenções, configurações, instalações que exigem perfil administrativo, gestão de ativos e controle de acessos aos sistemas.',
    },
    {
      question: 'Qual o prazo de atendimento?',
      answer: 'Chamados urgentes são atendidos em até 4 horas. Chamados normais em até 24 horas úteis. Solicitações de acesso e configurações podem levar até 48 horas.',
    },
    {
      question: 'Como acompanho meu chamado?',
      answer: 'Após abrir o chamado, você receberá atualizações por e-mail. Você também pode ligar para o 0800 525 2001 informando seu nome e descrição do problema para verificar o status.',
    },
    {
      question: 'Como solicitar equipamentos de TI?',
      answer: 'Primeiro, envie e-mail para patrimonio@saude.mg.gov.br solicitando o equipamento ou substituição. Aguarde a confirmação do setor de patrimônio. Após a confirmação, o pedido é encaminhado para nossa equipe de TI que fará a montagem ou troca do equipamento.',
    },
    {
      question: 'Como resetar minha senha?',
      answer: 'Para resetar senha de rede, ligue para 0800 525 2001 ou envie e-mail para suporteti.ca@saude.mg.gov.br informando seu nome completo e login de rede.',
    },
    {
      question: 'Atende em finais de semana?',
      answer: 'O atendimento presencial não funciona em finais de semana e feriados. Porém, o telefone 0800 525 2001 está disponível para emergências 24/7.',
    },
    {
      question: 'Como solicitar acesso a sistemas?',
      answer: 'Envie e-mail para suporteti.ca@saude.mg.gov.br informando: nome completo, login de rede, sistema desejado, justificativa e aprovação do gestor em cópia (CC).',
    },
    {
      question: 'Qual a diferença entre Suporte e Infraestrutura?',
      answer: 'A equipe de Suporte atende colaboradores internos da CAMG com foco em hardware e software. A equipe de Infraestrutura atende as regionais de MG (Passos, Patos de Minas, Gov. Valadares, Farmácias de Minas) com foco em redes e infraestrutura.',
    },
    {
      question: 'Quais andares a equipe atende?',
      answer: 'Nossa equipe atende 4 andares da Secretaria de Estado de Saúde: 8º, 10º, 12º e 13º andares do Prédio Minas na Cidade Administrativa. Estamos localizados no 12º andar, lado ímpar, ao final do corredor à esquerda.',
    },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
              <Headphones className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Central de Suporte
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Estamos aqui para ajudar você com qualquer dúvida ou problema técnico
            </p>
            <p className="text-sm text-white/80 mt-4">
              Atendemos os andares 8º, 10º, 12º e 13º do Prédio Minas
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Como Entrar em Contato
            </h2>
            <p className="text-lg text-secondary-600">
              Escolha o canal mais conveniente para você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="card group hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body text-center">
                  <div className={`w-16 h-16 ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">
                    {method.description}
                  </p>
                  <p className="font-semibold text-secondary-900 mb-2">
                    {method.info}
                  </p>
                  <p className="text-xs text-secondary-500 mb-4">
                    {method.available}
                  </p>
                  {method.action && (
                    <a
                      href={method.action}
                      target={method.external ? '_blank' : undefined}
                      rel={method.external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                    >
                      Acessar
                      {method.external && <ExternalLink className="w-4 h-4 ml-1" />}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Horário de Atendimento
            </h2>
            <p className="text-lg text-secondary-600">
              Confira nossos horários de funcionamento
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceHours.map((schedule, index) => (
              <div
                key={index}
                className="card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body">
                  <div className="flex items-start space-x-4">
                    <schedule.icon className={`w-8 h-8 ${schedule.color} flex-shrink-0`} />
                    <div className="flex-1">
                      <h3 className="font-bold text-secondary-900 mb-1">
                        {schedule.day}
                      </h3>
                      <p className="text-2xl font-bold text-indigo-600 mb-2">
                        {schedule.hours}
                      </p>
                      <p className="text-sm text-secondary-600">
                        {schedule.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Estrutura da Equipe de TI
            </h2>
            <p className="text-lg text-secondary-600">
              Conheça nossa equipe dividida em Suporte e Infraestrutura
            </p>
          </div>

          {/* Coordenação */}
          <div className="mb-12" data-aos="fade-up">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                Coordenação Geral
              </h3>
              <p className="text-secondary-600">
                Responsável pela gestão das equipes de Suporte e Infraestrutura
              </p>
            </div>
            <div className="max-w-md mx-auto my-4">
              {assessoria.map((member, index) => (
                <div
                  key={index}
                  className="card bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-200"
                >
                  <div className="card-body text-center">
                    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </span>
                    </div>
                    <h3 className="font-bold text-secondary-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-indigo-600 font-semibold mb-3">
                      {member.cargo}
                    </p>
                    <div className="space-y-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center text-sm text-secondary-600 hover:text-indigo-600"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="truncate">{member.email}</span>
                      </a>
                      <div className="flex items-center justify-center text-sm text-secondary-600">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>{member.ramal}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
             <div className="max-w-md mx-auto">
              {coordenacao.map((member, index) => (
                <div
                  key={index}
                  className="card bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-200"
                >
                  <div className="card-body text-center">
                    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </span>
                    </div>
                    <h3 className="font-bold text-secondary-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-indigo-600 font-semibold mb-3">
                      {member.cargo}
                    </p>
                    <div className="space-y-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center text-sm text-secondary-600 hover:text-indigo-600"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="truncate">{member.email}</span>
                      </a>
                      <div className="flex items-center justify-center text-sm text-secondary-600">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>{member.ramal}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipe de Suporte */}
          <div className="mb-12" data-aos="fade-up">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                Equipe de Suporte Técnico
              </h3>
              <p className="text-secondary-600">
                Atendimento aos colaboradores internos da CAMG • Suporte técnico em hardware e software
              </p>
              <p className="text-sm text-secondary-500 mt-2">
                Andares atendidos: 8º, 10º, 12º e 13º • Prioridade: Gabinete de Saúde (12º andar) • Secretário Fábio Baccheretti
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipeSuporte.map((member, index) => (
                <div
                  key={index}
                  className="card hover:shadow-xl transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="card-body">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-blue-600 font-bold text-lg">
                        {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </span>
                    </div>
                    <h3 className="font-bold text-secondary-900 mb-3">
                      {member.name}
                    </h3>
                    <div className="space-y-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center text-sm text-secondary-600 hover:text-indigo-600"
                      >
                        <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{member.email}</span>
                      </a>
                      <div className="flex items-center text-sm text-secondary-600">
                        <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{member.ramal}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipe de Infraestrutura */}
          <div className="mb-12" data-aos="fade-up">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                Equipe de Infraestrutura e Redes
              </h3>
              <p className="text-secondary-600">
                Atendimento às regionais de MG • Foco em redes e infraestrutura
              </p>
              <p className="text-sm text-secondary-500 mt-2">
                Regionais: Passos, Patos de Minas, Governador Valadares, Farmácias de Minas e outras
              </p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-5">
              {equipeInfraestrutura.map((member, index) => (
                <div
                  key={index}
                  className="card hover:shadow-xl transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="card-body">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-green-600 font-bold text-lg">
                        {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </span>
                    </div>
                    <h3 className="font-bold text-secondary-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-green-600 font-semibold mb-3">
                      {member.cargo}
                    </p>
                    <div className="space-y-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center text-sm text-secondary-600 hover:text-indigo-600"
                      >
                        <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{member.email}</span>
                      </a>
                      <div className="flex items-center text-sm text-secondary-600">
                        <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{member.ramal}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Informações Gerais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
            <div className="card bg-blue-50 border-2 border-blue-200">
              <div className="card-body text-center">
                <h4 className="font-bold text-secondary-900 mb-3">
                  Contato Geral - Suporte
                </h4>
                <p className="text-secondary-700 mb-2">
                  <strong>E-mail:</strong>{' '}
                  <a
                    href="mailto:suporteti.ca@saude.mg.gov.br"
                    className="text-indigo-600 hover:text-indigo-700"
                  >
                    suporteti.ca@saude.mg.gov.br
                  </a>
                </p>
                <p className="text-secondary-600 text-sm">
                  <strong>Ramais:</strong> (31) 3916-0031 ou (31) 3916-0027
                </p>
              </div>
            </div>

            <div className="card bg-green-50 border-2 border-green-200">
              <div className="card-body text-center">
                <h4 className="font-bold text-secondary-900 mb-3">
                  Nossa Equipe
                </h4>
                <p className="text-secondary-700 text-sm">
                  Equipe unida, colaborativa e sempre em prontidão para resolver qualquer problema utilizando a lógica. 
                  Trabalhamos juntos para garantir o melhor atendimento aos servidores da SES-MG.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Links Úteis
            </h2>
            <p className="text-lg text-secondary-600">
              Acesso rápido a recursos importantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="card group hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body text-center">
                  <link.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-secondary-900 mb-2">
                    {link.title}
                  </h3>
                  <p className="text-sm text-secondary-600">
                    {link.description}
                  </p>
                </div>
              </Link>
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
            <p className="text-lg text-secondary-600 mb-8">
              Encontre respostas rápidas para dúvidas comuns
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar nas perguntas frequentes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-8" data-aos="fade-up">
                <Info className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-secondary-600">
                  Nenhuma pergunta encontrada. Tente outros termos.
                </p>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => (
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
                        <ChevronUp className="w-5 h-5 text-indigo-500 flex-shrink-0 ml-4" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-secondary-400 flex-shrink-0 ml-4" />
                      )}
                    </div>
                    {openFaq === index && (
                      <p className="text-secondary-600 mt-4 pt-4 border-t border-gray-200">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ainda tem dúvidas?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nossa equipe está pronta para ajudar você
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:suporteti.ca@saude.mg.gov.br"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar E-mail
              </a>
              <a
                href="tel:08005252001"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <Phone className="w-5 h-5 mr-2" />
                (31) 39160031 ou 0800 525 2001
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuportePage;
