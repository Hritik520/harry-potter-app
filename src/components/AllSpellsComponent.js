import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllSpellsComponent.css';

function AllSpellsComponent() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await axios.get('https://hp-api.onrender.com/api/spells');
        setSpells(response.data);
      } catch (error) {
        console.error('Error fetching spells:', error);
      }
    };

    fetchSpells();
  }, []);

  return (
    <div className="all-spells">
      {spells.map(spell => (
        <div className="spell-card" key={spell.id}>
          <h2>{spell.name}</h2>
          <p>{spell.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AllSpellsComponent;
