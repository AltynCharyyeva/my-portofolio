import React from "react";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "Energy Management System (Part 1)",
    description:
      "A Containerized Microservices Architecture for measuring and monitoring the energy consumption of different devices of users.",
    tech: ["Spring Boot", "React", "Docker"],
    link: "https://github.com/AltynCharyyeva/microservices-basics-rest-docker",
  },
  {
    id: 2,
    title: "Energy Management System (Part 2)",
    description:
      "An event-driven architecture using RabbitMQ as a message broker and Traefik as load balancer and reverse proxy.",
    tech: ["Spring Boot", "React", "Docker", "RabbitMQ", "Traefik"],
    link: "https://github.com/AltynCharyyeva/microservices-event-driven-rabbitmq",
  },
  {
    id: 3,
    title: "E-Ticket App",
    description:
      "The E-Ticket App provides users with a convenient platform to manage and access electronic tickets for various events and activities.",
    tech: ["Django", "HTML & CSS", "JavaScript"],
    link: "https://github.com/AltynCharyyeva/E-TicketApp",
  },
  {
    id: 4,
    title: "E-Learning App",
    description:
      "The E-Learning App is a robust platform for delivering educational content online, facilitating seamless learning experiences for students and instructors.",
    tech: ["Spring Boot", "React", "MySQL", "RESTful API"],
    link: "https://github.com/AltynCharyyeva/E-LearningApp",
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
          Computer Science Student & Future Computer Engineer
        </h1>
        <p className="subtitle">
          I build web applications, focusing more on backend and database
          design.
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
                Link to GitHub →
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
