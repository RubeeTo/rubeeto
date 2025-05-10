import '../styles/Projects.css';
import { Link } from 'react-router-dom';

export default function Projects({ id }) {
  return (
    <section id={id} className="projects-container">
      <div className="projects-content">
        <div className="projects-header">
          <h1 className="projects-title titulo2">Projetos</h1>
        </div>

        {/* <div className="project-thumbs">
          <div className="thumb placeholder" />
          <div className="thumb placeholder" />
        </div> */}


        <div className="project-thumbs">
          <div className="thumb-placeholder site-1">  
            <a href="https://www.petitkidsculturalcenter.com.br/" className="texto" target="_blank" rel="noopener noreferrer">Petit Kids</a>
          </div>   
          <div className="thumb-placeholder site-2"> 
            <a href="https://www.anuncienaweb.com.br/" className="texto" target="_blank" rel="noopener noreferrer">Anuncie na Web</a>        
          </div>
        </div>

        <div className="project-group">
          <h2 className="titulo3">Fatec</h2>
          <div className="project-card">
            <div className="card-shape" />
            <p className="card-text titulo3">Eventão</p>
            <Link to="/projetcs/eventao"><button className="texto"></button></Link>
          </div>
          <div className="project-card">
            <div className="card-shape" />
            <p className="card-text titulo3">Loja de Brinquedos</p>
            <Link to="/projetcs/gattai"><button className="texto"></button></Link>
          </div>
          <div className="project-card">
            <div className="card-shape" />
            <p className="card-text titulo3">React no more</p>
            <Link to="/projetcs/react_no_more"><button className="texto"></button></Link>
          </div>
          {/* <div className="project-card">
            <div className="card-shape" />
            <p className="card-text titulo3">Apps</p>
            <button className=""></button>
          </div> */}
        </div>
      </div>
    </section>
  );
}