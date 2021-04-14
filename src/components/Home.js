import React from "react";
import styles from "./Home.module.css";
import crochetBowl2 from "../assets/images/crochet-bowl2-blur.jpg";

function HomePage() {
  return (
    <div>
      
      <h1 className={styles.homeTitle} id = "Home">
        Welcome to <span className={styles.spanTitle}> @ Knock On It!</span>
      </h1>
      <div className={styles.container}>
        <div
          className={styles.imageContainer}
          style={{
            backgroundColor:"#303030",
            backgroundImage: `url(${crochetBowl2})`,
            backgroundBlendMode:"soft-light",
            backgroundPosition: "center top",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <h2 className={styles.homeBlurb}>
            Where your ideas are custom built{" "}
          </h2>
          <h3 className={styles.specialize}>
            {" "}
            Specializing in transforming a designers' concept into a beautiful
            piece of furniture.
          </h3>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
