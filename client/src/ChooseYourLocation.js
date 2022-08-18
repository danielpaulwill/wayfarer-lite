import React from "react";

function ChooseYourLocation({ onLocationSelect }) {

 
  return (
    <div id="chooseYourLocation">
      <div id="location">
        <button className="normalButton" onClick={onLocationSelect}>LOCATIONS!!!</button>
      </div>
      <div id="location">
        <button className="normalButton" onClick={onLocationSelect}>LOCATIONS!!!</button>
      </div>

    </div>
  )
};

export default ChooseYourLocation;