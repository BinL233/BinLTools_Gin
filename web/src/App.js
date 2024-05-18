import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ReactionTest from './pages/reactionTest/reactionTest';
import DigitConverter from './pages/digitConverter/digitConverter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/reaction_test" element={ <ReactionTest /> } />
        <Route path="/digit_converter" element={ <DigitConverter /> } />
      </Routes>
    </Router>
  );
}

export default App;
