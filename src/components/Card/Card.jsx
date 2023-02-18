import React from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css';

export default function Card({onClose, name, species, gender, image, id}) {
   return (
      <div className={styles.card}>
         <div className={styles.buttonContainer}>
            <button className={styles.card__Button} onClick={onClose}>X</button>
         </div> 
         <div>  
            <Link to={`/detail/${id}`} className={styles.link}>
               <h2 className={styles.card__name}>{name}</h2>
            </Link>   
         </div>
         <h2 className={styles.card__species}>{species}</h2>
         <h2 className={styles.card__gender}>{gender}</h2>
         <img className={styles.card__img} src={image} alt={name} /> 
      </div>
   );
}
