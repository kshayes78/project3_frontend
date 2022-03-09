// import React, { useState } from "react";
// import Dropdown from "react-dropdown";
import React, { useState } from "react";
import Select from "react-select";


function PetForm({ setAgeInput, setGenderInput, setSizeInput, setActivityInput, setHousetrainedInput}) {
  const [formData, setFormData] = useState("");

  // create a function that handle the React-select event and
  // save the value of that event on an state every time the component change
  //   const handler = (event) => {
  //     const value = event.value;
  //     setFormData(value);
  //   };
  const ageOptions = [
    { value: "", label: "All" },
    { value: "Baby", label: "Baby" },
    { value: "Young", label: "Young" },
    { value: "Adult", label: "Adult" },
    { value: "Senior", label: "Senior" },
  ];
  const gender = [
    { value: "", label: "All" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
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

  function handleSubmit(e) {
    e.preventDefault();
  }

  function buttonChange(e) {
    setFormData(e.target.value);
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Select
          placeholder="Select an Age"
          options={ageOptions}
          onChange={handleAgeChange}
        />
        <Select 
          placeholder="Select a Gender" 
          options={gender} 
          onChange={handleGenderChange}
          />
        <Select 
         placeholder="Select a Size" 
          options={size} 
          onChange={handleSizeChange}
        />
        <Select
          placeholder="Select an Activity Level"
          options={activityLevel}
          onChange={handleActivityChange}
        />
        


        <div onChange={buttonChange}>
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
        </div>
      </form>
    </div>
  );
}

export default PetForm;
