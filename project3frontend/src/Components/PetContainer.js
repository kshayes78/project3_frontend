import React from "react";
import PetCard from './PetCard'

function PetContainer({pets}) {

  const createPetCards = pets.map((pet) => (
    <PetCard
      key={pet.id}
      id={pet.id}
      name={pet.name}
      url={pet.url}
      species={pet.species}
      breed={pet.breed}
      age={pet.age}
      image={pet.image}
    />
  ));


  return (
  <div> {createPetCards} </div>
  );

}

export default PetContainer;
