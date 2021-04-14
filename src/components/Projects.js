import React from "react";
import styles from "./Projects.module.css";
import jsonImages from "../assets/images/jsonImages/images.json";

function Projects() {
  const images = jsonImages.images;
  console.log(jsonImages.images);
  
  const listItems = images.map((image) => (
    <div>
      <div className={styles.gridItem}>
        <img src={"images/" + image.url} alt= "url"></img>
      </div>
      <div className={styles.gridItem}>{image.description}</div>
    </div>
  ));
  return (
    <div>
      <div>
        <h1 className={styles.gridTitle} id = "Projects"> Custom Projects</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.gridContainer}>{listItems}</div>
      </div>
    </div>
  );
}

export default Projects;
