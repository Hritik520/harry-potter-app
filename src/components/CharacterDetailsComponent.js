import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CharacterDetailsComponent.css';

function CharacterDetailsComponent() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await axios.get('https://hp-api.onrender.com/api/characters');
        const characterDetails = response.data.find(char => char.id === id);
        setCharacter(characterDetails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching character details:', error);
        setLoading(false);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!character) {
    return <div>No character details available.</div>;
  }

  return (
    <div className="character-details">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p><strong>House:</strong> {character.house}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Date of Birth:</strong> {character.dateOfBirth}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Ancestry:</strong> {character.ancestry}</p>
      <p><strong>Eye Colour:</strong> {character.eyeColour}</p>
      <p><strong>Hair Colour:</strong> {character.hairColour}</p>
      <p><strong>Patronus:</strong> {character.patronus}</p>
      <p><strong>Actor:</strong> {character.actor}</p>
    </div>
  );
}

export default CharacterDetailsComponent;
