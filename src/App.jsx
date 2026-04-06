import React from "react";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A real-time sales tracker built with React and Chart.js.",
    tech: ["React", "Vite", "Tailwind"],
    link: "#",
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "Interface for generating art using OpenAI's DALL-E API.",
    tech: ["React", "Node.js", "API"],
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "The very site you are looking at right now!",
    tech: ["React", "GitHub Pages"],
    link: "#",
  },
];

function App() {
  return (
    <div className="container">
      <nav className="nav">
        <div className="logo">Altyn Charyyeva</div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="https://github.com/AltynCharyyeva">GitHub</a>
          <a href="./CharyyevaAltyn.pdf" target="_blank" rel="noreferrer">
            CV (PDF)
          </a>
        </div>
      </nav>

      <header className="hero">
        <h1 className="title">
          Computer Science Student | Future Computer Engineer
        </h1>
        <p className="subtitle">
          I build performant web applications, focusing more on backend and
          database.
        </p>
        <button
          className="btn-primary"
          onClick={() => (window.location.href = "#projects")}
        >
          View My Work
        </button>
      </header>

      <section id="projects" className="section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <h3>{project.title}</h3>
              <p className="card-text">{project.description}</p>
              <div className="tag-container">
                {project.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                Live Demo →
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Built with React & Vite. Hosted on GitHub Pages.</p>
      </footer>
    </div>
  );
}

export default App;
