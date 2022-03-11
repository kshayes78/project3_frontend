import React from "react";

function PetCard({ name, url, species, breed, age, image, id, description }) {
  return (
    <div className="petCard">
      <h1 style={{color: "#5603ad"}}>{name}</h1>
      <img src={image} alt="cute animal" />
      <br />
      <p><strong>Species:</strong> {species}</p>
      <p><strong>Breed:</strong> {breed}</p>
      <p><strong>Age:</strong> {age}</p>
      <p>{description}</p>
      <a href={url}>Take me to pet details</a>
    </div>
  );
}

export default PetCard;
 