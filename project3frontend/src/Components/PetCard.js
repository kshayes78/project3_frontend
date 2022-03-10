import React from "react";

function PetCard({ name, url, species, breed, age, image, id, description }) {
  return (
    <div className="petCard">
      <h2>{name}</h2>
      <img src={image} alt="cute animal" />
      <br />
      <p>Species: {species}</p>
      <p>Breed: {breed}</p>
      <p>Age: {age}</p>
      <p>{description}</p>
      <a href={url}>Take me to pet details</a>
    </div>
  );
}

export default PetCard;
