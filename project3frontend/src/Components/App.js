import React, {useEffect, useState} from 'react';
import PetContainer from "./PetContainer"

function App() {
  const [pets, setPets] = useState([])
  // const [searchTerm, setSearchTerm] = useState("")

  useEffect(()=>{
  fetch("http://localhost:9293/pets")
  .then((r) => r.json())
  .then(setPets);
  }, [] )

  // const searchPets = pets.filter((pet) => {
  //   return pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   || pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
  // })

  return  (

    <div className="App">
      <h2>HELLO</h2>
    <PetContainer pets={pets} />

    </div>
      )
}

export default App;
