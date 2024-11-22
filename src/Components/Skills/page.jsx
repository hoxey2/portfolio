import Card from "../../ui/Card/Card";
import innerCard from "../../ui/InnerCard/InnerCard";
import styles from "./style.module.scss";

const Skills = () => {
  let devTech = {
    basic: {
      name: "basic",
      tech: {
        html: "html",
        css: "css",
        javascript: "javascript",
      },
    },
    css: {
      name: "css",
      tech: {
        sass: "sass",
        styleComponent: "styleComponent",
        tailwind: "tailwind",
        antDesign: "antDesign",
      },
    },
    react: {
      name: "react",
      tech: {
        react: "react",
        redux: "redux",
        mobx: "mobx",
        reactQuery: "reactQuery",
        reduxSaga: "reduxSaga",
      },
    },
    vue: {
      name: "vue",
      tech: {
        vue: "vue",
        vuex: "vuex",
        vuetify: "vuetify",
      },
    },
    study: {
      name: "study",
      tech: {
        nextjs: "nextjs",
        github: "github",
        jquery: "jquery",
        firebase: "firebase",
        awsS3: "awsS3",
      },
    },
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
          {Object.keys(devTech).map((mainKey) => (
            <div key={mainKey} className={styles.basic_group}>
              <div className={styles.title}>
                <span>{devTech[mainKey].name.toUpperCase()}</span>
              </div>
              <div className={styles.icon_group}>
                {Object.keys(devTech[mainKey].tech).map((secKey) => (
                  <div key={secKey}>
                    <span>{devTech[mainKey].tech[secKey]}</span>
                    <img
                      src={`image/tech/${devTech[mainKey].tech[secKey]}.png`}
                      alt={devTech[mainKey].tech[secKey]}
                    ></img>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Card>
  );
};
export default Skills;
