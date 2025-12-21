import React, { useState } from 'react';
import { Shield, Download, AlertCircle, CheckCircle, Key, Laptop, Chrome, Settings, RefreshCw, HelpCircle, FileText, Wrench, AlertTriangle, Coffee } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TokenPage = () => {
  const [activeTab, setActiveTab] = useState('introducao');

  const tokenTypes = [
    {
      name: 'Token A3',
      description: 'Certificado digital tipo A3 em hardware',
      icon: Key,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      manual: 'Manual de Instalacao-A3.pdf'
    },
    {
      name: 'DXToken',
      description: 'Token USB para assinatura digital',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      manual: 'Manual_Dxtoken 2.pdf'
    },
    {
      name: 'Epass2003',
      description: 'Token Epass2003 Feitian',
      icon: Key,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      manual: 'Manualbde Instalacao do Token Epass2003.pdf'
    }
  ];

  const commonProblems = [
    {
      problem: 'Token não é reconhecido',
      solution: 'Verifique se os drivers estão instalados corretamente. Tente em outra porta USB.',
      icon: AlertTriangle,
      color: 'text-red-600'
    },
    {
      problem: 'Erro de versão do Java',
      solution: 'Instale a versão correta do Java (32 ou 64 bits) conforme seu sistema operacional.',
      icon: Coffee,
      color: 'text-orange-600'
    },
    {
      problem: 'Extensão Sigma não funciona',
      solution: 'Atualize a extensão do navegador ou reinstale. Verifique compatibilidade com a versão do navegador.',
      icon: Chrome,
      color: 'text-yellow-600'
    },
    {
      problem: 'Certificado expirado',
      solution: 'Entre em contato com a Soluti para renovação do certificado digital.',
      icon: AlertCircle,
      color: 'text-purple-600'
    }
  ];

  const installationSteps = [
    {
      number: 1,
      title: 'Baixar Drivers',
      description: 'Baixe os drivers específicos do seu modelo de token',
      icon: Download,
      tip: 'Sempre baixe do site oficial da Soluti'
    },
    {
      number: 2,
      title: 'Instalar Java',
      description: 'Instale a versão correta do Java (32 ou 64 bits)',
      icon: Coffee,
      tip: 'Verifique a arquitetura do seu sistema operacional'
    },
    {
      number: 3,
      title: 'Instalar Drivers do Token',
      description: 'Execute o instalador dos drivers como administrador',
      icon: Settings,
      tip: 'Reinicie o computador após a instalação'
    },
    {
      number: 4,
      title: 'Configurar Extensão',
      description: 'Instale a extensão Sigma no seu navegador',
      icon: Chrome,
      tip: 'Disponível para Chrome, Edge e Firefox'
    },
    {
      number: 5,
      title: 'Testar Token',
      description: 'Conecte o token e teste a assinatura digital',
      icon: CheckCircle,
      tip: 'Use o sistema Sigma para validar'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <Shield className="w-20 h-20 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Token Soluti - Assinador Digital
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Guia completo para instalação, configuração e solução de problemas com Token de Assinatura Digital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveTab('instalacao')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl"
              >
                <Settings className="w-5 h-5 mr-2" />
                Ver Instalação
              </button>
              <button
                onClick={() => setActiveTab('problemas')}
                className="inline-flex items-center justify-center px-8 py-4 bg-purple-500 text-white rounded-xl font-semibold hover:bg-purple-400 transition-all border-2 border-white/20"
              >
                <Wrench className="w-5 h-5 mr-2" />
                Solução de Problemas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Alerta Importante */}
      <section className="py-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-y-4 border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 border-l-8 border-yellow-600" data-aos="fade-up">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-10 h-10 text-yellow-600 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ⚠️ Importante: Suporte da Equipe de TI
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A <strong>instalação e configuração de Tokens</strong> deve ser realizada preferencialmente pela <strong className="text-yellow-700">Equipe de Suporte em TI</strong>. 
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Este guia serve como <strong>material de apoio</strong> para usuários que desejam tentar resolver problemas simples por conta própria, mas <strong className="text-yellow-700">sempre recomendamos contato com a equipe de TI</strong> para supervisão e intervenção quando necessário.
                </p>
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-900">
                    <strong>📞 Contato TI:</strong> Em caso de dúvidas ou problemas, abra um chamado pelo ramal <strong>(31) 3916-0031</strong> ou e-mail <strong>suporteti.ca@saude.mg.gov.br</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Que é Token */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
            O Que é o Token Soluti?
          </h2>
          
          <div className="prose max-w-none">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 p-8 rounded-r-xl mb-8" data-aos="fade-up">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                O <strong className="text-purple-600">Token Soluti</strong> é um dispositivo USB que armazena seu <strong>certificado digital tipo A3</strong>, permitindo que você assine digitalmente documentos, ofícios e memorandos com validade jurídica.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                É como uma <strong>"assinatura eletrônica"</strong> que garante autenticidade, integridade e não-repúdio dos documentos assinados.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-aos="fade-up">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Segurança</h3>
                <p className="text-gray-700">Certificado criptografado protegido por senha</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200 text-center">
                <FileText className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Validade Jurídica</h3>
                <p className="text-gray-700">Assinaturas com valor legal reconhecido</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200 text-center">
                <Key className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Portabilidade</h3>
                <p className="text-gray-700">Use em qualquer computador</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center">
                <HelpCircle className="w-6 h-6 mr-2" />
                Para Que Serve?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Assinar digitalmente <strong>documentos oficiais</strong></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Assinar <strong>ofícios e memorandos</strong> no sistema Sigma</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Autenticar processos administrativos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Garantir <strong>autenticidade e integridade</strong> de documentos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Token */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
            Tipos de Token Utilizados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tokenTypes.map((token, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`${token.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <token.icon className={`w-8 h-8 ${token.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {token.name}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {token.description}
                </p>
                <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-sm font-semibold">
                  <Download className="w-4 h-4 mr-2" />
                  {token.manual}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs de Conteúdo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
            <button
              onClick={() => setActiveTab('introducao')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'introducao'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Shield className="w-5 h-5 inline mr-2" />
              Introdução
            </button>
            <button
              onClick={() => setActiveTab('instalacao')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'instalacao'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Settings className="w-5 h-5 inline mr-2" />
              Instalação
            </button>
            <button
              onClick={() => setActiveTab('problemas')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'problemas'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Wrench className="w-5 h-5 inline mr-2" />
              Problemas Comuns
            </button>
            <button
              onClick={() => setActiveTab('manutencao')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'manutencao'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <RefreshCw className="w-5 h-5 inline mr-2" />
              Manutenção
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Introdução */}
            {activeTab === 'introducao' && (
              <div data-aos="fade-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Como Funciona o Token?
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    O Token é um dispositivo físico (USB) que contém um <strong>chip criptográfico</strong> onde está armazenado seu certificado digital. Ele funciona como uma "chave" que só você possui.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                      <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                        <Key className="w-6 h-6 mr-2" />
                        Componentes Necessários
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span><strong>Token USB</strong> (hardware físico)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span><strong>Drivers</strong> do fabricante</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span><strong>Java</strong> (32 ou 64 bits)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span><strong>Extensão Sigma</strong> (navegador)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span><strong>Senha PIN</strong> do token</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
                      <h3 className="text-lg font-semibold text-purple-900 mb-4 flex items-center">
                        <Laptop className="w-6 h-6 mr-2" />
                        Requisitos do Sistema
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Windows 7 ou superior</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Porta USB disponível</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Navegador atualizado (Chrome/Edge/Firefox)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Permissões de administrador</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Conexão com internet</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                    <h4 className="text-lg font-semibold text-yellow-900 mb-2 flex items-center">
                      <AlertCircle className="w-6 h-6 mr-2" />
                      Atenção: Compatibilidade
                    </h4>
                    <p className="text-gray-700">
                      Problemas de compatibilidade são comuns! A versão do Java (32 ou 64 bits) deve corresponder à arquitetura do seu sistema operacional. A extensão Sigma também precisa ser compatível com a versão do seu navegador.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Instalação */}
            {activeTab === 'instalacao' && (
              <div data-aos="fade-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Passo a Passo para Instalação
                </h2>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-8">
                  <p className="text-red-900 font-semibold flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    IMPORTANTE: Recomendamos que a instalação seja feita pela equipe de TI. Este guia é apenas para referência.
                  </p>
                </div>

                <div className="space-y-8">
                  {installationSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex gap-6 p-6 bg-gradient-to-r from-purple-50 to-white rounded-xl border border-purple-100 hover:shadow-lg transition-all"
                      data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <step.icon className="w-6 h-6 text-purple-600" />
                          <h3 className="text-xl font-semibold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 mb-3">
                          {step.description}
                        </p>
                        {step.tip && (
                          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r">
                            <p className="text-sm text-yellow-800">
                              <strong>💡 Dica:</strong> {step.tip}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Download className="w-7 h-7 mr-3 text-blue-600" />
                    Manuais de Instalação
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all border border-blue-200">
                      <span className="font-semibold text-gray-900">Manual Token A3</span>
                      <Download className="w-5 h-5 text-blue-600" />
                    </button>
                    <button className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all border border-blue-200">
                      <span className="font-semibold text-gray-900">Manual DXToken</span>
                      <Download className="w-5 h-5 text-blue-600" />
                    </button>
                    <button className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all border border-blue-200">
                      <span className="font-semibold text-gray-900">Manual Epass2003</span>
                      <Download className="w-5 h-5 text-blue-600" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Problemas Comuns */}
            {activeTab === 'problemas' && (
              <div data-aos="fade-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Problemas Comuns e Soluções
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                  Problemas com Token são muito recorrentes. Veja as soluções para os erros mais comuns:
                </p>

                <div className="space-y-6">
                  {commonProblems.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <item.icon className={`w-8 h-8 ${item.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {item.problem}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            <strong className="text-green-600">Solução:</strong> {item.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertTriangle className="w-7 h-7 mr-3 text-red-600" />
                    Quando Chamar o Suporte TI?
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Se o token não for reconhecido após reinstalar drivers</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Problemas de incompatibilidade de versão do Java</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Extensão Sigma não funciona após atualização</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Necessidade de reinstalação após formatação</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Qualquer dúvida durante a instalação ou configuração</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Manutenção */}
            {activeTab === 'manutencao' && (
              <div data-aos="fade-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Manutenção e Cuidados
                </h2>

                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">
                      Cuidados com o Token
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Não exponha o token a temperaturas extremas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Evite umidade e líquidos</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Remova com segurança (ejetar antes de desconectar)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Guarde em local seguro quando não estiver em uso</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Não force a conexão USB</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-purple-900 mb-4">
                      Renovação do Certificado
                    </h3>
                    <p className="text-gray-700 mb-4">
                      O certificado digital tem validade de <strong>1 a 3 anos</strong>. Antes do vencimento, entre em contato com a Soluti para renovação.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>📞 Soluti:</strong> Entre em contato com a Autoridade Certificadora para renovar seu certificado antes do vencimento.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">
                      Backup e Segurança
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Shield className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Nunca compartilhe</strong> sua senha PIN do token</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Mantenha o token em local seguro</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Em caso de perda ou roubo, <strong>revogue o certificado imediatamente</strong></span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Não empreste seu token para outras pessoas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de Ajuda com seu Token?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Nossa equipe de TI está pronta para ajudar com instalação, configuração e solução de problemas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl"
            >
              <AlertCircle className="w-5 h-5 mr-2" />
              Abrir Chamado
            </a>
            <a
              href="tel:+553139160031"
              className="inline-flex items-center justify-center px-8 py-4 bg-purple-500 text-white rounded-xl font-semibold hover:bg-purple-400 transition-all border-2 border-white/20"
            >
              📞 (31) 3916-0031
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TokenPage;
