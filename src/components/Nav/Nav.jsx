import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from 'react-router-dom';

function Nav ({onSearch, handleRandomPersonaje}){
  return(
    <nav className = {styles.head_Nav}>
      <div className = {styles.btns}>
        <Link to = '/about' className={styles.about}>About</Link>
        <Link to = '/home' className={styles.home}>Home</Link>
      </div>
      <div style={{ marginLeft: 'auto' }} className = {styles.head_group}>
        <button className = {styles.head_button} onClick={handleRandomPersonaje}>
          Personaje Random
        </button>
        <SearchBar onSearch = {onSearch}/>
      </div>
    </nav>
  );
};

export default Nav;