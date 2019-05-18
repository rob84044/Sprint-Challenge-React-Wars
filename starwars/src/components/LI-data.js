import React from 'react';
import './StarWars.css';

const LiData = props => {
  return (
    <div className="charInfo">
      <ul className="charData">
        <li className="li-item">
          <p className="desc">
            <strong>Name:</strong>
          </p>
          {props.starwarsChars.name}
        </li>
        <li className="li-item">
          <p className="desc">
            <strong>Gender:</strong>
          </p>
          {props.starwarsChars.gender}
        </li>
        <li className="li-item">
          <p className="desc">
            <strong>Birth Year:</strong>
          </p>
          {props.starwarsChars.birth_year}
        </li>
        <li className="li-item">
          <p className="desc">
            <strong>Eye Color:</strong>
          </p>
          {props.starwarsChars.eye_color}
        </li>
        <li className="li-item">
          <p className="desc">
            <strong>Hair Color:</strong>
          </p>
          {props.starwarsChars.hair_color}
        </li>
        <li className="li-item">
          <p className="desc">
            <strong>Height:</strong>
          </p>
          {props.starwarsChars.height}
        </li>
        <li className="li-item">
          <p className="desc">
            <strong>Weight:</strong>
          </p>
          {props.starwarsChars.mass}
        </li>
        <li className="li-item">
          <p className="desc">
            <strong>Home World:</strong>
          </p>
          {props.starwarsChars.homeworld}
        </li>
        <li className="li-item">
          <p className="desc">
            <strong>Skin Color:</strong>
          </p>
          {props.starwarsChars.skin_color}
        </li>
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
