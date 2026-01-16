import React, { useState } from 'react';
import { 
  BookOpen, 
  Search,
  Shield,
  Phone,
  Mail,
  Building2,
  PhoneForwarded,
  ChevronRight,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TutoriaisPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const tutorials = [
    {
      id: 1,
      title: 'VPN - Acesso Remoto',
      description: 'Aprenda a solicitar, instalar e configurar a VPN para trabalho remoto',
      icon: Shield,
      color: 'bg-blue-500',
      link: '/vpn',
      category: 'acesso-remoto',
      difficulty: 'Intermediário',
      duration: '15 min',
      views: 1250,
    },
    {
      id: 2,
      title: 'Cisco Jabber',
      description: 'Configure o Jabber para fazer e receber chamadas telefônicas',
      icon: Phone,
      color: 'bg-green-500',
      link: '/jabber',
      category: 'comunicacao',
      difficulty: 'Fácil',
      duration: '10 min',
      views: 980,
    },
    {
      id: 3,
      title: 'Outlook/Office365',
      description: 'Acesse e configure seu e-mail corporativo e caixas compartilhadas',
      icon: Mail,
      color: 'bg-blue-600',
      link: '/outlook',
      category: 'email',
      difficulty: 'Fácil',
      duration: '8 min',
      views: 1450,
    },
    {
      id: 4,
      title: 'Co-Working FHEMIG',
      description: 'Reserve estações de trabalho presencial na FHEMIG',
      icon: Building2,
      color: 'bg-purple-500',
      link: '/fhemig',
      category: 'presencial',
      difficulty: 'Fácil',
      duration: '5 min',
      views: 650,
    },
    {
      id: 5,
      title: 'Sistema Siga-me',
      description: 'Configure o desvio automático de chamadas do seu ramal',
      icon: PhoneForwarded,
      color: 'bg-teal-500',
      link: '/sigaMe',
      category: 'comunicacao',
      difficulty: 'Fácil',
      duration: '7 min',
      views: 720,
    },
  ];

  const categories = [
    { id: 'todos', name: 'Todos os Tutoriais', count: tutorials.length },
    { id: 'acesso-remoto', name: 'Acesso Remoto', count: tutorials.filter(t => t.category === 'acesso-remoto').length },
    { id: 'comunicacao', name: 'Comunicação', count: tutorials.filter(t => t.category === 'comunicacao').length },
    { id: 'email', name: 'E-mail', count: tutorials.filter(t => t.category === 'email').length },
    { id: 'presencial', name: 'Trabalho Presencial', count: tutorials.filter(t => t.category === 'presencial').length },
  ];

  const stats = [
    {
      icon: BookOpen,
      value: tutorials.length,
      label: 'Tutoriais',
      color: 'text-blue-600',
    },
    {
      icon: Users,
      value: '5.050+',
      label: 'Visualizações',
      color: 'text-green-600',
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Satisfação',
      color: 'text-purple-600',
    },
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || tutorial.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Fácil':
        return 'bg-green-100 text-green-800';
      case 'Intermediário':
        return 'bg-yellow-100 text-yellow-800';
      case 'Avançado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
              <BookOpen className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Central de Tutoriais
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Guias completos e passo a passo para utilizar os serviços de TI da SES-MG
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar tutoriais..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary-900">{stat.value}</div>
                  <div className="text-sm text-secondary-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center" data-aos="fade-up">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-secondary-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  selectedCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-gray-200'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTutorials.length === 0 ? (
            <div className="text-center py-12" data-aos="fade-up">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Nenhum tutorial encontrado
              </h3>
              <p className="text-secondary-600">
                Tente buscar com outros termos ou selecione outra categoria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutorials.map((tutorial, index) => (
                <Link
                  key={tutorial.id}
                  to={tutorial.link}
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="card h-full hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="card-body">
                      {/* Icon */}
                      <div className={`w-16 h-16 ${tutorial.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <tutorial.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {tutorial.title}
                      </h3>

                      {/* Description */}
                      <p className="text-secondary-600 text-sm mb-4">
                        {tutorial.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                          {tutorial.difficulty}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {tutorial.duration}
                        </span>
                      </div>

                      {/* Views */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-sm text-secondary-600">
                          {tutorial.views.toLocaleString()} visualizações
                        </span>
                        <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">
              Não encontrou o que procura?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Entre em contato com nossa equipe de suporte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Fale Conosco
              </Link>
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

export default TutoriaisPage;
