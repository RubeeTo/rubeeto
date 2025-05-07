import '../styles/Projects.css';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <section className="projects-container" id="projects">
      <div className="projects-content">
        <div className="projects-header">
          <h1 className="projects-title titulo2">Projetos</h1>
        </div>

        <div className="project-thumbs">
          <div className="thumb placeholder" />
          <div className="thumb placeholder" />
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
            <button className=""></button>
          </div>
          <div className="project-card">
            <div className="card-shape" />
            <p className="card-text titulo3">React no more</p>
            <button className=""></button>
          </div>
          <div className="project-card">
            <div className="card-shape" />
            <p className="card-text titulo3">Apps</p>
            <button className=""></button>
          </div>
        </div>
      </div>
    </section>
  );
}