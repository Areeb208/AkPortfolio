import style from "./index.module.css";
import AreebImage from "../../assets/images/Areeb.png";
import HtmlIcon from "../../assets/icons/html.svg?react";
import CssIcon from "../../assets/icons/css.svg?react";
import JsIcon from "../../assets/icons/js.svg?react";
import ReactIcon from "../../assets/icons/react.svg?react";
import GithubIcon from "../../assets/icons/github.svg?react";
import LinkedinIcon from "../../assets/icons/linked.svg?react";

const location = "Pakistan / Karachi";
const age = "18";

const skills = [
  { name: "HTML", Icon: HtmlIcon },
  { name: "CSS", Icon: CssIcon },
  { name: "JavaScript", Icon: JsIcon },
  { name: "React", Icon: ReactIcon },
  { name: "GitHub", Icon: GithubIcon },
];

const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.name}>M. Areeb Khan</h1>

        <p className={style.role}>
          Learning and building as a{" "}
          <span className={style.highlight}>Frontend Web Developer</span>
        </p>

        <p className={style.details}>
          Location: <span>{location}</span>
        </p>

        <p className={style.details}>
          Age: <span>{age}</span>
        </p>

        <h3 className={style.skillTitle}>Skills</h3>

        <div className={style.skillGrid}>
          {skills.map((skill) => {
            const IconComponent = skill.Icon;
            return (
              <div key={skill.name} className={style.skillCard}>
                <IconComponent className={style.icon} />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={style.imageWrapper}>
        <div className={style.circleImage}>
          <img
            src={AreebImage}
            alt="M. Areeb Khan"
            className={style.profilePic}
            draggable={false}
          />
        </div>

        <div className={style.socials}>
          <a
            href="https://github.com/Areeb208"
            target="_blank"
            rel="noreferrer"
            className={style.socialIcon}
          >
            <GithubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/areeb-khan0/"
            target="_blank"
            rel="noreferrer"
            className={style.socialIcon}
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
