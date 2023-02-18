import './App.css';
//import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx';
//import SearchBar from './components/SearchBar/SearchBar.jsx'
//import characters, { Rick } from './data.js'
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from "./components/Form/Form";

function App () {
  const [characters, setCharacters] = useState([]);
  

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => { 
      const existe = characters.filter(card => card.id === data.id);
        if(existe.length === 0){    
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No existe personaje con ese ID');
          }
        } else{
          alert('El personaje ya existe. No se puede adicionar.');
        };
    });
  };

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id));
  };

  const handleRandomPersonaje = () => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      const random = Math.floor(Math.random() * data.results.length);
      setCharacters((oldChars) => [...oldChars, data.results[random]]);
    });
  };

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch} handleRandomPersonaje={handleRandomPersonaje}/>
      </div>

      <Routes>
        <Route path="/" element={ <Form/> } />
        <Route path='/home' element={<Cards onClose={onClose} characters={characters} />} />
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>} />
      </Routes>      
    </div>
  );
};

export default App
