import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   /*const handleClose = () => {
      window.alert('Emulamos que se cierra la card')
   }*/

   return (
      <div className={styles.cards}>{
         characters.map(({id, name, species, gender, image}) => { 
            return <Card 
               key={id}
               name={name} 
               species={species}
               gender={gender}
               image={image}
               id={id}
               onClose={() => onClose(id)}
            />
         })
      }
      </div>
   ); 
}




