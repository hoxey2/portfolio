import Card from "../../UI/Card/Card";
import styles from "./style.module.scss";

const Skills = () => {
  let imgSrc = {
    html: "tech/html.png",
    css: "tech/css.png",
    js: "tech/javascript.png",
    ant: "tech/ant.png",
    sass: "tech/sass.png",
    styleComponent: "tech/style_component.png",
    tailwind: "tech/tailwind.png",
    react: "tech/react.png",
    reactQuery: "tech/react_query.png",
    redux: "tech/redux.png",
    recoil: "tech/recoil.png",
    reduxSaga: "tech/redux_saga.png",
    vue: "tech/vue.png",
    vuex: "tech/vuex.png",
    vuetify: "tech/vuetify.png",
    github: "tech/github.png",
    firebase: "tech/firebase.png",
    jquery: "tech/jquery.png",
    nextjs: "tech/nextjs.png",
    awsS3: "tech/awsS3.png",
  };
  return (
    <Card>
      <section id="skills">
        <div className="index_wrap">
          <div className="index">
            <h2>#Skills</h2>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.basic_group}>
            <div className={styles.title}>
              <span>B</span>
              <span>A</span>
              <span>S</span>
              <span>I</span>
              <span>C</span>
            </div>
            <div className={styles.icon_group}>
              <div>
                <img src={imgSrc.html} />
              </div>
              <div>
                <img src={imgSrc.css} />
              </div>
              <div>
                <img src={imgSrc.js} />
              </div>
            </div>
          </div>
          <div className={styles.basic_group}>
            <div className={styles.title}>
              <span>C</span>
              <span>S</span>
              <span>S</span>
            </div>
            <div className={styles.icon_group}>
              <div>
                <img src={imgSrc.sass} alt="sass" />
              </div>
              <div>
                <img src={imgSrc.styleComponent} alt="style_component" />
              </div>
              <div>
                <img src={imgSrc.tailwind} alt="tailwind" />
              </div>
              <div>
                <img src={imgSrc.ant} alt="ant design" />
              </div>
            </div>
          </div>
          <div className={styles.basic_group}>
            <div className={styles.title}>
              <span>R</span>
              <span>E</span>
              <span>A</span>
              <span>C</span>
              <span>T</span>
            </div>
            <div className={styles.icon_group}>
              <div>
                <img src={imgSrc.react} alt="react" />
              </div>
              <div>
                <img src={imgSrc.redux} alt="redux" />
              </div>
              <div>
                <img src={imgSrc.recoil} alt="recoil" />
              </div>

              <div>
                <img src={imgSrc.reactQuery} alt="react-query" />
              </div>
              <div>
                <img src={imgSrc.reduxSaga} alt="redux-saga" />
              </div>
            </div>
          </div>
          <div className={styles.basic_group}>
            <div className={styles.title}>
              <span>V</span>
              <span>U</span>
              <span>E</span>
            </div>
            <div className={styles.icon_group}>
              <div>
                <img src={imgSrc.vue} alt="vue" />
              </div>
              <div>
                <img src={imgSrc.vuex} alt="vuex" />
              </div>
              <div>
                <img src={imgSrc.vuetify} alt="vuetify" />
              </div>
            </div>
          </div>
          <div className={styles.basic_group}>
            <div className={styles.title}>
              <span>E</span>
              <span>T</span>
              <span>C</span>
            </div>
            <div className={styles.icon_group}>
              <div>
                <img src={imgSrc.nextjs} alt="nextjs" />
              </div>
              <div>
                <img src={imgSrc.github} alt="github" />
              </div>
              <div>
                <img src={imgSrc.jquery} alt="jquery" />
              </div>
              <div>
                <img src={imgSrc.firebase} alt="firebase" />
              </div>
              <div>
                <img src={imgSrc.awsS3} alt="awsS3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Card>
  );
};
export default Skills;
