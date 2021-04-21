import { React, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

const SearchBar = (props) => {
  
  const { register, handleSubmit} = useForm();

  // onSubmit function runs onchange of input field and updates beer search criteria in app
  const onSubmit = data => {
    props.searchBeers(data);
    console.log(data)
  }

  return (
    <form className={styles.form} >

      <div className={styles.searchBarContainer}>
        <input className={styles.searchBar} name="beerName" ref={register} type="text" onChange={handleSubmit(onSubmit)} />
        <span className={styles.icon} onClick={props.toggleSearch}><FontAwesomeIcon icon={faBeer} /></span>
      </div>

      {/* is strong! */}
      <div className={styles.tickBox} >
        <label>High ABV ({'>'}6.0%)</label>
        <input className={styles.box} name="abv" ref={register} type="checkbox" onMouseOut={handleSubmit(onSubmit)}/>
      </div>

      {/* <div> */}
      {/* part of the classic range */}
        {/* <label>Classic Range</label>
        <input name="isCR" ref={register} type="checkbox" onMouseOut={handleSubmit(onSubmit)}/>
      </div> */}

      {/* pH below 4 */}
      <div className={styles.tickBox} >
        <label>Acidic (pH {'<'} 4)</label>
        <input className={styles.box} name="isPH" ref={register} type="checkbox" onMouseOut={handleSubmit(onSubmit)}/>
      </div>
    </form>
  )
}

export default SearchBar;