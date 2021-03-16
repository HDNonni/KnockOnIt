import React from "react";
import styles from "./Projects.module.css";
import jsonImages from "../assets/images/jsonImages/images.json";

function Projects() {
  const images = jsonImages.images;
  console.log(jsonImages.images);
  const numbers = [1, 2, 3, 4, 5];
  const listItems = images.map((image) => (
    <div>
      <div className={styles.gridItem}>
        <img src={"images/" + image.url}></img>
      </div>
      <div className={styles.gridItem}>{image.description}</div>
    </div>
  ));
  return (
    <div>
      <div>
        <h1 className={styles.gridTitle}> Custom Projects</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.gridContainer}>{listItems}</div>
      </div>
    </div>
  );
}

export default Projects;
