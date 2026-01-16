import React, { useState } from 'react';
import { 
  Download, 
  FileText,
  Search,
  Filter,
  Calendar,
  Eye,
  File,
  FileSpreadsheet,
  Image as ImageIcon,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DownloadsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedType, setSelectedType] = useState('todos');

  const downloads = [
    {
      id: 1,
      title: 'Manual de Instalação VPN',
      description: 'Guia completo para instalação do cliente VPN Cisco AnyConnect',
      category: 'vpn',
      type: 'pdf',
      size: '2.5 MB',
      date: '2024-01-15',
      downloads: 1250,
      url: '../data/pops/RE_ LIBERAÇÃO ACESSO VPN/Manual de acesso a VPN-CA.PDF',
    },
    {
      id: 2,
      title: 'Manual de Acesso VPN',
      description: 'Instruções para conectar e usar a VPN após instalação',
      category: 'vpn',
      type: 'pdf',
      size: '1.8 MB',
      date: '2024-01-15',
      downloads: 1180,
      url: '../data/pops/RE_ LIBERAÇÃO ACESSO VPN/2-Manual-de-Acesso-a-VPN-CA.pdf',
    },
    {
      id: 3,
      title: 'POP - Solicitação de Acesso VPN',
      description: 'Procedimento Operacional Padrão para solicitar acesso à VPN',
      category: 'vpn',
      type: 'docx',
      size: '450 KB',
      date: '2024-01-10',
      downloads: 890,
      url: '../data/pops/RE_ LIBERAÇÃO ACESSO VPN/1-Manual-de-instalacao-VPN-CA.pdf',
    },
    {
      id: 4,
      title: 'Planilha de Solicitação VPN',
      description: 'Planilha modelo para solicitação de acesso VPN',
      category: 'vpn',
      type: 'xlsx',
      size: '120 KB',
      date: '2024-01-10',
      downloads: 750,
      url: 'https://saudemg.sharepoint.com/:x:/r/sites/ATI/_layouts/15/Doc.aspx?sourcedoc=%7B37747BAF-7D05-436E-8D67-0A57803A969C%7D',
      external: true,
    },
    {
      id: 5,
      title: 'Manual Cisco Jabber',
      description: 'Guia completo de instalação e uso do Cisco Jabber',
      category: 'jabber',
      type: 'pdf',
      size: '3.2 MB',
      date: '2024-01-12',
      downloads: 980,
      url: '/downloads/manual-jabber.pdf',
    },
    {
      id: 6,
      title: 'Planilha de Cadastro Jabber',
      description: 'Planilha para solicitação de ramal Jabber',
      category: 'jabber',
      type: 'xlsx',
      size: '95 KB',
      date: '2024-01-12',
      downloads: 620,
      url: 'https://saudemg.sharepoint.com/:x:/r/sites/ATI/_layouts/15/Doc.aspx?sourcedoc=%7BFD169C1D-72BA-4E00-A13B-FCBBCE02557B%7D',
      external: true,
    },
    {
      id: 7,
      title: 'Procedimento Redefinição Authenticator',
      description: 'Passo a passo para redefinir o Microsoft Authenticator',
      category: 'seguranca',
      type: 'docx',
      size: '380 KB',
      date: '2024-01-08',
      downloads: 540,
      url: '../data/pops/PROCEDIMENTO PARA REDEFINIÇÃO DO AUTENTICATOR.docx',
    },
    {
      id: 8,
      title: 'Cartilha OneDrive SES-MG',
      description: 'Guia de uso do Microsoft OneDrive para servidores',
      category: 'office365',
      type: 'pdf',
      size: '4.1 MB',
      date: '2024-01-05',
      downloads: 1450,
      url: '../data/pops/Cartilha_OneDrive_SES-MG.pdf',
    },
    {
      id: 9,
      title: 'Quick Start OneDrive',
      description: 'Guia rápido de início do Microsoft OneDrive',
      category: 'office365',
      type: 'pdf',
      size: '1.2 MB',
      date: '2024-01-05',
      downloads: 890,
      url: '../data/pops/MS_Office_QuickstartOneDrive.pdf',
    },
    {
      id: 10,
      title: 'Utilização do Microsoft OneDrive',
      description: 'Apresentação completa sobre uso do OneDrive',
      category: 'office365',
      type: 'pptx',
      size: '5.8 MB',
      date: '2024-01-05',
      downloads: 670,
      url: '../data/pops/Utilizacao-do-Microsoft-OneDrive.pdf',
    },
    {
      id: 11,
      title: 'Manual DXTokenSafe',
      description: 'Instruções para instalar e configurar o token do modelo DXSafe Token',
      category: 'token',
      type: 'pdf',
      size: '1.5 MB',
      date: '2024-01-03',
      downloads: 420,
      url: '../data/pops/Manual_Dxtoken 2.pdf',
    },
    {
      id: 12,
      title: 'Manual Tokens/Certificados A3',
      description: 'Procedimento para instalação/configuração de tokens para certificados A3',
      category: 'token',
      type: 'pdf',
      size: '320 KB',
      date: '2024-01-03',
      downloads: 380,
      url: '../data/pops/Manual de Instalacao-A3.pdf',
    },
  ];

  const categories = [
    { id: 'todos', name: 'Todos', count: downloads.length },
    { id: 'vpn', name: 'VPN', count: downloads.filter(d => d.category === 'vpn').length },
    { id: 'jabber', name: 'Jabber', count: downloads.filter(d => d.category === 'jabber').length },
    { id: 'office365', name: 'Office 365', count: downloads.filter(d => d.category === 'office365').length },
    { id: 'seguranca', name: 'Segurança', count: downloads.filter(d => d.category === 'seguranca').length },
    { id: 'coworking', name: 'Co-Working', count: downloads.filter(d => d.category === 'coworking').length },
    { id: 'telefonia', name: 'Telefonia', count: downloads.filter(d => d.category === 'telefonia').length },
  ];

  const fileTypes = [
    { id: 'todos', name: 'Todos os Tipos', icon: FileText },
    { id: 'pdf', name: 'PDF', icon: FileText },
    { id: 'docx', name: 'Word', icon: File },
    { id: 'xlsx', name: 'Excel', icon: FileSpreadsheet },
    { id: 'pptx', name: 'PowerPoint', icon: ImageIcon },
  ];

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf':
        return FileText;
      case 'docx':
        return File;
      case 'xlsx':
        return FileSpreadsheet;
      case 'pptx':
        return ImageIcon;
      default:
        return FileText;
    }
  };

  const getFileColor = (type) => {
    switch (type) {
      case 'pdf':
        return 'bg-red-100 text-red-600';
      case 'docx':
        return 'bg-blue-100 text-blue-600';
      case 'xlsx':
        return 'bg-green-100 text-green-600';
      case 'pptx':
        return 'bg-orange-100 text-orange-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const filteredDownloads = downloads.filter(download => {
    const matchesSearch = download.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         download.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || download.category === selectedCategory;
    const matchesType = selectedType === 'todos' || download.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const totalDownloads = downloads.reduce((sum, item) => sum + item.downloads, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
              <Download className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Central de Downloads
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              POPs, manuais e documentos técnicos para download
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">{downloads.length}</div>
                <div className="text-white/80 text-sm">Documentos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{totalDownloads.toLocaleString()}</div>
                <div className="text-white/80 text-sm">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{categories.length - 1}</div>
                <div className="text-white/80 text-sm">Categorias</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6" data-aos="fade-up">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar documentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-4" data-aos="fade-up" data-aos-delay="100">
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
                      ? 'bg-emerald-600 text-white shadow-lg'
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

          {/* Type Filter */}
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center mb-3">
              <FileText className="w-5 h-5 text-secondary-600 mr-2" />
              <h3 className="font-semibold text-secondary-900">Tipo de Arquivo</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {fileTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                    selectedType === type.id
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-gray-100 text-secondary-700 hover:bg-gray-200'
                  }`}
                >
                  <type.icon className="w-4 h-4 mr-2" />
                  {type.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Downloads List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDownloads.length === 0 ? (
            <div className="text-center py-12" data-aos="fade-up">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Nenhum documento encontrado
              </h3>
              <p className="text-secondary-600">
                Tente ajustar os filtros ou buscar com outros termos
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredDownloads.map((download, index) => {
                const FileIcon = getFileIcon(download.type);
                return (
                  <div
                    key={download.id}
                    className="card hover:shadow-xl transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className="card-body">
                      <div className="flex items-start space-x-4">
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${getFileColor(download.type)}`}>
                          <FileIcon className="w-8 h-8" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-secondary-900 mb-1">
                            {download.title}
                          </h3>
                          <p className="text-secondary-600 text-sm mb-3">
                            {download.description}
                          </p>

                          {/* Meta Info */}
                          <div className="flex flex-wrap gap-4 text-sm text-secondary-500">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formatDate(download.date)}
                            </div>
                            <div className="flex items-center">
                              <FileText className="w-4 h-4 mr-1" />
                              {download.size}
                            </div>
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {download.downloads.toLocaleString()} downloads
                            </div>
                          </div>
                        </div>

                        {/* Download Button */}
                        <div className="flex-shrink-0">
                          <a
                            href={download.url}
                            target={download.external ? '_blank' : undefined}
                            rel={download.external ? 'noopener noreferrer' : undefined}
                            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            <Download className="w-5 h-5 mr-2" />
                            Download
                            {download.external && <ExternalLink className="w-4 h-4 ml-2" />}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Não encontrou o documento que procura?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Entre em contato com nossa equipe
            </p>
            <a
              href="mailto:suporteti.ca@saude.mg.gov.br"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              <FileText className="w-5 h-5 mr-2" />
              Solicitar Documento
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DownloadsPage;
