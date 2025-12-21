/**
 * Utilitários de Segurança - Portal ATI SES-MG
 * 
 * Este módulo contém funções de segurança para proteger a aplicação
 * contra vulnerabilidades comuns como XSS, injeção de código, etc.
 * 
 * @module security
 * @author Equipe ATI SES-MG
 * @version 1.0.0
 */

/**
 * Sanitiza entrada de texto removendo caracteres e tags potencialmente perigosos
 * 
 * Protege contra:
 * - XSS (Cross-Site Scripting)
 * - Injeção de HTML
 * - Injeção de JavaScript
 * 
 * @param {string} input - Texto a ser sanitizado
 * @returns {string} Texto sanitizado
 * 
 * @example
 * const userInput = '<script>alert("XSS")</script>Hello';
 * const safe = sanitizeInput(userInput);
 * // Retorna: 'Hello'
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    // Remove tags script completas
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    // Remove tags iframe
    .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '')
    // Remove protocolo javascript:
    .replace(/javascript:/gi, '')
    // Remove event handlers (onclick, onerror, etc)
    .replace(/on\w+\s*=/gi, '')
    // Remove tags HTML em geral
    .replace(/<[^>]*>/g, '')
    // Remove espaços extras
    .trim();
};

/**
 * Valida formato de e-mail
 * 
 * @param {string} email - E-mail a ser validado
 * @returns {boolean} True se válido, false caso contrário
 * 
 * @example
 * validateEmail('usuario@saude.mg.gov.br'); // true
 * validateEmail('invalido@'); // false
 */
export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

/**
 * Valida URL mailto: para prevenir redirecionamentos maliciosos
 * 
 * Protege contra:
 * - Redirecionamento para URLs maliciosas
 * - Injeção de JavaScript via URL
 * - Protocolos perigosos (data:, javascript:)
 * 
 * @param {string} url - URL a ser validada
 * @returns {boolean} True se válida, false caso contrário
 * 
 * @example
 * validateMailtoUrl('mailto:user@example.com'); // true
 * validateMailtoUrl('javascript:alert(1)'); // false
 */
export const validateMailtoUrl = (url) => {
  if (typeof url !== 'string') return false;
  
  return url.startsWith('mailto:') && 
         !url.includes('javascript:') &&
         !url.includes('data:') &&
         !url.includes('<script') &&
         !url.includes('onerror=') &&
         !url.includes('onclick=');
};

/**
 * Valida formato de telefone brasileiro (DDD + 8 dígitos)
 * 
 * @param {string} phone - Telefone a ser validado
 * @returns {boolean} True se válido, false caso contrário
 * 
 * @example
 * validatePhone('(31) 3916-0031'); // true
 * validatePhone('123'); // false
 */
export const validatePhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 10 && cleaned.startsWith('31');
};

/**
 * Ofusca e-mail usando Base64 (proteção básica contra bots)
 * 
 * Nota: Não é criptografia forte, apenas dificulta coleta automática
 * 
 * @param {string} email - E-mail a ser ofuscado
 * @returns {string} E-mail em Base64
 * 
 * @example
 * const obfuscated = obfuscateEmail('user@example.com');
 * const original = deobfuscateEmail(obfuscated);
 */
export const obfuscateEmail = (email) => {
  return btoa(email);
};

/**
 * Desofusca e-mail de Base64
 * 
 * @param {string} obfuscated - E-mail ofuscado
 * @returns {string} E-mail original
 */
export const deobfuscateEmail = (obfuscated) => {
  try {
    return atob(obfuscated);
  } catch (error) {
    console.error('Erro ao desofuscar e-mail:', error);
    return '';
  }
};

/**
 * Implementa rate limiting simples (cooldown entre ações)
 * 
 * @param {number} lastActionTime - Timestamp da última ação
 * @param {number} cooldownMs - Tempo de cooldown em milissegundos
 * @returns {object} { allowed: boolean, remainingTime: number }
 * 
 * @example
 * const result = checkRateLimit(lastSubmitTime, 5000);
 * if (!result.allowed) {
 *   alert(`Aguarde ${result.remainingTime}ms`);
 * }
 */
export const checkRateLimit = (lastActionTime, cooldownMs = 5000) => {
  const now = Date.now();
  const timeSinceLastAction = now - lastActionTime;
  const allowed = timeSinceLastAction >= cooldownMs;
  const remainingTime = allowed ? 0 : cooldownMs - timeSinceLastAction;
  
  return {
    allowed,
    remainingTime: Math.ceil(remainingTime / 1000) // Converte para segundos
  };
};

/**
 * Valida tamanho de string (previne ataques de buffer overflow)
 * 
 * @param {string} input - String a ser validada
 * @param {number} maxLength - Tamanho máximo permitido
 * @returns {boolean} True se válido, false caso contrário
 */
export const validateLength = (input, maxLength = 5000) => {
  return typeof input === 'string' && input.length <= maxLength;
};

/**
 * Remove caracteres especiais perigosos mantendo acentuação
 * 
 * @param {string} input - Texto a ser limpo
 * @returns {string} Texto limpo
 */
export const cleanSpecialChars = (input) => {
  if (typeof input !== 'string') return input;
  
  // Mantém letras, números, espaços e acentuação comum
  return input.replace(/[^\w\sáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ.,!?@()-]/gi, '');
};

/**
 * Valida se o conteúdo não contém padrões suspeitos
 * 
 * @param {string} content - Conteúdo a ser verificado
 * @returns {object} { valid: boolean, reason: string }
 */
export const detectSuspiciousContent = (content) => {
  if (typeof content !== 'string') {
    return { valid: false, reason: 'Conteúdo inválido' };
  }
  
  const suspiciousPatterns = [
    { pattern: /<script/gi, reason: 'Tag script detectada' },
    { pattern: /javascript:/gi, reason: 'Protocolo JavaScript detectado' },
    { pattern: /on\w+\s*=/gi, reason: 'Event handler detectado' },
    { pattern: /<iframe/gi, reason: 'Tag iframe detectada' },
    { pattern: /eval\(/gi, reason: 'Função eval detectada' },
    { pattern: /document\.cookie/gi, reason: 'Acesso a cookies detectado' },
    { pattern: /window\.location/gi, reason: 'Manipulação de URL detectada' }
  ];
  
  for (const { pattern, reason } of suspiciousPatterns) {
    if (pattern.test(content)) {
      return { valid: false, reason };
    }
  }
  
  return { valid: true, reason: '' };
};

/**
 * Gera hash simples para verificação de integridade (não criptográfico)
 * 
 * @param {string} str - String para gerar hash
 * @returns {string} Hash hexadecimal
 */
export const simpleHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16);
};

/**
 * Valida estrutura de dados do formulário
 * 
 * @param {object} formData - Dados do formulário
 * @returns {object} { valid: boolean, errors: array }
 */
export const validateFormStructure = (formData) => {
  const errors = [];
  const requiredFields = [
    'fullName', 'email', 'phone', 'cargo', 
    'setor', 'superintendencia', 'categoria', 
    'tipoProblema', 'subject', 'message'
  ];
  
  // Verifica campos obrigatórios
  for (const field of requiredFields) {
    if (!formData[field] || formData[field].trim() === '') {
      errors.push(`Campo ${field} é obrigatório`);
    }
  }
  
  // Valida e-mail
  if (formData.email && !validateEmail(formData.email)) {
    errors.push('E-mail inválido');
  }
  
  // Valida telefone
  if (formData.phone && !validatePhone(formData.phone)) {
    errors.push('Telefone inválido');
  }
  
  // Valida tamanho da mensagem
  if (formData.message && formData.message.length < 30) {
    errors.push('Mensagem muito curta (mínimo 30 caracteres)');
  }
  
  // Valida tamanho máximo
  for (const [key, value] of Object.entries(formData)) {
    if (typeof value === 'string' && !validateLength(value)) {
      errors.push(`Campo ${key} excede tamanho máximo`);
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

/**
 * Escapa caracteres HTML para prevenir XSS
 * 
 * @param {string} text - Texto a ser escapado
 * @returns {string} Texto com caracteres HTML escapados
 */
export const escapeHtml = (text) => {
  const map = {
    '&': '&amp;',
    '<': '<',
    '>': '>',
    '"': '"',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

/**
 * Configuração de e-mails ofuscados
 * Usar em produção para dificultar coleta por bots
 */
export const CONTACT_EMAILS = {
  // Base64 de: suporteti.ca@saude.mg.gov.br
  support: 'c3Vwb3J0ZXRpLmNhQHNhdWRlLm1nLmdvdi5icg==',
  // Base64 de: central@seplag.mg.com.br
  central: 'Y2VudHJhbEBzZXBsYWcubWcuY29tLmJy'
};

/**
 * Obtém e-mails de contato desofuscados
 * 
 * @returns {object} { support: string, central: string }
 */
export const getContactEmails = () => {
  return {
    support: deobfuscateEmail(CONTACT_EMAILS.support),
    central: deobfuscateEmail(CONTACT_EMAILS.central)
  };
};

// Exporta todas as funções como default também
export default {
  sanitizeInput,
  validateEmail,
  validateMailtoUrl,
  validatePhone,
  obfuscateEmail,
  deobfuscateEmail,
  checkRateLimit,
  validateLength,
  cleanSpecialChars,
  detectSuspiciousContent,
  simpleHash,
  validateFormStructure,
  escapeHtml,
  CONTACT_EMAILS,
  getContactEmails
};
