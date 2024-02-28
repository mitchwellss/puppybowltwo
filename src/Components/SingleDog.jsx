import { useState } from "react";
import axios from "axios";



function SingleDog({ dog }) {
  async function deleteDog() {
    try {
      const { data } = await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/mitchwellss6/players/${dog.id}`);

      console.log("deleting:", data);
    } catch (err) {
      console.log("Error deleting dog", err);
    }
  }



  return (
    <div key={dog.id} className="card">
      <h2>{dog.name}</h2>

      <p>{dog.breed}</p>
      <img src={dog.imageUrl} alt={dog.name} />
      <br></br>
      <button>INFO</button>
      <button onClick={deleteDog}>DELETE</button>
    </div>
  );
}

export default SingleDog;
