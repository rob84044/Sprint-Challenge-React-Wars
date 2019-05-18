import React from 'react';
import './StarWars.css';

const LiData = props => {
  return (
    <div className="charInfo">
      <ul className="charData">
        <li className="li-item">{props.starwarsChars.name}</li>
        <li className="li-item">{props.starwarsChars.gender}</li>
        <li className="li-item">{props.starwarsChars.birth_year}</li>
        <li className="li-item">{props.starwarsChars.eye_color}</li>
        <li className="li-item">{props.starwarsChars.hair_color}</li>
        <li className="li-item">{props.starwarsChars.height}</li>
        <li className="li-item">{props.starwarsChars.mass}</li>
        <li className="li-item">{props.starwarsChars.homeworld}</li>
        <li className="li-item">{props.starwarsChars.skin_color}</li>
        {/* If you complete the project, come back and add in the additional array values*/}
        {/* <li className="li-item">{props.starwarsChars.name}</li>
        <li className="li-item">{props.starwarsChars.name}</li>
        <li className="li-item">{props.starwarsChars.name}</li>
        <li className="li-item">{props.starwarsChars.name}</li>
        <li className="li-item">{props.starwarsChars.name}</li> */}
      </ul>
    </div>
  );
};

export default LiData;
