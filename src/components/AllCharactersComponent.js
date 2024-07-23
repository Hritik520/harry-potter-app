import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import './AllCharactersComponent.css';

function AllCharactersComponent() {
  const [characters, setCharacters] = useState([]);
  const [goodStudents, setGoodStudents] = useState(new Set());

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://hp-api.onrender.com/api/characters');
        setCharacters(response.data);
        const storedGoodStudents = JSON.parse(localStorage.getItem('goodStudents')) || [];
        setGoodStudents(new Set(storedGoodStudents));
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  const toggleGoodStudent = (id) => {
    const updatedGoodStudents = new Set(goodStudents);
    if (updatedGoodStudents.has(id)) {
      updatedGoodStudents.delete(id);
    } else {
      updatedGoodStudents.add(id);
    }
    setGoodStudents(updatedGoodStudents);
    localStorage.setItem('goodStudents', JSON.stringify(Array.from(updatedGoodStudents)));
  };

  return (
    <div className="all-characters">
      {characters.map(character => (
        <div className="character-card" key={character.id}>
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
          <FontAwesomeIcon
            icon={goodStudents.has(character.id) ? solidStar : regularStar}
            onClick={() => toggleGoodStudent(character.id)}
            className="star-icon"
          />
          <Link to={`/character/${character.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default AllCharactersComponent;
