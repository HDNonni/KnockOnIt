import React from "react";
import styles from "./NavBar.module.css";
import woodgrainBackground from "../assets/images/woodgrain.jpg";
import logo from "../assets/images/logo.jpg";

function NavBar() {
  return (
    <div>
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${woodgrainBackground})` }}
      >
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h2 className={styles.navHeading}>
              <img src={logo} alt="logo"></img>Knock On It
            </h2>
            <p className={styles.titleBlurb}>
              Custom Woodworking by Nelson Waters IV
            </p>
          </div>
          <nav className={styles.navContainer}>
            <ul className={styles.listContainer}>
              <li className={styles.listItems}>Home</li>
              <li className={styles.listItems}>Projects</li>
              <li className={styles.listItems}>About</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
export default NavBar;
