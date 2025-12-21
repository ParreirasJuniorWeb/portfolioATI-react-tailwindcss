import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Uma biblioteca bastante popular para implementar notificações em aplicações React é o
// React-Toastify.

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the component at the top level
const Form_ATI_contact = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    ddd: "",
    ramal: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "O nome completo é obrigatório.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Formato de e-mail inválido.";
    }
    if (!formData.ddd.trim()) {
      newErrors.ddd = "O DDD é obrigatório.";
    } else if (!/^\d{2}$/.test(formData.ddd)) {
      newErrors.ddd = "O DDD deve conter exatamente 2 dígitos.";
    }
    if (!formData.ramal.trim()) {
      newErrors.ramal = "O ramal é obrigatório.";
    } else if (!/^\d{5}$/.test(formData.ramal)) {
      newErrors.ramal = "O ramal deve conter exatamente 5 dígitos.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "O assunto é obrigatório.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "A mensagem é obrigatória.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setValidated(true);
      setIsSending(true);
      console.log("Enviando formulário com dados:", formData);
      // 2. Define o destinatário fixo do e-mail
      const destinatario = 'joao.soares@saude.mg.gov.br';
      // 3. Usa os valores do estado do formulário
      const assunto = formData.subject;
      const corpo = {mensagem: formData.message, nome: formData.fullName, email: formData.email, telefone: `(${formData.ddd}) ${formData.ramal}`};
        //    Inclui a mensagem, nome, e-mail e telefone no corpo do e-mail
        console.log("Corpo do e-mail: ", corpo);
        // 4. Codifica os valores para que possam ser usados em uma URL com segurança.
        //    Isso converte espaços para '%20', quebras de linha para '%0A', etc.
      const assuntoCodificado = encodeURIComponent(assunto);
      // Formata o corpo do e-mail como texto legível
      const corpoTexto = 
        `Mensagem: ${formData.message}\n\n` +
        `Nome: ${formData.fullName}\n` +
        `E-mail: ${formData.email}\n` +
        `Telefone: (${formData.ddd}) ${formData.ramal}\n` +
        `Data/Hora: ${new Date().toLocaleString()}\n` +
        `Secretaria de Estado de Saúde de Minas Gerais\n` +
        `Cargo: [INFORME SEU CARGO AQUI]\n` +
        `Insira sua assinatura de e-mail aqui.\n` +
        `\n\n--\n`+
        `\nEsta mensagem foi enviada automaticamente via formulário de contato T.I SES.\n` +
        `\nAssessoria de Tecnologia da Informação - ATI\n` +
        `\n\n--\nEnviado via Formulário de Contato T.I SES`;
      const corpoCodificado = encodeURIComponent(corpoTexto);
        console.log("Assunto codificado: ", assuntoCodificado);
        console.log("Corpo codificado: ", corpoCodificado);
        console.log("Destinatário: ", destinatario);
        console.log("Assunto: ", assunto);
        console.log("Corpo: ", corpoTexto);
        console.log("Form Data: ", formData);
        console.log("Enviando e-mail...");
        console.log("Abrindo nova aba com o e-mail pré-preenchido...");

      // 5. Monta a URL final do Outlook Web App com os parâmetros dinâmicos
      const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=${destinatario}&subject=${assuntoCodificado}&body=${corpoCodificado}`;

      // 6. Dispara a abertura da nova aba com o e-mail pré-preenchido
      console.log("Abrindo URL: ", outlookUrl); // Útil para depuração
      window.open(outlookUrl, '_blank');
        // Simula um atraso para o envio
        setTimeout(() => {
          setIsSending(false);
          toast.success("Sua mensagem foi enviada com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({
        fullName: "",
        email: "",
        ddd: "",
        ramal: "",
        subject: "",
        message: "",
        files: [],
      });
      setErrors({});
      setValidated(false);
        }, 2000); // Simula um atraso de 2 segundos
    } else {
      setErrors(validationErrors);
      toast.error("Por favor, corrija os erros no formulário.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsSending(false);
    }
  };
  return (
    <>
      <section className="container p-5 mt-5 bg-white section-duvidas rounded-3">
        <h1 className="display-6 text-center p-3 text-uppercase">
          Preencha o formulário para contato via e-mail
        </h1>
        <div className="row">
          {/* */}
          <div className="col-md-6">
            <Link to="/vpn" className="text-decoration-none">
              <div className="link-content mt-3">
                <img src="/src/img/logo-ses.png" alt="image" className="mt-5" />
              </div>
            </Link>
          </div>
          {/* */}
          <div className="col-md-6">
            <div className="link-content">
              <h3 className="p-2 mt-2 display-6">
                Formulário de contato T.I SES
              </h3>
              <form
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                className={`mt-3 row g-3 needs-validation ${
                  validated ? "was-validated" : ""
                }`}
                noValidate
              >
                <div className="col-md-4">
                  <label htmlFor="fullName" className="form-label">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      validated && errors.fullName
                        ? "is-invalid"
                        : validated &&
                          !errors.fullName &&
                          formData.fullName.trim()
                        ? "is-valid"
                        : ""
                    }`}
                    id="fullName"
                    placeholder="Nome Completo"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  {validated && errors.fullName ? (
                    <div className="invalid-feedback">{errors.fullName}</div>
                  ) : (
                    validated &&
                    !errors.fullName &&
                    formData.fullName.trim() && (
                      <div className="valid-feedback">Parece bom!</div>
                    )
                  )}
                </div>
                <div className="col-md-4">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      validated && errors.email
                        ? "is-invalid"
                        : validated &&
                          !errors.email &&
                          formData.email.trim() &&
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                            formData.email
                          )
                        ? "is-valid"
                        : ""
                    }`}
                    id="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {validated && errors.email ? (
                    <div className="invalid-feedback">{errors.email}</div>
                  ) : (
                    validated &&
                    !errors.email &&
                    formData.email.trim() &&
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      formData.email
                    ) && <div className="valid-feedback">Parece bom!</div>
                  )}
                </div>
                <div className="col-md-4">
                  <label htmlFor="ramal" className="form-label">
                    Ramal
                  </label>
                  <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend2">
                      DDD
                    </span>
                    <input
                      type="tel"
                      className={`form-control ${
                        validated && errors.ddd
                          ? "is-invalid"
                          : validated &&
                            !errors.ddd &&
                            formData.ddd.trim() &&
                            /^\d{2}$/.test(formData.ddd)
                          ? "is-valid"
                          : ""
                      }`}
                      id="ddd"
                      placeholder="DDD"
                      value={formData.ddd}
                      onChange={handleChange}
                      aria-describedby="inputGroupPrepend2"
                      required
                      maxLength="2"
                    />
                    <input
                      type="tel"
                      className={`form-control ${
                        validated && errors.ramal
                          ? "is-invalid"
                          : validated &&
                            !errors.ramal &&
                            formData.ramal.trim() &&
                            /^\d{5}$/.test(formData.ramal)
                          ? "is-valid"
                          : ""
                      }`}
                      id="ramal"
                      placeholder="Ramal"
                      value={formData.ramal}
                      onChange={handleChange}
                      required
                      maxLength="5"
                    />
                    {validated && (errors.ddd || errors.ramal) ? (
                      <div className="invalid-feedback">
                        {errors.ddd || errors.ramal}
                      </div>
                    ) : (
                      validated &&
                      !errors.ddd &&
                      !errors.ramal &&
                      formData.ddd.trim() &&
                      /^\d{2}$/.test(formData.ddd) &&
                      formData.ramal.trim() &&
                      /^\d{5}$/.test(formData.ramal) && (
                        <div className="valid-feedback">Parece bom!</div>
                      )
                    )}
                  </div>
                </div>
                <div className="col-md-14">
                  <label htmlFor="subject" className="form-label">
                    Assunto do e-mail
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      validated && errors.subject
                        ? "is-invalid"
                        : validated &&
                          !errors.subject &&
                          formData.subject.trim()
                        ? "is-valid"
                        : ""
                    }`}
                    id="subject"
                    placeholder="Assunto"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  {validated && errors.subject ? (
                    <div className="invalid-feedback">{errors.subject}</div>
                  ) : (
                    validated &&
                    !errors.subject &&
                    formData.subject.trim() && (
                      <div className="valid-feedback">Parece bom!</div>
                    )
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Mensagem
                  </label>
                  <textarea
                    cols={3}
                    rows={9}
                    className={`form-control ${
                      validated && errors.message
                        ? "is-invalid"
                        : validated &&
                          !errors.message &&
                          formData.message.trim()
                        ? "is-valid"
                        : ""
                    }`}
                    id="message"
                    placeholder="Mensagem - descrição completa e detalhada do problema. Lembre-se de colocar a sua assinatura de e-mail simples."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {validated && errors.message ? (
                    <div className="invalid-feedback">{errors.message}</div>
                  ) : (
                    validated &&
                    !errors.message &&
                    formData.message.trim() && (
                      <div className="valid-feedback">Parece bom!</div>
                    )
                  )}
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={isSending}
                  >
                    {isSending ? "Enviando..." : "Enviar Formulário"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Container para as notificações Toastify */}
      <ToastContainer />
    </>
  );
};

export default Form_ATI_contact;
