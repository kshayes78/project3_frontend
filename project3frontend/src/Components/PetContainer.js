import React from "react";
import PetCard from "./PetCard";

function PetContainer({ pets}) {
  const createPetCards = pets.map((pet) => (
    <PetCard
      key={pet.id}
      id={pet.id}
      image={pet.image}
      name={pet.name}
      url={pet.url}
      species={pet.species}
      breed={pet.breed}
      age={pet.age}
      description={pet.description}
    />
  ));

  return <div className="petContainer"> {createPetCards} </div>;
}

export default PetContainer;
