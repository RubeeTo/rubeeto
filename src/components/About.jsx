import '../styles/About.css';

export default function About() {
  return (
    <main className="about-container" id="about">
      <div className="about-content">

        <div className="about-header">
          <div className="about-image">         
          </div>
            <h1 className="about-name titulo2">Rubens Torregrossa da Silva</h1>
          </div>
        <div>

        <div className="about-title titulo"><strong>Experiência Profissional</strong></div>
        <div className="job-content">
          <div className="job-01"> 
            <h2 className="job-company titulo3">Fatec Itaquera</h2>
            <p className="job-date texto">Nov. 2023 - Ago. 2024</p>
            <p className="job-title texto"><strong>Função: </strong>Estagiário Front-end </p>
            <p className="job-description texto"><strong>Atribuições:</strong> Desenvolvimento do projeto de reconstrução do site da instituição. Desenvolvimento de interfaces aplicados com UI/UX, gerenciamento de Banco de dados, servidores e hospedagem.</p>
          </div>
          <div className="job-02">
            <h2 className="job-company titulo3">AJWebsites</h2>
            <p className="job-date texto" >Nov. 2016 - Atualmente </p>
            <p className="job-title texto"><strong>Função: </strong>Desenvolvedor Front-End</p>
            <p className="job-description texto"><strong>Atribuições:</strong> Desenvolvimento de interfaces aplicados com UI/UX, criação e implementação de sites, manutenção de códigos, assistência especializada a clientes, produção e criação de material de comunicação visual interno e externo.</p>         
          </div>       
        </div>
        <div className="about-title titulo"><strong>Formação Acadêmica</strong></div>
        <div className="graduate-content ">
          <h2 className="graduate-title titulo3">Fatec Itaquera – Miguel Reale</h2>
          <p className="graduate-degree texto"><strong>Grau de Formação: </strong>Superior</p>
          <p className="graduate-date texto"><strong>Duração: </strong>Ago. 2022 - Dez. 2025</p>
          <p className="graduate-course texto"><strong>Curso: </strong>Desenvolvimento de Software Multimídia</p>
        </div>
        <div className="languages">
          <h2 className="languages-title titulo3">Idiomas</h2>
          <p className="languages-degree texto">Inglês intermediário</p>
        </div> 

      <div className="couses">
        
      </div>
        
          
                
        </div>
      </div>
    </main>
  );
}
