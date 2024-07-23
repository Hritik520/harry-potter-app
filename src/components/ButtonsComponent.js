import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonsComponent.css';

function ButtonsComponent() {
  return (
    <div className="buttons">
      <Link to="/all-characters"><button>All Characters</button></Link>
      <Link to="/specific-character-by-id"><button>Specific Character by ID</button></Link>
      <Link to="/hogwarts-students"><button>Hogwarts Students</button></Link>
      <Link to="/hogwarts-staff"><button>Hogwarts Staff</button></Link>
      <Link to="/house-characters"><button>Characters in a House</button></Link>
      <Link to="/all-spells"><button>All Spells</button></Link>
      <Link to="/good-students"><button>Good Students</button></Link>
    </div>
  );
}

export default ButtonsComponent;
