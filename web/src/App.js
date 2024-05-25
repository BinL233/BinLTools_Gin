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
import AboutMe from './pages/aboutMe/aboutMe'
import Login from './pages/login/login';
import ErrorPage from './pages/errorPage/errorPage';
import Register from './pages/register/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/reaction_test" element={ <ReactionTest /> } />
        <Route path="/digit_converter" element={ <DigitConverter /> } />
        <Route path='/about_me' element={ <AboutMe /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register />} />
        <Route path='/error_page' element={ <ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
