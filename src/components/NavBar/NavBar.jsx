import React, { useState } from "react";
import SearchBar from "../SearchBar";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => {

  // usestate to toggle between showing searchbar or not
  const [isSearching, setIsSearching] = useState(false);

  // function to toggle isSearching
  const toggleSearch = () => {
    setIsSearching(!isSearching);
  }

  // pass fetch beer data function down to searchbar
  return (
    <div className={isSearching ? styles.NavBar : styles.smallNav}>
      {
        isSearching ? <SearchBar searchBeers={props.searchBeers} toggleSearch={toggleSearch} /> : <span className={styles.icon} onClick={toggleSearch}><FontAwesomeIcon icon={faBeer} /></span>
      }
    </div>
  )
}

export default NavBar;