import React from "react";
import styles from "./About.module.css";
import watermark from "../assets/images/logo_watermark.jpg";
import pinewood from "../assets/images/pinewoodDerby-scaled.jpg";
import sawImage from "../assets/images/nelson_saw-scaled.jpg";
function About() {
  return (
    <div>
      <div id="About">
        <div
          className={styles.aboutContainer}
          style={{
            backgroundImage: `url(${watermark}) `,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain cover",
          }}
        >
          <h1 className={styles.aboutHeading}>The Man Behind the Craft</h1>

          <div className={styles.aboutSection}>
            <img
              className={styles.pinewood}
              src={pinewood}
              alt="pinewood derby car"
            ></img>
            <p>
              {" "}
              Nelson specializes in everything from pinewood derby cars to
              blanket storage benches and more.{" "}
            </p>

            <div className={styles.flexContainer}>
              <img
                className={styles.sawImage}
                src={sawImage}
                alt="Nelson with saw"
              ></img>
            </div>
            <p className={styles.saw}>
              He will transform your ideas into finely crafted furniture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
