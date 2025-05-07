import '../styles/Home.css';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="home-container">
          <div className="foreground-layer">
            <Header />
            <Projects />
            <About />
            <Contact />
          </div>
    </div>
  );
}