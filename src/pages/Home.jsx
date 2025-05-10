import { useEffect } from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  useEffect(() => {
    const targetId = localStorage.getItem('scrollTo');
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      localStorage.removeItem('scrollTo');
    }
  }, []);

  return (
    <div className="home-container">
      <div className="foreground-layer">
        <Header />
        <Projects id="projetos" />
        <About id="sobre" />
        <Contact id="contato" />
      </div>
    </div>
  );
}
