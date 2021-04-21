import React, { useState }  from "react";
import styles from "./Card.module.scss";

const Card = (props) => {

  // usestate to toggle accordion
  const [isOpen, setisOpen] = useState(false);
  
  const beer = props.beer;

  return (
    <div onClick={() => setisOpen(!isOpen)} className={styles.card}>

      <div className={ isOpen ? `${styles.banner} ${styles.blue}` : styles.banner}>
        {/* beer name */}
        <h1>{beer.name}</h1>
        {/* abv */}
        <h4>ABV % {beer.abv}</h4>
      </div>

      {
        isOpen ? <div className={styles.body}>
                  <img className={styles.image} src={beer.image_url}></img> 
                  <div className={styles.bodyText}>          
                    <h3>Description</h3>
                    <p>{beer.description}</p>
                  </div>
                 </div> 
                 : <></>
      }      
    </div>
  )
}  

export default Card;