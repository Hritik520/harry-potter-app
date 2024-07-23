import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SpecificCharacterByIDComponent.css';

function SpecificCharacterByIDComponent() {
  const [searchName, setSearchName] = useState('');
  const [, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('https://hp-api.onrender.com/api/characters');
      const foundCharacter = response.data.find(char => char.name.toLowerCase() === searchName.toLowerCase());
      if (foundCharacter) {
        setCharacter(foundCharacter);
        navigate(`/character/${foundCharacter.id}`);
      } else {
        setCharacter(null);
        setError('Character not found');
      }
    } catch (error) {
      setError('Error fetching character details');
    }
    setLoading(false);
  };

  return (
    <div className="search-character">
      <h2>Search Character by Name</h2>
      <input
        type="text"
        value={searchName}
        onChange={e => setSearchName(e.target.value)}
        placeholder="Enter character name"
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default SpecificCharacterByIDComponent;
