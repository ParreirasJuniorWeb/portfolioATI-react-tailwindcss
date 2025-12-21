import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp,
  Users,
  FileText,
  Download,
  Phone,
  Mail,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  Activity,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const PainelPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('mes');

  // Stats Cards Data
  const stats = [
    {
      title: 'Chamados Abertos',
      value: '127',
      change: '+12%',
      trend: 'up',
      icon: FileText,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Chamados Resolvidos',
      value: '1,543',
      change: '+8%',
      trend: 'up',
      icon: CheckCircle,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Usuários Ativos',
      value: '2,847',
      change: '+5%',
      trend: 'up',
      icon: Users,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Tempo Médio',
      value: '4.2h',
      change: '-15%',
      trend: 'down',
      icon: Clock,
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
    },
  ];

  // Chamados por Categoria
  const chamadosPorCategoria = {
    labels: ['VPN', 'E-mail', 'Jabber', 'Hardware', 'Software', 'Rede'],
    datasets: [
      {
        label: 'Chamados',
        data: [245, 189, 156, 134, 98, 67],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(14, 165, 233, 0.8)',
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
          'rgb(139, 92, 246)',
          'rgb(249, 115, 22)',
          'rgb(236, 72, 153)',
          'rgb(14, 165, 233)',
        ],
        borderWidth: 2,
      },
    ],
  };

  // Chamados por Mês
  const chamadosPorMes = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Abertos',
        data: [165, 159, 180, 181, 196, 205, 214, 198, 187, 190, 194, 127],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Resolvidos',
        data: [148, 152, 171, 175, 189, 198, 207, 192, 181, 185, 188, 143],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Status dos Chamados
  const statusChamados = {
    labels: ['Resolvidos', 'Em Andamento', 'Pendentes', 'Cancelados'],
    datasets: [
      {
        data: [1543, 127, 45, 23],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgb(16, 185, 129)',
          'rgb(59, 130, 246)',
          'rgb(249, 115, 22)',
          'rgb(239, 68, 68)',
        ],
        borderWidth: 2,
      },
    ],
  };

  // Serviços Mais Utilizados
  const servicosMaisUtilizados = [
    { name: 'VPN', requests: 1250, icon: Shield, color: 'text-blue-600' },
    { name: 'E-mail', requests: 980, icon: Mail, color: 'text-green-600' },
    { name: 'Jabber', requests: 720, icon: Phone, color: 'text-purple-600' },
    { name: 'Downloads', requests: 650, icon: Download, color: 'text-orange-600' },
  ];

  // Atividades Recentes
  const atividadesRecentes = [
    {
      id: 1,
      type: 'chamado',
      title: 'Novo chamado aberto',
      description: 'Problema com VPN - Usuário: João Silva',
      time: '5 min atrás',
      icon: FileText,
      color: 'text-blue-600',
    },
    {
      id: 2,
      type: 'resolvido',
      title: 'Chamado resolvido',
      description: 'Configuração de e-mail concluída',
      time: '15 min atrás',
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 3,
      type: 'alerta',
      title: 'Manutenção programada',
      description: 'Servidores de e-mail - Sábado 8h-12h',
      time: '1 hora atrás',
      icon: AlertCircle,
      color: 'text-orange-600',
    },
    {
      id: 4,
      type: 'usuario',
      title: 'Novo usuário cadastrado',
      description: 'Maria Santos - Superintendência de Saúde',
      time: '2 horas atrás',
      icon: Users,
      color: 'text-purple-600',
    },
  ];

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between" data-aos="fade-up">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Painel de Controle
                  </h1>
                  <p className="text-white/80">
                    Visão geral das atividades e estatísticas da TI
                  </p>
                </div>
              </div>
            </div>

            {/* Period Selector */}
            <div className="hidden md:flex space-x-2">
              {['dia', 'semana', 'mes', 'ano'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedPeriod === period
                      ? 'bg-white text-slate-900'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-body">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-secondary-600 mb-1">
                        {stat.title}
                      </p>
                      <h3 className="text-3xl font-bold text-secondary-900 mb-2">
                        {stat.value}
                      </h3>
                      <div className="flex items-center">
                        {stat.trend === 'up' ? (
                          <ArrowUp className="w-4 h-4 text-green-600 mr-1" />
                        ) : (
                          <ArrowDown className="w-4 h-4 text-green-600 mr-1" />
                        )}
                        <span className="text-sm text-green-600 font-medium">
                          {stat.change}
                        </span>
                        <span className="text-sm text-secondary-500 ml-2">
                          vs mês anterior
                        </span>
                      </div>
                    </div>
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chamados por Mês */}
            <div className="card" data-aos="fade-up">
              <div className="card-body">
                <div className="flex items-center mb-6">
                  <Activity className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-bold text-secondary-900">
                    Chamados por Mês
                  </h3>
                </div>
                <div className="h-80">
                  <Line data={chamadosPorMes} options={chartOptions} />
                </div>
              </div>
            </div>

            {/* Chamados por Categoria */}
            <div className="card" data-aos="fade-up" data-aos-delay="100">
              <div className="card-body">
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="text-lg font-bold text-secondary-900">
                    Chamados por Categoria
                  </h3>
                </div>
                <div className="h-80">
                  <Bar data={chamadosPorCategoria} options={chartOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status and Services */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Status dos Chamados */}
            <div className="card" data-aos="fade-up">
              <div className="card-body">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                  <h3 className="text-lg font-bold text-secondary-900">
                    Status dos Chamados
                  </h3>
                </div>
                <div className="h-80 flex items-center justify-center">
                  <div className="w-64">
                    <Doughnut data={statusChamados} options={chartOptions} />
                  </div>
                </div>
              </div>
            </div>

            {/* Serviços Mais Utilizados */}
            <div className="card" data-aos="fade-up" data-aos-delay="100">
              <div className="card-body">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-5 h-5 text-orange-600 mr-2" />
                  <h3 className="text-lg font-bold text-secondary-900">
                    Serviços Mais Utilizados
                  </h3>
                </div>
                <div className="space-y-4">
                  {servicosMaisUtilizados.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <service.icon className={`w-5 h-5 ${service.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-900">
                            {service.name}
                          </h4>
                          <p className="text-sm text-secondary-600">
                            {service.requests.toLocaleString()} acessos
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${(service.requests / 1250) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atividades Recentes */}
      <section className="py-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card" data-aos="fade-up">
            <div className="card-body">
              <div className="flex items-center mb-6">
                <Calendar className="w-5 h-5 text-cyan-600 mr-2" />
                <h3 className="text-lg font-bold text-secondary-900">
                  Atividades Recentes
                </h3>
              </div>
              <div className="space-y-4">
                {atividadesRecentes.map((atividade, index) => (
                  <div
                    key={atividade.id}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0`}>
                      <atividade.icon className={`w-5 h-5 ${atividade.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-secondary-900 mb-1">
                        {atividade.title}
                      </h4>
                      <p className="text-sm text-secondary-600 mb-1">
                        {atividade.description}
                      </p>
                      <p className="text-xs text-secondary-500">
                        {atividade.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PainelPage;
