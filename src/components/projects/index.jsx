import styles from "./index.module.css";

import avocadoImg from "../../assets/proj-img/Avacado.png";
import electromartImg from "../../assets/proj-img/Electro.PNG";
import shadowlineImg from "../../assets/proj-img/ShadowLine.PNG";

const projects = [
  {
    title: "ShadowLine",
    image: shadowlineImg,
    description: "A modern landing page for a clothing brand.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Areeb208/ShadowLineWeb",
    live: "https://shadowlinedemo.netlify.app/",
  },

  {
    title: "ElectroMart",
    image: electromartImg,
    description: "A simple and clean e-commerce website template.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Areeb208/ElectroMartWeb",
    live: "https://electromartdemo.netlify.app/",
  },

  {
    title: "Avocado",
    image: avocadoImg,
    description: "My first frontend project replicating the Apple website.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Areeb208/AvacadoWeb",
    live: "https://avacadodemo.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.subtitle}>
          A few things I’ve built while learning and improving.
        </p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  draggable="false"
                />
              </div>

              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className={styles.tech}>
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
