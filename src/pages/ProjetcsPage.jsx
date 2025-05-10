import '../styles/ProjetcsPage.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import projetos from '../data/projetcs.json';

export default function ProjectPage() {
  const { slug } = useParams();
  const projeto = projetos[slug];
  const [imagemAmpliada, setImagemAmpliada] = useState(null);

  if (!projeto) return <p className='titulo2'>Projeto não encontrado.</p>;

  return (
    <div className="project-container">
      <div className="project-main">

        <div className="project-title-area">
          <h1 className='titulo'>{projeto.nome}</h1>
          {projeto.repositorio && (
            <a href={projeto.repositorio} target="_blank" rel="noopener noreferrer" className="github-icon" title="Ver código no GitHub">
              github
            </a>
          )}
        </div>

        {projeto.imagemReferencia && (
          <div className="project-ref-image">
            <img src={`${process.env.PUBLIC_URL}${projeto.imagemReferencia}`} alt="" />
          </div>
        )}

        <div className="project-description-area">
          <p className="project-description texto">{projeto.descricao}</p>
        </div>
        <h3 className="project-techs-title titulo">Tecnologias</h3>
        <div className="project-techs">       
          {projeto.tecnologias.map((tech, i) => (           
            <div key={i} className="tech-item">
              <img src={`${process.env.PUBLIC_URL}/tecnologies/${tech}.svg`} alt={tech} />
            </div>
          ))}
        </div>

        <div className="project-participation">
          <p className="texto">{projeto.participacao}</p>
        </div>

        <div className="project-gallery">
          <h3 className="project-gallery-title titulo">Screenshots</h3>
          {projeto.imagens.map((img, i) => (
            <img
              key={i}
              src={`${process.env.PUBLIC_URL}${img}`}
              alt={`screenshot-${i}`}
              onClick={() => setImagemAmpliada(img)}
              className="clickable"
            />
          ))}
        </div>
      </div>

      {imagemAmpliada && (
        <div className="image-modal" onClick={() => setImagemAmpliada(null)}>
          <img src={`${process.env.PUBLIC_URL}${imagemAmpliada}`} alt="ampliada" />
        </div>
      )}
    </div>
  );
}


