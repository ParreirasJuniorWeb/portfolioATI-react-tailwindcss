import React from 'react';
import { Cloud, Download, Shield, Smartphone, CheckCircle, AlertCircle, BookOpen, Video, FileText, ExternalLink, Upload, FolderSync, Users, Scale, Archive, HardDrive, RefreshCw } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OneDrivePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <Cloud className="w-20 h-20 mx-auto mb-6 animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              OneDrive - Sua Nuvem Segura
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Armazene, sincronize e compartilhe seus arquivos com segurança. 
              1TB de espaço gratuito para todos os servidores da SES-MG!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://onedrive.live.com/about/pt-br/signin/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Acessar OneDrive Agora
              </a>
              <a
                href="#tutorial"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-400 transition-all border-2 border-white/20"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Ver Tutorial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resolução SEPLAG - Destaque */}
      <section className="py-12 bg-gradient-to-r from-red-50 to-orange-50 border-y-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-red-600" data-aos="fade-up">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Scale className="w-12 h-12 text-red-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-2 text-red-600" />
                  IMPORTANTE: Resolução SEPLAG Nº 084/2022
                </h2>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-4">
                  <p className="text-lg font-semibold text-red-900 mb-3">
                    CAPÍTULO VII – DA UTILIZAÇÃO DAS ESTAÇÕES DE TRABALHO
                  </p>
                  <p className="text-lg font-semibold text-red-900 mb-3">
                    Seção III – DO BACKUP DAS INFORMAÇÕES
                  </p>
                  <p className="text-base text-gray-800 leading-relaxed">
                    <strong>Art. 35 -</strong> O backup e a guarda das informações armazenadas nas estações de trabalho são de <strong className="text-red-700">responsabilidade do usuário</strong>. Na existência de um servidor de arquivos administrado pela área de TIC do órgão ou entidade, este deve ser utilizado como ponto central para armazenamento das informações pertinentes à atividade exercida.
                  </p>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl">
                  <p className="text-gray-800">
                    <strong className="text-yellow-900">⚠️ Atenção:</strong> É sua responsabilidade fazer backup dos seus arquivos! O OneDrive é a ferramenta oficial recomendada pela SES-MG para garantir a segurança dos seus dados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Que é OneDrive */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
            O Que é o Microsoft OneDrive?
          </h2>
          
          <div className="prose max-w-none">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-8 rounded-r-xl mb-8" data-aos="fade-up">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                O <strong className="text-blue-600">Microsoft OneDrive</strong> é um serviço de armazenamento em nuvem que permite armazenar arquivos e dados na internet, sincronizá-los entre dispositivos e compartilhá-los com outras pessoas. É como ter um disco rígido virtual acessível de qualquer lugar do mundo!
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A <strong>"nuvem"</strong> são servidores de internet (computadores potentes) que armazenam seus arquivos de forma segura em data centers da Microsoft espalhados pelo mundo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-aos="fade-up">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">1TB Gratuito</h3>
                <p className="text-gray-700">Espaço suficiente para milhares de documentos</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Segurança Total</h3>
                <p className="text-gray-700">Criptografia e proteção empresarial</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200 text-center">
                <FolderSync className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sincronização</h3>
                <p className="text-gray-700">Automática em todos os dispositivos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona e Backup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
            Como Funciona o Backup e Restauração
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" data-aos="fade-up">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Upload Automático</h3>
              <p className="text-gray-700">
                Salve arquivos na pasta OneDrive e eles são enviados automaticamente para a nuvem
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Armazenamento Seguro</h3>
              <p className="text-gray-700">
                Seus arquivos ficam protegidos nos servidores Microsoft com criptografia
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Restauração Fácil</h3>
              <p className="text-gray-700">
                Recupere arquivos excluídos em até 30 dias ou versões anteriores
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Archive className="w-7 h-7 mr-3 text-blue-600" />
              Importância do Backup
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong className="text-blue-600">Por que fazer backup?</strong> Seu computador pode quebrar, ser roubado ou infectado por vírus a qualquer momento. Sem backup, você perde tudo: documentos de trabalho, fotos, planilhas importantes.
              </p>
              <p>
                <strong className="text-green-600">Com o OneDrive:</strong> Seus arquivos estão sempre seguros na nuvem. Se algo acontecer com seu computador, basta fazer login em outro dispositivo e todos os seus arquivos estarão lá, intactos!
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl">
                <p className="font-semibold text-blue-900">
                  💡 Dica: Configure o backup automático das pastas Documentos, Área de Trabalho e Imagens para nunca mais se preocupar!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <Cloud className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Comece a Usar o OneDrive Hoje!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Proteja seus arquivos, acesse de qualquer lugar e colabore com sua equipe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://onedrive.live.com/about/pt-br/signin/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Acessar OneDrive
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-400 transition-all border-2 border-white/20"
            >
              <AlertCircle className="w-5 h-5 mr-2" />
              Precisa de Ajuda?
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OneDrivePage;
