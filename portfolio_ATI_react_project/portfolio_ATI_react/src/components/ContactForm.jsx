import React, { useState } from 'react';
import { Mail, User, Phone, MessageSquare, Send, CheckCircle, AlertCircle, Briefcase, Building, Landmark, Cpu, Wrench } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cargo: '',
    setor: '',
    superintendencia: '',
    categoria: '',
    tipoProblema: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpa erro do campo quando usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Função para formatar telefone automaticamente
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    
    // Limita a 10 dígitos (DDD + 8 dígitos)
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    
    // Formata: (31) 3916-0031
    if (value.length >= 3) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length >= 10) {
      value = `${value.slice(0, 5)}${value.slice(5, 9)}-${value.slice(9)}`;
    }
    
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
    
    // Limpa erro do campo
    if (errors.phone) {
      setErrors(prev => ({
        ...prev,
        phone: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Nome completo
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nome completo é obrigatório';
    }

    // E-mail
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    // Telefone/Ramal - Formato: (31) 3916-0031
    const phoneClean = formData.phone.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone/Ramal é obrigatório';
    } else if (phoneClean.length !== 10) {
      newErrors.phone = 'Telefone deve estar no formato (31) 3916-0031';
    } else if (!phoneClean.startsWith('31')) {
      newErrors.phone = 'DDD deve ser 31 (Belo Horizonte)';
    }

    // Cargo (obrigatório)
    if (!formData.cargo.trim()) {
      newErrors.cargo = 'Cargo é obrigatório';
    }

    // Setor (obrigatório)
    if (!formData.setor.trim()) {
      newErrors.setor = 'Setor é obrigatório';
    }

    // Superintendência (agora obrigatório)
    if (!formData.superintendencia.trim()) {
      newErrors.superintendencia = 'Superintendência é obrigatória';
    }

    // Categoria do Problema (obrigatório)
    if (!formData.categoria) {
      newErrors.categoria = 'Categoria do problema é obrigatória';
    }

    // Tipo de Problema (obrigatório)
    if (!formData.tipoProblema) {
      newErrors.tipoProblema = 'Tipo de problema é obrigatório';
    }

    // Assunto
    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    }

    // Mensagem
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 30) {
      newErrors.message = 'Mensagem deve ter pelo menos 30 caracteres para melhor detalhamento';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Por favor, corrija os erros no formulário', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    setIsSending(true);

    try {
      // Destinatários - CORRIGIDOS para Deploy
      const destinatarios = 'suporteti.ca@saude.mg.gov.br;central@seplag.mg.com.br';

      // Monta o assunto
      const assunto = `Chamado Cidade Administrativa --- ${formData.subject}`;

      // Formata o telefone para exibição
      const phoneFormatted = formData.phone;

      // Monta o corpo do e-mail formatado
      const corpo = `
SOLICITAÇÃO DE SUPORTE TI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 INFORMAÇÕES DO SOLICITANTE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nome: ${formData.fullName}
📧 E-mail: ${formData.email}
📞 Telefone/Ramal: ${phoneFormatted}
💼 Cargo: ${formData.cargo}
🏢 Setor: ${formData.setor}
🏛️ Superintendência: ${formData.superintendencia}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔧 CLASSIFICAÇÃO DO PROBLEMA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📂 Categoria: ${formData.categoria}
🛠️ Tipo de Problema: ${formData.tipoProblema}
📋 Assunto: ${formData.subject}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 DESCRIÇÃO DO PROBLEMA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ℹ️ INFORMAÇÕES ADICIONAIS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Data/Hora: ${new Date().toLocaleString('pt-BR')}
🌐 Origem: Portal ATI - Formulário de Contato
🏢 Órgão: Secretaria de Estado de Saúde de Minas Gerais

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

--
Assessoria de Tecnologia da Informação (ATI)
Secretaria de Estado de Saúde de Minas Gerais
Cidade Administrativa - Prédio Minas, 12º andar
📞 (31) 3916-0031 | (31) 3916-0027
📧 suporteti.ca@saude.mg.gov.br
      `.trim();

      // Codifica para URL
      const assuntoCodificado = encodeURIComponent(assunto);
      const corpoCodificado = encodeURIComponent(corpo);

      // Tenta primeiro com mailto: (mais compatível e sem limite de URL)
      const mailtoUrl = `mailto:${destinatarios}?subject=${assuntoCodificado}&body=${corpoCodificado}`;
      
      // Verifica se a URL não é muito longa (limite de ~2000 caracteres para mailto)
      if (mailtoUrl.length > 2000) {
        // Se for muito longa, usa versão simplificada
        const corpoSimplificado = `
SOLICITAÇÃO DE SUPORTE TI

Nome: ${formData.fullName}
E-mail: ${formData.email}
Telefone: ${phoneFormatted}
Cargo: ${formData.cargo}
Setor: ${formData.setor}
Superintendência: ${formData.superintendencia}

Categoria: ${formData.categoria}
Tipo: ${formData.tipoProblema}

DESCRIÇÃO:
${formData.message}

Data: ${new Date().toLocaleString('pt-BR')}
        `.trim();
        
        const corpoSimplificadoCodificado = encodeURIComponent(corpoSimplificado);
        const mailtoUrlSimplificado = `mailto:${destinatarios}?subject=${assuntoCodificado}&body=${corpoSimplificadoCodificado}`;
        
        window.location.href = mailtoUrlSimplificado;
        
        toast.success('Abrindo seu cliente de e-mail padrão...', {
          position: 'top-right',
          autoClose: 3000,
        }); 
      } else {
        // URL normal
        window.location.href = mailtoUrl;
        
        toast.success('Abrindo seu cliente de e-mail padrão...', {
          position: 'top-right',
          autoClose: 3000,
        });
      }

      // Aguarda um pouco e reseta o formulário
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          cargo: '',
          setor: '',
          superintendencia: '',
          categoria: '',
          tipoProblema: '',
          subject: '',
          message: '',
        });
        setErrors({});
        setIsSending(false);
      }, 1500);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast.error('Erro ao abrir Outlook. Por favor, tente novamente.', {
        position: 'top-right',
        autoClose: 3000,
      });
      setIsSending(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nome e E-mail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-secondary-700 mb-2">
              Nome Completo *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                  errors.fullName 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-primary-500'
                } focus:outline-none focus:ring-2 transition-all`}
                placeholder="Seu nome completo"
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
              E-mail *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                  errors.email 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-primary-500'
                } focus:outline-none focus:ring-2 transition-all`}
                placeholder="seu.email@saude.mg.gov.br"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Telefone/Ramal com Formatação Automática */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
            Telefone/Ramal *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                errors.phone 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-primary-500'
              } focus:outline-none focus:ring-2 transition-all`}
              placeholder="(31) 3916-0031"
              maxLength="15"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.phone}
            </p>
          )}
          <p className="mt-1 text-xs text-secondary-500">
            💡 Formato: (31) 3916-0031 - DDD 31 + 8 dígitos
          </p>
        </div>

        {/* Cargo e Setor (Agora Obrigatórios) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="cargo" className="block text-sm font-medium text-secondary-700 mb-2">
              Cargo *
            </label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="cargo"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                  errors.cargo 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-primary-500'
                } focus:outline-none focus:ring-2 transition-all`}
                placeholder="Ex: Analista, Técnico, Coordenador"
              />
            </div>
            {errors.cargo && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.cargo}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="setor" className="block text-sm font-medium text-secondary-700 mb-2">
              Setor *
            </label>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="setor"
                name="setor"
                value={formData.setor}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                  errors.setor 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-primary-500'
                } focus:outline-none focus:ring-2 transition-all`}
                placeholder="Ex: Administrativo, Financeiro, RH"
              />
            </div>
            {errors.setor && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.setor}
              </p>
            )}
          </div>
        </div>

        {/* Superintendência (Agora Obrigatório) */}
        <div>
          <label htmlFor="superintendencia" className="block text-sm font-medium text-secondary-700 mb-2">
            Superintendência *
          </label>
          <div className="relative">
            <Landmark className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="superintendencia"
              name="superintendencia"
              value={formData.superintendencia}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                errors.superintendencia 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-primary-500'
              } focus:outline-none focus:ring-2 transition-all`}
              placeholder="Ex: SARE, SAPS, SUGESP, SVPS"
            />
          </div>
          {errors.superintendencia && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.superintendencia}
            </p>
          )}
        </div>

        {/* Categoria e Tipo de Problema */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
            <Cpu className="w-5 h-5 mr-2 text-blue-600" />
            Classificação do Problema
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Categoria do Problema */}
            <div>
              <label htmlFor="categoria" className="block text-sm font-medium text-secondary-700 mb-2">
                Categoria/Natureza do Problema *
              </label>
              <div className="relative">
                <Cpu className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                <select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                    errors.categoria 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-primary-500'
                  } focus:outline-none focus:ring-2 transition-all bg-white appearance-none cursor-pointer`}
                >
                  <option value="">Selecione a categoria</option>
                  <option value="Hardware">🖥️ Hardware</option>
                  <option value="Software">💻 Software</option>
                  <option value="Redes">🌐 Redes</option>
                </select>
              </div>
              {errors.categoria && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.categoria}
                </p>
              )}
            </div>

            {/* Tipo de Problema */}
            <div>
              <label htmlFor="tipoProblema" className="block text-sm font-medium text-secondary-700 mb-2">
                Tipo de Problema *
              </label>
              <div className="relative">
                <Wrench className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                <select
                  id="tipoProblema"
                  name="tipoProblema"
                  value={formData.tipoProblema}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                    errors.tipoProblema 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-primary-500'
                  } focus:outline-none focus:ring-2 transition-all bg-white appearance-none cursor-pointer`}
                >
                  <option value="">Selecione o tipo</option>
                  <option value="Instalação">🔧 Instalação</option>
                  <option value="Configuração">⚙️ Configuração</option>
                  <option value="Manutenção">🛠️ Manutenção</option>
                  <option value="Licenças de Software">📜 Licenças de Software</option>
                  <option value="Atualização">🔄 Atualização</option>
                  <option value="Erro/Bug">🐛 Erro/Bug</option>
                  <option value="Acesso/Permissões">🔐 Acesso/Permissões</option>
                  <option value="Desempenho">⚡ Desempenho</option>
                  <option value="Backup/Recuperação">💾 Backup/Recuperação</option>
                  <option value="Outro">❓ Outro</option>
                </select>
              </div>
              {errors.tipoProblema && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.tipoProblema}
                </p>
              )}
            </div>
          </div>

          <p className="mt-3 text-xs text-secondary-600 bg-white/50 rounded-lg p-2">
            💡 <strong>Dica:</strong> Selecione a categoria e o tipo que melhor descrevem seu problema para agilizar o atendimento
          </p>
        </div>

        {/* Assunto */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
            Assunto *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.subject 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:ring-primary-500'
            } focus:outline-none focus:ring-2 transition-all`}
            placeholder="Descreva brevemente o problema"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.subject}
            </p>
          )}
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
            Descrição Detalhada do Problema *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                errors.message 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-primary-500'
              } focus:outline-none focus:ring-2 transition-all resize-none`}
              placeholder="Descreva o problema com o máximo de detalhes possível. Inclua mensagens de erro, quando ocorreu, o que estava fazendo, etc."
            />
          </div>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.message}
            </p>
          )}
          <p className="mt-2 text-xs text-secondary-500">
            💡 <strong>Dica:</strong> Quanto mais detalhes você fornecer, mais rápido conseguiremos resolver seu problema. Inclua:
          </p>
          <ul className="mt-1 text-xs text-secondary-500 list-disc list-inside space-y-1">
            <li>Mensagens de erro exatas (se houver)</li>
            <li>Quando o problema começou</li>
            <li>O que você estava fazendo quando ocorreu</li>
            <li>Se já tentou alguma solução</li>
            <li>Equipamento/software específico envolvido</li>
          </ul>
          <p className="mt-2 text-xs text-red-600 font-medium">
            ⚠️ Mínimo de 30 caracteres para garantir detalhamento adequado
          </p>
        </div>

        {/* Botão de Envio */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={isSending}
            className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isSending ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Abrindo Outlook...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Enviar via Outlook Web
              </>
            )}
          </button>
        </div>

        {/* Informações Adicionais */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-secondary-700">
              <p className="font-semibold mb-1">Como funciona:</p>
              <ul className="list-disc list-inside space-y-1 text-secondary-600">
                <li>Ao clicar em "Enviar", o Outlook Web será aberto em nova aba</li>
                <li>O e-mail estará pré-preenchido com suas informações</li>
                <li>Revise os dados e clique em "Enviar" no Outlook</li>
                <li>Você receberá uma resposta em até 24 horas úteis</li>
              </ul>
            </div>
          </div>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default ContactForm;
