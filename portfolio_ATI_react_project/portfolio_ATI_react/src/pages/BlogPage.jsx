import React, { useState } from 'react';
import { 
  Newspaper, 
  Search,
  Calendar,
  User,
  Tag,
  Clock,
  TrendingUp,
  MessageCircle,
  Share2,
  ChevronRight,
  Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const posts = [
    {
      id: 1,
      title: 'Atualização do Sistema VPN - Janeiro 2024',
      excerpt: 'Novidades na versão mais recente do Cisco AnyConnect. Melhorias de segurança e performance.',
      content: 'A nova versão do Cisco AnyConnect traz importantes melhorias de segurança...',
      category: 'atualizacoes',
      author: 'Equipe TI',
      date: '2024-01-15',
      readTime: '5 min',
      views: 1250,
      comments: 12,
      image: '/img/vpn2.png',
      featured: true,
    },
    {
      id: 2,
      title: 'Manutenção Programada - Servidores de E-mail',
      excerpt: 'Informamos que haverá manutenção nos servidores de e-mail no próximo sábado.',
      content: 'A manutenção será realizada das 8h às 12h do dia 20/01/2024...',
      category: 'manutencao',
      author: 'Ramon de Paula Silva',
      date: '2024-01-12',
      readTime: '3 min',
      views: 890,
      comments: 8,
      image: '/img/outlook.jpg',
      featured: false,
    },
    {
      id: 3,
      title: 'Novo Sistema de Chamados em Desenvolvimento',
      excerpt: 'Estamos desenvolvendo um novo sistema para abertura e acompanhamento de chamados.',
      content: 'O novo sistema permitirá que você acompanhe seus chamados em tempo real...',
      category: 'novidades',
      author: 'João Victor Parreiras',
      date: '2024-01-10',
      readTime: '4 min',
      views: 1450,
      comments: 25,
      image: '/img/notebook.jpg',
      featured: true,
    },
    {
      id: 4,
      title: 'Dicas de Segurança: Proteja sua Conta',
      excerpt: 'Aprenda a proteger sua conta institucional com autenticação de dois fatores.',
      content: 'A segurança da sua conta é fundamental. Veja como ativar o 2FA...',
      category: 'seguranca',
      author: 'Caio Feliphe Da Silva Martins',
      date: '2024-01-08',
      readTime: '6 min',
      views: 2100,
      comments: 18,
      image: '/img/authenticator.jpg',
      featured: false,
    },
    {
      id: 5,
      title: 'Expansão do Co-Working FHEMIG',
      excerpt: 'Novas estações de trabalho disponíveis no Co-Working da FHEMIG.',
      content: 'Foram adicionadas 10 novas estações de trabalho no Co-Working...',
      category: 'infraestrutura',
      author: 'Wesley Fernandes',
      date: '2024-01-05',
      readTime: '3 min',
      views: 650,
      comments: 5,
      image: '/img/cidade adm2.jpg',
      featured: false,
    },
    {
      id: 6,
      title: 'Migração para Office 365 Concluída',
      excerpt: 'Todos os servidores agora têm acesso completo ao Office 365 na nuvem.',
      content: 'A migração foi concluída com sucesso. Todos os e-mails e arquivos...',
      category: 'atualizacoes',
      author: 'Pedro Nascimento',
      date: '2024-01-03',
      readTime: '5 min',
      views: 1800,
      comments: 22,
      image: '/img/Office365.jpg',
      featured: false,
    },
    {
      id: 7,
      title: 'Treinamento: Uso Eficiente do OneDrive',
      excerpt: 'Participe do treinamento sobre como usar o OneDrive para backup e compartilhamento.',
      content: 'O treinamento será realizado online no dia 25/01/2024 às 14h...',
      category: 'treinamentos',
      author: 'Iago Paiva Faria',
      date: '2024-01-02',
      readTime: '2 min',
      views: 980,
      comments: 15,
      image: '/img/notebook2.jpg',
      featured: false,
    },
    {
      id: 8,
      title: 'Política de Senhas Atualizada',
      excerpt: 'Novas diretrizes de segurança para criação e gerenciamento de senhas.',
      content: 'A partir de fevereiro, todas as senhas deverão seguir novos critérios...',
      category: 'seguranca',
      author: 'Equipe TI',
      date: '2023-12-28',
      readTime: '4 min',
      views: 2500,
      comments: 35,
      image: '/img/senha.jpg',
      featured: false,
    },
  ];

  const categories = [
    { id: 'todos', name: 'Todos', count: posts.length, color: 'bg-gray-500' },
    { id: 'atualizacoes', name: 'Atualizações', count: posts.filter(p => p.category === 'atualizacoes').length, color: 'bg-blue-500' },
    { id: 'manutencao', name: 'Manutenção', count: posts.filter(p => p.category === 'manutencao').length, color: 'bg-orange-500' },
    { id: 'novidades', name: 'Novidades', count: posts.filter(p => p.category === 'novidades').length, color: 'bg-green-500' },
    { id: 'seguranca', name: 'Segurança', count: posts.filter(p => p.category === 'seguranca').length, color: 'bg-red-500' },
    { id: 'infraestrutura', name: 'Infraestrutura', count: posts.filter(p => p.category === 'infraestrutura').length, color: 'bg-purple-500' },
    { id: 'treinamentos', name: 'Treinamentos', count: posts.filter(p => p.category === 'treinamentos').length, color: 'bg-teal-500' },
  ];

  const getCategoryColor = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.color : 'bg-gray-500';
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = posts.filter(post => post.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  const totalViews = posts.reduce((sum, post) => sum + post.views, 0);
  const totalComments = posts.reduce((sum, post) => sum + post.comments, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
              <Newspaper className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Blog ATI
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Comunicados, atualizações e novidades da Assessoria de Tecnologia da Informação
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">{posts.length}</div>
                <div className="text-white/80 text-sm">Publicações</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{totalViews.toLocaleString()}</div>
                <div className="text-white/80 text-sm">Visualizações</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{totalComments}</div>
                <div className="text-white/80 text-sm">Comentários</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="mb-6" data-aos="fade-up">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar publicações..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Categories */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-3">
              <Filter className="w-5 h-5 text-secondary-600 mr-2" />
              <h3 className="font-semibold text-secondary-900">Categorias</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `${category.color} text-white shadow-lg`
                      : 'bg-gray-100 text-secondary-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    selectedCategory === category.id
                      ? 'bg-white/20'
                      : 'bg-gray-300'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedCategory === 'todos' && !searchTerm && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8" data-aos="fade-up">
              <TrendingUp className="w-6 h-6 text-cyan-600 mr-2" />
              <h2 className="text-2xl font-bold text-secondary-900">
                Destaques
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="card group hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative h-48 bg-gradient-to-br from-cyan-500 to-cyan-600 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(post.category)}`}>
                        {getCategoryName(post.category)}
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-cyan-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-secondary-600 text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-secondary-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-cyan-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8" data-aos="fade-up">
            <Newspaper className="w-6 h-6 text-cyan-600 mr-2" />
            <h2 className="text-2xl font-bold text-secondary-900">
              {selectedCategory === 'todos' ? 'Todas as Publicações' : `Categoria: ${getCategoryName(selectedCategory)}`}
            </h2>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12" data-aos="fade-up">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Nenhuma publicação encontrada
              </h3>
              <p className="text-secondary-600">
                Tente ajustar os filtros ou buscar com outros termos
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="card group hover:shadow-xl transition-all duration-300 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="relative h-40 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(post.category)}`}>
                        {getCategoryName(post.category)}
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-cyan-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta */}
                    <div className="flex items-center text-xs text-secondary-500 mb-3 space-x-3">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                      <div className="flex items-center space-x-3 text-xs text-secondary-500">
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </div>
                        <div className="flex items-center">
                          <Share2 className="w-4 h-4 mr-1" />
                          {post.views}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-cyan-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-cyan-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Fique por Dentro
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Acompanhe as últimas novidades e atualizações da TI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/suporte"
                className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg"
              >
                <Newspaper className="w-5 h-5 mr-2" />
                Central de Suporte
              </Link>
              <Link
                to="/tutoriais"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                Ver Tutoriais
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
