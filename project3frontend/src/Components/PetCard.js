import React from "react";

function PetCard({ name, url, species, breed, age, image, id }) {
  return (
    <div className="petCard">
      <h2>{name}</h2>
      <a href={url}>Take me to pet details</a>
      <p>{species}</p>
      <p>{breed}</p>
      <p>{age}</p>
      <img src={image} alt="cute animal" />
    </div>
  );
}

export default PetCard;
