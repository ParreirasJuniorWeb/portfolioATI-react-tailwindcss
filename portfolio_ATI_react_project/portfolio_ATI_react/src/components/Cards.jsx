import img_1 from "../img/VPN.jpg";
import img_2 from "../img/outlook.jpg";
import img_3 from "../img/notebook.jpg";
import img_4 from "../img/telefone.jpg";
import img_5 from "../img/notebook.jpg";
import img_6 from "../img/Office365.jpg";
import img_7 from "../img/senha.jpg";

import { Link } from "react-router-dom";

const dataList = {
  items: [
    {
      title: "VPN (Acesso Remoto)",
      description:
        "Como solicitar o acesso a VPN? Erros frequentes, Manual e Planilha de solicitação...",
      link: "vpn",
      img: img_1,
      icon: "🔐",
    },
    {
      title: "Erro ao logar no Outlook",
      description:
        "Meu outlook não abre como proceder? Possíveis alternativas para resolver esse erro...",
      link: "outlook",
      img: img_2,
      icon: "📧",
    },
    {
      title: "OneDrive - Backup em Nuvem",
      description:
        "Aprenda a usar o OneDrive para fazer backup dos seus arquivos. É sua responsabilidade proteger seus dados conforme Resolução SEPLAG 084/2022...",
      link: "onedrive",
      img: img_6,
      icon: "☁️",
    },
    {
      title: "Token Soluti - Assinador Digital",
      description:
        "Guia completo sobre Token de assinatura digital. Instalação, configuração, problemas comuns e soluções. Essencial para assinar documentos oficiais...",
      link: "token",
      img: img_7,
      icon: "🔑",
    },
    {
      title: "Co-Working FHEMIG",
      description:
        "Com o fechamento do prédio da cidade administrativa temos a possibilidade de trabalhar presencialmente no prédio da Fhemig...",
      link: "fhemig",
      img: img_3,
      icon: "🏢",
    },
    {
      title: "JABBER",
      description:
        "Bom, com a situação atual do prédio todos os servidores foram alocados em teletrabalho e com isso vem a utilização do Jabber...",
      link: "jabber",
      img: img_4,
      icon: "📞",
    },
    {
      title: "Siga-me",
      description:
        "O sistema 'SIGA-ME' é uma funcionalidade liberada pela PRODEMGE, para o uso enquanto durar a interdição dos Prédios Minas e Gerais...",
      link: "sigaMe",
      img: img_5,
      icon: "📱",
    },
  ],
};

const Cards = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Título da Seção */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre soluções rápidas para os problemas mais comuns
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataList.items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card group-hover:scale-105 transition-transform duration-300 h-full flex flex-col">
                {/* Imagem do Card */}
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-4xl">
                    {item.icon}
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="card-body flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                    <span>Ler mais</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
