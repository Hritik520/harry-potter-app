import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HouseCharactersComponent.css';

function HouseCharactersComponent() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchHouseCharacters = async () => {
      try {
        const response = await axios.get('https://hp-api.onrender.com/api/characters/house/gryffindor');
        setCharacters(response.data);
      } catch (error) {
        console.error('Error fetching house characters:', error);
      }
    };

    fetchHouseCharacters();
  }, []);

  return (
    <div className="house-characters">
      {characters.map(character => (
        <Link to={`/character/${character.id}`} key={character.id}>
          <div className="character-card">
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HouseCharactersComponent;
