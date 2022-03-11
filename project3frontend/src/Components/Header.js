import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Header() {
  // const catIcon = <FontAwesomeIcon icon="fa-solid fa-cat" />;

  return (
    <div className="header">
      <h2 className="heading-primary">PetTinder</h2> 

        <img className="tinderflame" src="../images/tinderflame.png" alt="tinderflame"/>
    

      <h4 className="heading-primary-sub">Connecting People With Their Pets</h4>
    </div>
  );
}

export default Header;
