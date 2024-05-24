import React, { useState } from "react";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.content}>
        <h2>
          ⓒ&nbsp;2024 dev from
          <span style={{ color: "#551a8b" }}>&nbsp;&nbsp;hoxye2 </span>
        </h2>
        <h2 className={styles.twinkle}>Thanks for watching !</h2>
        <h2 style={{ color: "#551a8b" }}>☎&nbsp; 010&nbsp; 3289&nbsp; 3377</h2>
      </div>
    </footer>
  );
};

export default Footer;
