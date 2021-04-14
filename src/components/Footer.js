import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <div className={styles.container}>
        <footer className={styles.footerContainer}>
          <ul className={styles.listContainer}>
            <li className={styles.listItems}>
              <a href="#Home">Home</a>
            </li>
            <li className={styles.listItems}>
              <a href="#Projects">Projects</a>
            </li>
            <li className={styles.listItems}>
              <a href="#About">About</a>
            </li>
          </ul>
        </footer>
        <span className={styles.copywrite}>@HDNonni.com</span>
      </div>
    </div>
  );
}

export default Footer;
