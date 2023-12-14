import Card from "../../UI/Card/Card";
import styles from "./style.module.css";
const AboutMe = () => {
  return (
    <Card>
      <section id="about_me">
        <div className="index_wrap">
          <div className="index">
            <h2>#About me</h2>
          </div>
        </div>
        <div className={styles.about_me}>
          <div className={styles.profile_box}>
            <div className={styles.profile} />
            <h1>Jang Han Ok</h1>
          </div>
          <div className={styles.iam}>
            <h2>Frontend Developer</h2>
            <div className={styles.myself}>
              <ul>
                <li>
                  <h3>안녕하세요! 꾸준히 성장하는 개발자 장한옥입니다.</h3>
                </li>
                <li>
                  <h3>
                    한 번 시작한 일은 끝까지 완수하려고 최선을 다하려고 합니다.
                  </h3>
                </li>
                <li>
                  <h3>새로운 기술에 거부감이 없고 적극성을 갖고 참여합니다.</h3>
                </li>
                <li>
                  <h3>
                    단 한 줄의 코드라도 의미있고 가치있게 담으려고 노력합니다.
                  </h3>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.link}>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/hoxey2"
                  rel="noreferrer"
                >
                  <img src="/img/icon_github_w.png" />
                  <span>github</span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://front-hoxey2.tistory.com/"
                  rel="noreferrer"
                >
                  <img src="/img/icon_blog_w.png" />
                  <span>blog</span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="mailto:hoxey2@gmail.com"
                  rel="noreferrer"
                >
                  <img src="/img/icon_mail_w.png" />
                  <span>mail</span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://hoxey2023.notion.site/81ba77b11ece44c8b17f20ed5098b4e7?pvs=4"
                  rel="noreferrer"
                >
                  <img src="/img/icon_resume_w.png" />
                  <span>resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Card>
  );
};
export default AboutMe;
