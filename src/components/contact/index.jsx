import styles from "./index.module.css";

const Contact = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.text}>
          I’m open to internships, junior roles, or opportunities to collaborate
          on frontend projects. Feel free to reach out!
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=areebk20012@gmail.com"
          className={styles.emailLink}
          target="_blank"
        >
          areebk20012@gmail.com
        </a>

        <p className={styles.info}>
          Based in Karachi, Pakistan | available for remote work.
        </p>

        <p className={styles.note}>I typically reply within a day </p>
      </div>
    </section>
  );
};

export default Contact;
