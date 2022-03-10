// import React, { useState } from "react";
// import Dropdown from "react-dropdown";
import React, { useState } from "react";
import Select from "react-select";

function PetForm({
  setAgeInput,
  setGenderInput,
  setSizeInput,
  setActivityInput,
  setHousetrainedInput,
  setGoodWithKidsInput,
  setGoodWithAnimalsInput,
  setHypoallergenicInput,
  setSpeciesInput
}) {
  const [formData, setFormData] = useState("");

  // create a function that handle the React-select event and
  // save the value of that event on an state every time the component change
  //   const handler = (event) => {
  //     const value = event.value;
  //     setFormData(value);
  //   };
  const speciesOptions = [
    { value: "", label: "All" },
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
    { value: "Rodent", label: "Rodent" },
    { value: "Turtle", label: "Turtle" },
  ];

  const ageOptions = [
    { value: "", label: "All" },
    { value: "Baby", label: "Baby" },
    { value: "Young", label: "Young" },
    { value: "Adult", label: "Adult" },
    { value: "Senior", label: "Senior" },
  ];
  const gender = [
    { value: "", label: "All" },
    { value: "Boy", label: "Boy" },
    { value: "Girl", label: "Girl" },
  ];
  const size = [
    { value: "", label: "All" },
    { value: "Small", label: "Small" },
    { value: "Medium", label: "Medium" },
    { value: "Large", label: "Large" },
  ];

  const activityLevel = [
    { value: "", label: "All" },
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];
  const housetrained = [
    { value: "Yes", label: "Yes" },
    { value: "", label: "Doesn't matter" },
    // { value: "No", label: "No" },
  ];
  const goodWithKids = [
    { value: "", label: "Doesn't matter" },
    { value: "Yes", label: "Yes" },
    // { value: "No", label: "No" },
  ];
  const goodWithAnimals = [
    { value: "", label: "Doesn't matter" },
    { value: "Yes", label: "Yes" },
    // { value: "No", label: "No" },
  ];
  const hypoallergenic = [
    { value: "", label: "Doesn't matter" },
    { value: "Yes", label: "Yes" },
    // { value: "No", label: "No" },
  ];

  function handleSubmit(e) {
    e.preventDefault();
  }

  function buttonChange(e) {
    setFormData(e.target.value);
  }
  function handleSpeciesChange(e) {
    setSpeciesInput(e.value);
  }
  function handleAgeChange(e) {
    setAgeInput(e.value);
  }

  function handleGenderChange(e) {
    setGenderInput(e.value);
  }

  function handleSizeChange(e) {
    setSizeInput(e.value);
  }

  function handleActivityChange(e) {
    setActivityInput(e.value);
  }

  function handleHousetrainedChange(e) {
    setHousetrainedInput(e.value);
  }
  function handleKidsChange(e) {
    setGoodWithKidsInput(e.value);
  }
  function handleAnimalsChange(e) {
    setGoodWithAnimalsInput(e.value);
  }
  function handleHypoallergenicChange(e) {
    setHypoallergenicInput(e.value);
  }

  return (
    <div className="filterSearch">
      <form onSubmit={handleSubmit}>
        <label>Select a Species</label>
        <Select
          className="dropdown"
          placeholder="Select a Species"
          options={speciesOptions}
          onChange={handleSpeciesChange}
        />
        <label>Select an Age</label>
        <Select
          className="dropdown"
          placeholder="Select an Age"
          options={ageOptions}
          onChange={handleAgeChange}
        />
        <label>Select a Gender</label>
        <Select
          className="dropdown"
          placeholder="Select a Gender"
          options={gender}
          onChange={handleGenderChange}
        />
        <label>Select a Size</label>
        <Select
          className="dropdown"
          placeholder="Select a Size"
          options={size}
          onChange={handleSizeChange}
        />
        <label>Select a Gender</label>
        <Select
          className="dropdown"
          placeholder="Select an Activity Level"
          options={activityLevel}
          onChange={handleActivityChange}
        />
        <label>Select a Gender</label>
        <Select
          className="dropdown"
          placeholder="Must be housetrained"
          options={housetrained}
          onChange={handleHousetrainedChange}
        />
        <label>Select a Gender</label>
        <Select
          className="dropdown"
          placeholder="Good with Kids"
          options={goodWithKids}
          onChange={handleKidsChange}
        />
        <label>Select a Gender</label>
        <Select
          className="dropdown"
          placeholder="Good with other Animals"
          options={goodWithAnimals}
          onChange={handleAnimalsChange}
        />
        <label>Select a Gender</label>
        <Select
          className="dropdown"
          placeholder="Hypoallergenic"
          options={hypoallergenic}
          onChange={handleHypoallergenicChange}
        />

        {/* <div onChange={buttonChange}>
          <h3>Housetrained</h3>
          <input type="radio" value="Yes" name="radio" onClick={handleHousetrainedChange}/> Yes
          <input type="radio" value="No" name="radio" /> No
          <h3>Good with Kids</h3>
          <input type="radio" value="Yes" name="radio" /> Yes
          <input type="radio" value="No" name="radio" /> No
          <h3>Good with other Animals</h3>
          <input type="radio" value="Yes" name="radio" /> Yes
          <input type="radio" value="No" name="radio" /> No
          <h3>Hypoallergenic</h3>
          <input type="radio" value="Yes" name="radio" /> Yes
          <input type="radio" value="No" name="radio" /> No
        </div> */}
      </form>
    </div>
  );
}

export default PetForm;
