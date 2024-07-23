import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import AllCharactersComponent from './components/AllCharactersComponent';
import CharacterDetailsComponent from './components/CharacterDetailsComponent';
import SpecificCharacterByIDComponent from './components/SpecificCharacterByIDComponent';
import HogwartsStudentsComponent from './components/HogwartsStudentsComponent';
import HogwartsStaffComponent from './components/HogwartsStaffComponent';
import HouseCharactersComponent from './components/HouseCharactersComponent';
import AllSpellsComponent from './components/AllSpellsComponent';
import GoodStudentsComponent from './components/GoodStudentsComponent';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <Routes>
          <Route path="/all-characters" element={<AllCharactersComponent />} />
          <Route path="/character/:id" element={<CharacterDetailsComponent />} />
          <Route path="/specific-character-by-id" element={<SpecificCharacterByIDComponent />} />
          <Route path="/hogwarts-students" element={<HogwartsStudentsComponent />} />
          <Route path="/hogwarts-staff" element={<HogwartsStaffComponent />} />
          <Route path="/house-characters" element={<HouseCharactersComponent />} />
          <Route path="/all-spells" element={<AllSpellsComponent />} />
          <Route path="/good-students" element={<GoodStudentsComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
