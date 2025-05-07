import '../styles/ProjetcsPage.css';
import { useParams } from 'react-router-dom';
import projetos from '../data/projetcs.json';

export default function ProjectPage() {
  const { slug } = useParams();
  const projeto = projetos[slug];

  if (!projeto) return <p className='titulo'>Projeto não encontrado.</p>;

  return (
    <div className="project-container">
      <div className="project-main">

 
        <div className="project-title-area">
          <h1 className='titulo'>{projeto.nome}</h1>
          {projeto.repositorio && (
            <a href={projeto.repositorio} target="_blank" rel="noopener noreferrer" className="github-icon" title="Ver código no GitHub">
              
            </a>
          )}
        </div>


        {projeto.imagemReferencia && (
          <div className="project-ref-image">
            <img src={projeto.imagemReferencia} alt=""/>
          </div>
        )}

        <div className="project-description-area">
          <p className="project-description texto">{projeto.descricao}</p>
        </div>

        <div className="project-techs">
          {projeto.tecnologias.map((tech, i) => (
            <div key={i} className="tech-item">
              <img src={`/icons/${tech}.svg`} alt={tech} title={tech} />
            </div>
          ))}
        </div>


        <div className="project-participation">
          <p className="texto">{projeto.participacao}</p>
        </div>


        <div className="project-gallery">
        <h3 className="project-gallery-title">Screenshots</h3>
          {projeto.imagens.map((img, i) => (
            <img key={i} src={img} alt={`screenshot-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

