import { useEffect, useState } from "react";
import axios from "axios";
import SingleDog from "./SingleDog";
import {Link}  from 'react-router-dom'

function AllDogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function fetchDogs() {
      try {
        const { data } = await axios.get(
          "https://fsa-puppy-bowl.herokuapp.com/api/mitchwellss3/players"
        );
        console.log(data);

        setDogs(data.data.players);
      } catch (error) {
        console.error("Error fetching dogs:", error);
      }
    }
    fetchDogs();
  }, []);


  

  if (dogs.length === 0) {
    return <h1>Doggies Loading...</h1>;
  }

  return (
    <section>
      <h1 id="alldogs">All Dogs</h1>
      <div className="dog-cards">
        {dogs.map((dog) => (
          <div key={dog.id} className="dog-card">
            <SingleDog dog={dog} />
           
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllDogs;
