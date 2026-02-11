import { NavBar } from "@/components/NavBar";

const skillSet = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB"
];

const specialties = [
  {
    title: "Frontend Engineering",
    text: "Crafting responsive, accessible interfaces with React.js and Next.js that feel fast and premium."
  },
  {
    title: "Backend Development",
    text: "Designing robust APIs with Node.js and Express.js, with clean architecture and scalable patterns."
  },
  {
    title: "Database & Data Flow",
    text: "Building performant data models and integrations with MongoDB and modern JS tooling."
  },
  {
    title: "Product Mindset",
    text: "I blend engineering quality with business outcomes—performance, UX, and impact all matter."
  }
];

const projects = [
  {
    title: "LaunchPad Commerce",
    result:
      "A fast, conversion-focused e-commerce platform with dynamic catalogs and optimized checkout UX."
  },
  {
    title: "TeamFlow Ops Suite",
    result:
      "An internal operations dashboard that centralized workflows, cutting repetitive manual tasks dramatically."
  },
  {
    title: "InsightPulse Analytics",
    result:
      "A real-time analytics workspace with role-aware insights and visual reporting for better product decisions."
  }
];

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main id="home">
        <section className="hero section-animate">
          <div className="container hero-content">
            <div>
              <p className="kicker">Full Stack Developer • React & Next.js Specialist</p>
              <h1>
                I’m <span>Yamen Barakat</span>,
                <br />
                I build web products that stand out.
              </h1>
              <p className="hero-text">
                I turn ideas into high-performance digital experiences using modern
                web technologies. My focus is building products that are visually
                impressive, technically strong, and truly useful for users.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  See My Work
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Let&apos;s Collaborate
                </a>
              </div>
            </div>
            <div className="hero-card floating">
              <h2>Core Stack</h2>
              <ul>
                {skillSet.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section container section-animate">
          <h2>About Me</h2>
          <p>
            I am a full stack developer with strong expertise in modern JavaScript
            ecosystems. I work across frontend and backend to deliver polished,
            scalable, and reliable applications. I enjoy solving complex problems,
            designing intuitive UX, and shipping products that help businesses grow.
          </p>
        </section>

        <section id="skills" className="section section-alt section-animate">
          <div className="container">
            <h2>What I Bring</h2>
            <div className="skills-grid">
              {specialties.map((item) => (
                <article className="skill-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section container section-animate">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.result}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section section-alt section-animate">
          <div className="container contact">
            <h2>Let&apos;s Build Something Exceptional</h2>
            <p>
              I&apos;m open to full-time opportunities, freelance projects, and
              ambitious startup ideas.
            </p>
            <div className="contact-links">
              <a href="mailto:yamen.barakat@example.com">yamen.barakat@example.com</a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Yamen Barakat — Full Stack Developer.</p>
        </div>
      </footer>
    </>
  );
}
