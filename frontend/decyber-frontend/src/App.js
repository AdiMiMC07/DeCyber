import './App.css'; 
import Navbar from './components/Navbar';
import WorldMap from './components/WorldMap';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    // all under JSX fragment(<> & </>) as we need to pass only one element in the return();
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<WorldMap/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
