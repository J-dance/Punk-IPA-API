import React from "react";
import styles from "./BeerIntro.module.scss";

const BeerIntro = (props) => {
  
  const beer = props.beer;

  return (
    <div className={styles.introContainer}>
    {/* large image */}
    <div className={styles.imageContainer}>
      <img className={styles.image} src={beer.image_url}></img>
    </div>
    
    <div className={styles.textContainer}>
      {/* Beer name */}
      <h1>{beer.name}</h1>
      {/* tagline */}
      <h3>{beer.tagline}</h3>
    </div>

    </div>
  )
}

export default BeerIntro;