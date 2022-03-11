import React, { useState } from "react";
// import { BsHeartFill, BsHeart } from "react-icons/bs";
import { AiFillFire, AiOutlineFire } from "react-icons/ai";

function PetCard({ name, url, species, breed, age, image, id, description }) {
  const [favorites, setFavorites] = useState(false);

  // const heartFillOrNot = favorites ? emptyHeart : filledHeart;

  function changeHeart() {
    setFavorites((favorites) => !favorites);
  }

  return (
    <div className="petCard">
      <h1 style={{ color: "#5603ad" }}>{name}</h1>
      {/* <BsSuitHeart onclick={changeHeart} /> */}
      {favorites ? (
        <button onClick={changeHeart} className="heart-emoji-active">
          <AiFillFire style={{ fontSize: "20px", color: "coral" }} />
        </button>
      ) : (
        <button onClick={changeHeart} className="heart-emoji-favorite">
          <AiOutlineFire style={{ fontSize: "20px" }} />
        </button>
      )}
      <img src={image} alt="cute animal" />
      <br />
      <p>
        <strong>Species:</strong> {species}
      </p>
      <p>
        <strong>Breed:</strong> {breed}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>{description}</p>
      <a href={url}>Take me to pet details</a>
    </div>
  );
}

export default PetCard;
