import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddDogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const navigate = useNavigate();

  function clearForm() {
    setName("");
    setBreed("");
    setImgUrl("");
  }

  async function handleSubmit(event) {
    event.preventDefault(); //STOP PAGE REFRESING

    const payload = {
      name,
      breed,
      imgUrl: imgUrl,
    };
    try {
      const { data } = await axios.post(
        "https://fsa-puppy-bowl.herokuapp.com/api/mitchwellss3/players",
        payload
      );

         setDogs((prevDogs) => [...prevDogs, data.data.player]);


      console.log("added item", data);

      navigate("/dogs");
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  console.table({ name, breed, imgUrl });
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Breed:
        <input value={breed} onChange={(e) => setBreed(e.target.value)} />
      </label>

      <label>
        Image URL:
        <input
          type="url"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
      </label>
      <button type="submit">Add Dog</button>
    </form>
  );
}

export default AddDogForm;
