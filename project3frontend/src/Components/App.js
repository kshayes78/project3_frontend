import React, { useEffect, useState } from "react";
import PetContainer from "./PetContainer";
import PetForm from "./PetForm";

function App() {
  const [pets, setPets] = useState([]);
  const [ageInput, setAgeInput] = useState("");
  // const [genderInput, setGenderInput] = useState("");
  // const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:9293/pets")
      .then((r) => r.json())
      .then(setPets);
  }, []);

  // const searchPets = pets.filter((pet) => {
  //   return pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   || pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
  // })

  const filterByAge = pets.filter((pet) =>
    pet.age.toLowerCase().includes(ageInput.toLowerCase())
  );

  // const filterByGender = filterByAge.filter(pet => pet.age.includes(ageInput))

  return (
    <div className="App">
      <h2>Connecting People with Their Pets</h2>
      <PetForm setAgeInput={setAgeInput} />
      <h1>Here are Your Pets!</h1>
      <PetContainer pets={filterByGender} />
    </div>
  );
}

export default App;
