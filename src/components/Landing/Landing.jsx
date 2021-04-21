import React from 'react';
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.landingPage}>
      <h1>BREWDOG</h1>
      <h1>PUNK</h1>
      <div className={styles.ipa_apiContainer}>
        <h1 className={styles.ipaAnimation}>IPA</h1>
        <div className={styles.apiContainer}>
          <h1 className={styles.apiI}>I</h1>
          <h1>P</h1>
          <h1 className={styles.apiA}>A</h1>
        </div>
      </div>
      <p className={styles.text}>React Frontend for interacting with an API</p>
      <p className={styles.text}>Returns Brewdog's Punk IPA's</p>

      
    </div>
   
  )
}

export default Landing
