import React, { useState } from "react";
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   const { onSearch } = props;
   const [character, setCharacter] = useState('');
   const handleChange = (evento) => {
      setCharacter(evento.target.value);
   };

   const handleSubmit = (evento) => {
      evento.preventDefault();
      props.onSearch(character);
   };

   return (
      <div className={styles.search} onSubmit = {handleSubmit}>
         <input className={styles.contentInput} type='search' value={character} onChange={handleChange} />
         <button className={styles.contentButton} onClick={() => onSearch(character)}>Agregar</button> 
      </div>
   );
}
