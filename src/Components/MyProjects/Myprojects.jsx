import Card from "../../UI/Card/Card";
import InnerCard from "../../UI/InnerCard/InnerCard";
import styles from "./style.module.scss";

const MyProjects = () => {
  return (
    <Card>
      <section id="my_projects">
        <div className="index_wrap">
          <div className="index">
            <h2>#My Projects</h2>
          </div>
        </div>
        <InnerCard>
          <div className={styles.innerCard_content}>
            <a href="https://musical-sable-320463.netlify.app/">
              <div className={styles.project1} />
            </a>
            <span>
              <h2>대한민국 구석구석 리워크</h2>
            </span>
            <h3>
              <ul>
                <li>5인 팀프로젝트로 진행</li>
                <li>
                  맡은 파트 - 메인/테마여행, 패키지&테마, 가볼래터, 여행지도
                </li>
                <li>순수 HTML, CSS, Javascript로 제작</li>
                <li>JQuery로 애니메이션 구현</li>
                <li>
                  <a href="https://github.com/hoxey2/Team4_Project">
                    Github 링크
                    <img src="tech/github.png" />
                  </a>
                </li>
              </ul>
            </h3>
          </div>
        </InnerCard>
        <InnerCard>
          <div className={styles.innerCard_content}>
            <a href="https://vowkr.netlify.app/">
              <div className={styles.project2} />
            </a>
            <span>
              <h2>롤 전적사이트 Vow.kr</h2>
            </span>
            <h3>
              <ul>
                <li>Vue.js를 이용한 SPA 사이트</li>
                <li>반응형 웹 앱 ( 모바일,pc )</li>
                <li>Riot API로 데이터 불러옴</li>
                <li>Vuex, Vue-router, Vuetify</li>
                <li>
                  <a href="https://github.com/hoxey2/VOW.KR">
                    Github 링크
                    <img src="tech/github.png" />
                  </a>
                </li>
              </ul>
            </h3>
          </div>
        </InnerCard>
        <InnerCard>
          <div className={styles.innerCard_content}>
            <a href="https://doge-37221.web.app/">
              <div className={styles.project3} />
            </a>
            <span>
              <h2>나의 개발일지 DOG</h2>
            </span>
            <h3>
              <ul>
                <li>React.js를 이용한 SPA 사이트</li>
                <li>Redux(react-redux), React-router, Ant Design</li>
                <li>Firebase를 통한 DB, 배포</li>
                <li>
                  <a href="https://github.com/hoxey2/DOG">
                    Github 링크
                    <img src="tech/github.png" />
                  </a>
                </li>
              </ul>
            </h3>
          </div>
        </InnerCard>
      </section>
    </Card>
  );
};
export default MyProjects;
