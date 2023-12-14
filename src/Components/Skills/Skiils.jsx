import Card from "../../UI/Card/Card";
import styles from "./style.module.css";

const Skills = () => {
  return (
    <Card>
      <section id="skills">
        <div className="index_wrap">
          <div className="index">
            <h2>#Skills</h2>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.profile}></div>
          <div className={`${styles.bg_icon} ${styles.html}`}></div>
          <div className={`${styles.bg_icon} ${styles.css}`}></div>
          <div className={`${styles.bg_icon} ${styles.javascript}`}></div>
          <div className={styles.sm_icon}></div>
        </div>
      </section>
    </Card>
  );
};
export default Skills;
