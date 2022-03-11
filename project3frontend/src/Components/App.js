import React, { useEffect, useState } from "react";
import PetContainer from "./PetContainer";
import PetForm from "./PetForm";
import Header from "./Header";
import "../App.css";

function App() {
  const [pets, setPets] = useState([]);
  const [speciesInput, setSpeciesInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [genderInput, setGenderInput] = useState("");
  const [sizeInput, setSizeInput] = useState("");
  const [activityInput, setActivityInput] = useState("");

  const [housetrainedInput, setHousetrainedInput] = useState("");
  const [goodWithKidsInput, setGoodWithKidsInput] = useState("");
  const [goodWithAnimalsInput, setGoodWithAnimalsInput] = useState("");
  const [hypoallergenicInput, setHypoallergenicInput] = useState("");
  // const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:9292/pets")
      .then((r) => r.json())
      .then(setPets);
  }, []);

  const filterBySpecies = pets.filter((pet) =>
    pet.species.toLowerCase().includes(speciesInput.toLowerCase())
  );

  const filterByAge = filterBySpecies.filter((pet) =>
    pet.age.toLowerCase().includes(ageInput.toLowerCase())
  );

  const filterByGender = filterByAge.filter((pet) =>
    pet.gender.toLowerCase().includes(genderInput.toLowerCase())
  );

  const filterBySize = filterByGender.filter((pet) =>
    pet.size.toLowerCase().includes(sizeInput.toLowerCase())
  );

  const filterByActivity = filterBySize.filter((pet) =>
    pet.activity_level.toLowerCase().includes(activityInput.toLowerCase())
  );

  const filterByHousetrained = filterByActivity.filter((pet) =>
    pet.housetrained.toLowerCase().includes(housetrainedInput.toLowerCase())
  );

  const filterByGoodWithKids = filterByHousetrained.filter((pet) =>
    pet.good_with_kids.toLowerCase().includes(goodWithKidsInput.toLowerCase())
  );

  const filterByGoodWithAnimals = filterByGoodWithKids.filter((pet) =>
    pet.good_with_animals
      .toLowerCase()
      .includes(goodWithAnimalsInput.toLowerCase())
  );

  const filterByHypoallergenic = filterByGoodWithAnimals.filter((pet) =>
    pet.hypoallergenic.toLowerCase().includes(hypoallergenicInput.toLowerCase())
  );

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
      <Header />
      <PetForm
        setSpeciesInput={setSpeciesInput}
        setAgeInput={setAgeInput}
        setGenderInput={setGenderInput}
        setSizeInput={setSizeInput}
        setActivityInput={setActivityInput}
        setHousetrainedInput={setHousetrainedInput}
        setGoodWithKidsInput={setGoodWithKidsInput}
        setGoodWithAnimalsInput={setGoodWithAnimalsInput}
        setHypoallergenicInput={setHypoallergenicInput}
      />
      <h1 className="yourPets">Here are Your Pets!</h1>
      <PetContainer pets={filterByHypoallergenic} />
    </div>
  );
}

export default App;
