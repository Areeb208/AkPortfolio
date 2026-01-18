import styles from "./index.module.css";

const education = [
  {
    title: "Intermediate in Computer Science",
    institute: "Board Of Intermediate Education Karachi",
    duration: "2024 — Present",
  },
  {
    title: "Matric in Computer Science",
    institute: "Board Of Secondary Education Karachi",
    duration: "2022 — 2024",
  },
];

const Education = () => {
  return (
    <section className={styles.section} id="education">
      <div className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        <p className={styles.subtitle}>
          My academic background in computer science.
        </p>

        <div className={styles.timeline}>
          {education.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p className={styles.institute}>{item.institute}</p>
                <span className={styles.duration}>{item.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
