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
          <div className={styles.html_group}>
            <div className={`${styles.html} ${styles.big_icon}`}></div>
            <div className={styles.md_icon}></div>
          </div>
          <div className={styles.css_group}>
            <div className={`${styles.css} ${styles.big_icon}`}></div>
          </div>
          <div className={styles.js_group}>
            <div className={`${styles.js} ${styles.big_icon}`}></div>
          </div>
        </div>
      </section>
    </Card>
  );
};
export default Skills;
