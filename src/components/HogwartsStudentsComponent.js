import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HogwartsStudentsComponent.css';

function HogwartsStudentsComponent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://hp-api.onrender.com/api/characters/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="hogwarts-students">
      {students.map(student => (
        <Link to={`/character/${student.id}`} key={student.id}>
          <div className="student-card">
            <img src={student.image} alt={student.name} />
            <p>{student.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HogwartsStudentsComponent;
