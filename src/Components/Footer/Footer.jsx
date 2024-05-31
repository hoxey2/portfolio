import React, { useState } from "react";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.content}>
        <h2>
          <span>Thanks for watching !</span>
        </h2>
        <h2>
          ⓒ 2024 dev from
          <span>&nbsp; hoxye2 </span>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
