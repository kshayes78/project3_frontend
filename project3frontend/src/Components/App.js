import React, { useEffect, useState } from "react";
import PetContainer from "./PetContainer";
import PetForm from "./PetForm";

function App() {
  const [pets, setPets] = useState([]);
  const [ageInput, setAgeInput] = useState("");
  const [genderInput, setGenderInput] = useState("");
  const [sizeInput, setSizeInput] = useState("");
  const [activityInput, setActivityInput] = useState("");

  const [housetrainedInput, setHousetrainedInput] = useState(Boolean);
  const [goodWithKidsInput, setgoodWithKidsInput] = useState(false);
  const [goodWithAnimalsInput, setgoodWithAnimalsInput] = useState(false);
  const [hypoallergenicInput, setHypoallergenicInput] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:9293/pets")
      .then((r) => r.json())
      .then(setPets);
  }, []);


  const filterByAge = pets.filter((pet) =>
    pet.age.toLowerCase().includes(ageInput.toLowerCase())
  );

  const filterByGender = filterByAge.filter((pet) => pet.gender.toLowerCase().includes(genderInput.toLowerCase()))

  const filterBySize = filterByGender.filter((pet) => pet.size.toLowerCase().includes(sizeInput.toLowerCase()))

  const filterByActivity = filterBySize.filter((pet) => pet.activity_level.toLowerCase().includes(activityInput.toLowerCase()))

  const filterByHousetrained = filterByActivity.filter((pet) => setHousetrainedInput((housetrainedInput) => !housetrainedInput) )
  
  // {
  //   if (pet.housetrained === true) {
  //     return !housetrainedInput
  //   } else {
  //     return housetrainedInput
  //   }
  // })

  // function handleToggle(){ setToggleStock((toggleStock) => !toggleStock);
  //housetrainedInput ? !pet.housetrained : pet.housetrained)

  return (
    <div className="App">
      <h2>Connecting People with Their Pets</h2>
      <PetForm 
        setAgeInput={setAgeInput} 
        setGenderInput={setGenderInput} 
        setSizeInput={setSizeInput} 
        setActivityInput={setActivityInput} 
        setHousetrainedInput={setHousetrainedInput} 
      />
      <h1>Here are Your Pets!</h1>
      <PetContainer 
        pets={filterByHousetrained}
        />
    </div>
  );
}

export default App;
