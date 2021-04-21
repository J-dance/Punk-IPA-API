import React from "react";
import Card from "../Card";
import styles from "./CardList.module.scss";

const CardList = (props) => {

  return (
    <div className={styles.cardContainer}>
    
      {
        props.data.map((beer) => {
          return <Card key={beer.id} beer={beer}/>
        })
      }

    </div>
  )
}

export default CardList;