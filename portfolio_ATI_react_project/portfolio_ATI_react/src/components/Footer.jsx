import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", path: "/" },
    { label: "Tutoriais", path: "#tutoriais" },
    { label: "Suporte", path: "/contato" },
    { label: "Downloads", path: "#downloads" },
    { label: "Blog", path: "#blog" },
    { label: "Dashboard", path: "#dashboard" },
  ];

  const resources = [
    { label: "Manual VPN", path: "#vpn" },
    { label: "Cisco Jabber", path: "#jabber" },
    { label: "Outlook", path: "#outlook" },
    { label: "POPs", path: "#pops" },
    { label: "FAQ", path: "#faq" },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TI</span>
              </div>
              <div>
                <div className="font-bold text-lg">Suporte TI</div>
                <div className="text-sm text-gray-400">SES-MG</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Assessoria de Tecnologia da Informação da Secretaria de Estado de Saúde de Minas Gerais
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Recursos</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="mailto:suporteti.ca@saude.mg.gov.br"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    suporteti.ca@saude.mg.gov.br
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:3139160031"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    (31) 39160031
                  </a>
                  <div className="text-gray-500 text-xs">Suporte T.I da SES</div>
                </div>
                <div>
                  <a
                    href="tel:08005952001"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    0800 595 2001
                  </a>
                  <div className="text-gray-500 text-xs">Positivo (Suporte)</div>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  Cidade Administrativa
                  <br />
                  Belo Horizonte - MG
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} SES-MG - Assessoria de Tecnologia da Informação. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
