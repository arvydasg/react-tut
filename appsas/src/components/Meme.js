import React from "react";
import memesData from "../memesData";

export default function Meme() {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url; // index into memes array at the index of randomnumber 5:08
  }
  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top Text" />
        <input type="text" className="form--input" placeholder="Bottom Text" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🪟
        </button>
      </div>
    </main>
  );
}
