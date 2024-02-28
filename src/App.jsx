import { useState } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./index.css";


import Homepage from './Components/Homepage'
import AllDogs from './Components/AllDogs'
import AddDogForm from './Components/AddDogForm'
import SingleDog from './Components/SingleDog'

function App() {
  

  return (
    <>
      <div className="headerSpace"> </div>
      <Navbar />
      {/* <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5be2af8223e0a1fc640232096901ddffba95cc9b6f8785c73e5d06ccd5da0cea._RI_TTW_SX1080_FMjpg_.jpg"/> */}
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AllDogs" element={<AllDogs />} />
          <Route path="/form" element={<AddDogForm />} />
          <Route path="/dog" element={<SingleDog />} />


        </Routes>
      </main>
    </>
  )
}

export default App
