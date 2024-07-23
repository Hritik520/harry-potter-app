import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HogwartsStaffComponent.css';

function HogwartsStaffComponent() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get('https://hp-api.onrender.com/api/characters/staff');
        setStaff(response.data);
      } catch (error) {
        console.error('Error fetching staff:', error);
      }
    };

    fetchStaff();
  }, []);

  return (
    <div className="hogwarts-staff">
      {staff.map(member => (
        <Link to={`/character/${member.id}`} key={member.id}>
          <div className="staff-card">
            <img src={member.image} alt={member.name} />
            <p>{member.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HogwartsStaffComponent;
