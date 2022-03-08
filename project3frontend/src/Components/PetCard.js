import React from "react";


function PetCard({name, url, species, breed, age, image, id}) {

  return (
  <div> Here are your pets! 
      <h2>{name}</h2>
      <h3>{url}</h3>
      <p>{species}</p>
      <p>{breed}</p>
      <p>{age}</p>
      <img src={image} alt="cute animal"/>
  </div>
  );

}

export default PetCard;