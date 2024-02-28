import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
        <section>
        <img id="puppybowlpic" src="https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/p/puppybowl/2022/PuppyBowl2022_KA_FN.jpg.rend.hgtvcom.616.616.suffix/1641834657335.jpeg"/>
        </section>


      <nav>
        <NavLink to="/">Home - </NavLink>
        <NavLink to="/allDogs">All Doggies - </NavLink>
        <NavLink to="/form">Add A Lil' Doggy - </NavLink>
        <NavLink to="/dog">Solo Doggy</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
