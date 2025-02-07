import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Pokedex from "./Pokedex.jsx";
import Home from "./Home.jsx";
import "./App.css";
import Search from "./Search.jsx";
import Pokemon from "./Pokemon.jsx";


const NavigationBar = () => {
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/pokedex">Pokédex</Link>
      <Link to="/search">Search</Link>
    </nav>
  );
};

const App = () => (

  <BrowserRouter> 
    <NavigationBar />
    <div className="content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/search" element={<Search />} />
      <Route path="/pokemon" element={<Pokemon />} />
    </Routes>
    </div>
  </BrowserRouter>
);

export default App;