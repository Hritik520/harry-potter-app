import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import './GoodStudentsComponent.css';

function GoodStudentsComponent() {
  const [goodStudents, setGoodStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGoodStudents = async () => {
      try {
        const response = await axios.get('https://hp-api.onrender.com/api/characters');
        const storedGoodStudents = JSON.parse(localStorage.getItem('goodStudents')) || [];
        const goodStudentsData = response.data.filter(char => storedGoodStudents.includes(char.id));
        setGoodStudents(goodStudentsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching good students:', error);
        setLoading(false);
      }
    };

    fetchGoodStudents();
  }, []);

  const removeGoodStudent = (id) => {
    const updatedGoodStudents = goodStudents.filter(student => student.id !== id);
    setGoodStudents(updatedGoodStudents);
    const storedGoodStudents = JSON.parse(localStorage.getItem('goodStudents')) || [];
    const updatedStoredGoodStudents = storedGoodStudents.filter(studentId => studentId !== id);
    localStorage.setItem('goodStudents', JSON.stringify(updatedStoredGoodStudents));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="good-students">
      {goodStudents.map(character => (
        <div className="character-card" key={character.id}>
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
          <FontAwesomeIcon
            icon={solidStar}
            onClick={() => removeGoodStudent(character.id)}
            className="star-icon"
          />
          <Link to={`/character/${character.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default GoodStudentsComponent;
