import '../styles/Contact.css';

export default function Contact() {
  return (
    <main className="contact-container" id="contact">
      <div className="contact-content">

        <h1 className="contact-title titulo">Contato</h1>
    
        <div className="contact-form">
        <form className="pixel-form">
          <div className="input-wrapper">
            <input type="text" placeholder="Seu nome" />
          </div>

          <div className="input-wrapper">
            <input type="email" placeholder="Seu email" />
          </div>

          <div className="input-wrapper textarea">
            <textarea placeholder="Sua mensagem" rows={4}></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>
        </div>

      </div>
    </main>
  );
}
