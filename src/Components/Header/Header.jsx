import styles from "./style.module.scss";
import { useState } from "react";
const Header = () => {
  const [hamburgerOn, setHamburger] = useState(false);
  const dropdownStyle = {
    visibility: hamburgerOn ? "visible" : "hidden",
    opacity: hamburgerOn ? "1" : "0",
    height: hamburgerOn ? "22.2rem" : "0",
  };
  const backgroundStyle = {
    backgroundImage: hamburgerOn
      ? 'url("img/icon_x.png")'
      : 'url("img/hamburger.png")',
    backgroundSize: hamburgerOn ? "35%" : "50%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <header>
      <div className={styles.header_inner}>
        <a href="#">
          <h1 className={styles.logo}>Hoxey2 portfolio</h1>
        </a>
        <div className={styles.navbar}>
          <ol>
            <li>
              <a href="#about_me">
                <h2>About Me</h2>
              </a>
            </li>
            <li>
              <a href="#skills">
                <h2>Skills</h2>
              </a>
            </li>
            <li>
              <a href="#my_projects">
                <h2>My Projects</h2>
              </a>
            </li>
          </ol>
        </div>
        <div
          className={styles.hamburger}
          style={backgroundStyle}
          onClick={() => {
            setHamburger(!hamburgerOn);
          }}
        />
        <div className={styles.dropdown_menu} style={dropdownStyle}>
          <ul>
            <li>
              <a href="#about_me">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#my_projects">My Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
