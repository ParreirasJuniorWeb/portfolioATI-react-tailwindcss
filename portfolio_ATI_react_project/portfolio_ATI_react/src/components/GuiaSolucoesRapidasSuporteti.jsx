import React from "react";

const GuiaSolucoesRapidasSuporteti = () => {
  const solutions = [
    {
      id: 1,
      title: "Procedimento VPN - Máquina desligada/Erro no CISCO",
      icon: "🔐",
      content: (
        <>
          <p className="mb-4 font-semibold">Lembre-se: O CISCO conectou normalmente?</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Se aparecer <span className="font-bold text-red-600">"Login Failed"</span> é senha incorreta ou expirada.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Se aparecer uma tela vermelha escrito <span className="font-bold text-red-600">"Untrusted server blocked!"</span> deve-se clicar em <span className="font-bold text-red-600">"Change Options"</span> desmarcando a última opção <span className="font-bold text-red-600">"Block untrusted servers"</span>. Agora é só clicar em Connect Anyway que irá acessar normalmente.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Estando tudo certo com o Cisco será necessário: <span className="font-bold">Abrir chamado no 0800 595 2001 - Positivo</span> informando Hostname ou mesa e andar.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>A SES disponibiliza o trabalho presencial no prédio GERAIS DA CAMG ou no Coworking da Fhemig em BH para os servidores com trabalho que seja ESSENCIAL uso da rede do governo.</span>
            </li>
          </ul>
        </>
      ),
      links: [],
    },
    {
      id: 2,
      title: "Procedimento para Solicitar Troca de Senha de Rede ou E-mail",
      icon: "🔑",
      content: (
        <ol className="space-y-3 list-decimal list-inside text-gray-700">
          <li>Abrir chamado no 0800 - 595 2001 (Positivo), se estiver presencial ligar no 9;</li>
          <li>Informar ao atendente para abrir chamado de troca de senha de rede e/ou de e-mail (Lembre-se de anotar o número do chamado).</li>
          <li>Para a maior segurança dos usuários o reset de senha é feito APENAS na mesa do Suporte TI ao informar o numero do chamado.</li>
          <li>O próprio usuário irá escolher a sua nova senha seguindo o padrão de: (1 letra maiúscula, 1 caractere especial, 1 número, mínimo de 8 caracteres).</li>
        </ol>
      ),
      links: [
        {
          text: "Proteção de senhas",
          url: "https://br.norton.com/blog/how-to/how-to-secure-your-passwords",
        },
      ],
    },
    {
      id: 3,
      title: "Procedimento para Redefinição do Authenticator",
      icon: "📱",
      content: (
        <>
          <p className="mb-4 text-gray-700">
            <strong>Importante:</strong> A Intendência da CAMG, responsável pelo PORTAL CA, implantou a autenticação de múltiplos fatores. Ou seja, quando acessar sua conta x ou m em um novo dispositivo deve ser habilitado no app Authenticator da Microsoft.
          </p>
          <p className="mb-3 font-semibold">Passo a passo:</p>
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            <li>Solicitar o reset do seu usuário de rede do Microsoft Authenticator para a Intendência através do ramal 9 (0800 595 2001);</li>
            <li>Desinstalar o aplicativo Microsoft Authenticator do celular e logo após instalar novamente;</li>
            <li>Após a instalação o usuário deve abrir uma janela anônima no Chrome e ir para o seguinte endereço: office.com e no campo entrar digitar seu usuário de rede exemplo: x........ ou m...... e sua senha do computador;</li>
            <li>Após deverá seguir os passos solicitados pelo Authenticator e ler o QRCode;</li>
            <li>Inclua o seu usuário via leitura do QRCode ou pelo sinal de + no aplicativo no canto superior direito.</li>
          </ol>
        </>
      ),
      links: [
        {
          text: "Tutorial Authenticator",
          url: "https://www.youtube.com/shorts/-nrmPY4I668",
        },
      ],
    },
    {
      id: 4,
      title: "Procedimento de Criação de Caixa Compartilhada",
      icon: "📬",
      content: (
        <>
          <p className="mb-4 text-gray-700">
            Para prosseguir com a criação de uma caixa compartilhada, por favor, forneça as seguintes informações:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2 font-bold">1.</span>
              <span><strong>Nome da caixa:</strong> O nome que você gostaria de atribuir à nova caixa compartilhada. Certifique-se de que o nome seja claro e representativo.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2 font-bold">2.</span>
              <span><strong>Administradores:</strong> Indique o nome de dois usuários que serão responsáveis pela administração da caixa compartilhada.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2 font-bold">3.</span>
              <span><strong>Usuários:</strong> Liste os nomes dos usuários que terão acesso à caixa compartilhada.</span>
            </li>
          </ul>
          <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-sm text-yellow-800">
              <strong>IMPORTANTE:</strong> Para retirada ou inserção de novos membros no e-mail compartilhado o adm. da conta deve enviar a solicitação ou estar copiado no e-mail.
            </p>
          </div>
        </>
      ),
      links: [
        {
          text: "Tutorial Caixa Compartilhada",
          url: "https://www.youtube.com/watch?v=ZNLGsSn31T4",
        },
      ],
    },
    {
      id: 5,
      title: "Procedimento Erro no App Jabber",
      icon: "📞",
      content: (
        <>
          <p className="mb-4 text-gray-700">
            Primeiro passo deve ser verificado se a senha de login da CAMG está correta e não expirada. Para isto deve-se tentar entrar no cisco VPN ou no PORTAL CA.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Se não conseguir acesso deve-se abrir chamado 0800 595 2001 solicitando reset de senha de rede.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Se não resolver deve-se apagar os dados ou reinstalar o aplicativo.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Se mesmo assim conectar e não ficar status verde no nome do usuário será necessário abrir um chamado na Positivo para verificar a conta Jabber. 0800 595 2001</span>
            </li>
          </ul>
        </>
      ),
      links: [
        {
          text: "Tutorial Jabber",
          url: "https://www.youtube.com/watch?v=JAdEmoU6_o4",
        },
        {
          text: "Manual Jabber",
          url: "https://saudemg.sharepoint.com/sites/ATI/Documentos%20Compartilhados/Forms/Sistema%20Reserva%20de%20Estaes.aspx?id=%2Fsites%2FCentraldeComunicadosSuporteTI%2FDocumentos%20Compartilhados%2FJABBER%2FMANUAL%20JABBER%2Epdf&parent=%2Fsites%2FCentraldeComunicadosSuporteTI%2FDocumentos%20Compartilhados%2FJABBER",
        },
        {
          text: "Planilha Solicitação Jabber",
          url: "https://saudemg.sharepoint.com/:x:/r/sites/ATI/_layouts/15/Doc.aspx?sourcedoc=%7BFD169C1D-72BA-4E00-A13B-FCBBCE02557B%7D&file=Planilha_Cadastro_Jabber.xlsx&action=default&mobileredirect=true",
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Título da Seção */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Guia de Soluções Rápidas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolva os problemas mais comuns seguindo nossos guias passo a passo
          </p>
        </div>

        {/* Lista de Soluções */}
        <div className="space-y-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className="card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-body">
                {/* Cabeçalho */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-3xl">
                      {solution.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold text-sm">
                        {solution.id}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-secondary-900">
                        {solution.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="mb-6">
                  {solution.content}
                </div>

                {/* Links */}
                {solution.links && solution.links.length > 0 && (
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-sm font-semibold text-gray-700 mb-4">
                      📚 Saiba mais:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {solution.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline btn-sm inline-flex items-center"
                        >
                          {link.text}
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Não encontrou a solução?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para ajudar você
            </p>
            <a href="/contato" className="btn btn-primary btn-lg">
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuiaSolucoesRapidasSuporteti;
