import Card from "../../ui/Card/Card";
import InnerCard from "../../ui/InnerCard/InnerCard";
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
            <a href="https://musical-sable-320463.netlify.app/" target="_blank">
              <div className={styles.project1} />
            </a>
            <span>
              <h2>대한민국 구석구석 리워크</h2>
            </span>
            <ul>
              <li>
                <h3>5인 팀프로젝트로 진행</h3>
              </li>
              <li>
                <h3>
                  맡은 파트 - 메인/테마여행, 패키지&테마, 가볼래터, 여행지도
                </h3>
              </li>
              <li>
                <h3>순수 HTML, CSS, Javascript로 제작</h3>
              </li>
              <li>
                <h3>JQuery로 애니메이션 구현</h3>
              </li>
              <li>
                <h3>
                  <a href="https://github.com/hoxey2/Team4_Project" target="_blank">
                    Github 링크
                    <img src="image/tech/github.png" />
                  </a>
                </h3>
              </li>
            </ul>
          </div>
        </InnerCard>
        <InnerCard>
          <div className={styles.innerCard_content}>
            <a href="https://vowkr.netlify.app/" target="_blank">
              <div className={styles.project2} />
            </a>
            <span>
              <h2>롤 전적사이트 Vow.kr</h2>
            </span>
            <ul>
              <li>
                <h3>Vue.js를 이용한 SPA 사이트</h3>
              </li>
              <li>
                <h3>반응형 웹 앱 ( 모바일,pc )</h3>
              </li>
              <li>
                <h3>Riot API로 데이터 불러옴</h3>
              </li>
              <li>
                <h3>Vuex, Vue-router, Vuetify</h3>
              </li>
              <li>
                <h3>
                  <a href="https://github.com/hoxey2/VOW.KR" target="_blank">
                    Github 링크
                    <img src="image/tech/github.png" />
                  </a>
                </h3>
              </li>
            </ul>
          </div>
        </InnerCard>
        <InnerCard>
          <div className={styles.innerCard_content}>
            <a href="https://doge-37221.web.app/" target="_blank">
              <div className={styles.project3} />
            </a>
            <span>
              <h2>나의 개발일지 DOG</h2>
            </span>
            <ul>
              <li>
                <h3>React.js를 이용한 SPA 사이트</h3>
              </li>
              <li>
                <h3>Redux(react-redux), React-router, Ant Design</h3>
              </li>
              <li>
                <h3>Firebase를 통한 DB, 배포</h3>
              </li>
              <li>
                <h3>
                  <a href="https://github.com/hoxey2/DOG" target="_blank">
                    Github 링크
                    <img src="image/tech/github.png" />
                  </a>
                </h3>
              </li>
            </ul>
          </div>
        </InnerCard>
        <InnerCard>
          <div className={styles.innerCard_content}>
            <a href="https://temp-home-away-vert.vercel.app/" target="_blank">
              <div className={styles.project4} />
            </a>
            <span>
              <h2>Airbnb 클론코딩</h2>
            </span>
            <ul>
              <li>
                <h3>Airbnb 서비스 클론코딩 사이트</h3>
              </li>
              <li>
                <h3>Next.js 14(Dev)/ Zod(State)/ Clerk(Auth)/ Prisma, Supabase(Database), Tailwind, Shadcn-ui(UI), Typescript, Vercel(Deploy)</h3>
              </li>
              <li>
                <h3>무료 라이브러리를 활용한 빠른 개발</h3>
              </li>
              <li>
                <h3>현재 로그인시 Vercel에서 오류 발생(해결예정)</h3>
              </li>
              <li>
                <h3>
                  <a href="https://github.com/hoxey2Front/temp-home-away" target="_blank">
                    Github 링크
                    <img src="image/tech/github.png" />
                  </a>
                </h3>
              </li>
            </ul>
          </div>
        </InnerCard>
      </section>
    </Card>
  );
};
export default MyProjects;
