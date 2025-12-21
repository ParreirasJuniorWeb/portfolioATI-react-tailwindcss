import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, BookOpen, Headphones, Download, Newspaper, BarChart3, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: "Início", path: "/" },
    { icon: BookOpen, label: "Tutoriais", path: "/tutoriais" },
    { icon: Headphones, label: "Suporte", path: "/suporte" },
    { icon: Download, label: "Downloads", path: "/downloads" },
    { icon: Newspaper, label: "Blog", path: "/blog" },
    { icon: BarChart3, label: "Painel", path: "/painel" },
    { icon: Mail, label: "Fale Conosco", path: "/contato" },
  ];

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50" data-aos="fade-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo e Título */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
              <span className="text-white font-bold text-xl">TI</span>
            </div>
            <div className="hidden md:block">
              <div className="text-lg font-bold text-secondary-900">Suporte TI</div>
              <div className="text-sm text-secondary-600">SES-MG • Cidade Administrativa</div>
            </div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 font-medium"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Botão Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-secondary-700" />
            ) : (
              <Menu className="w-6 h-6 text-secondary-700" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 font-medium"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
