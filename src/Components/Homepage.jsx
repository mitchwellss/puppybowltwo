import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1 id="welcome">Welcome To The <br></br>PUPPY BOWL</h1>

      <div id="h3text">
        <h3>
          Feel free to browse the players, create one of your own, or even
          delete the ones you don't care for!
        </h3>
        <h3>
          Get started by clicking the "All Doggies" tab above, or you can click{" "}
          <Link to="/allDogs">HERE</Link> to see the team.
        </h3>
      </div>
      
    </div>
    
  );
}

export default Homepage;
