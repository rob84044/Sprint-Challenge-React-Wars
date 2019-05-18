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
          {props.person.name.toUpperCase()}
        </li>
        <li className="li-item">
          <p className="desc">
            <strong>Gender:</strong>
          </p>
          {props.person.gender.toUpperCase()}
        </li>
        <li className="li-item">
          <p className="desc">
            <strong>Birth Year:</strong>
          </p>
          {props.person.birth_year.toUpperCase()}
        </li>
        <li className="li-item">
          <p className="desc">
            <strong>Eye Color:</strong>
          </p>
          {props.person.eye_color.toUpperCase()}
        </li>
        <li className="li-item">
          <p className="desc">
            <strong>Hair Color:</strong>
          </p>
          {props.person.hair_color.toUpperCase()}
        </li>
        <li className="li-item">
          <p className="desc">
            <strong>Height:</strong>
          </p>
          {props.person.height.toUpperCase()}
        </li>
        <li className="li-item">
          <p className="desc">
            <strong>Weight:</strong>
          </p>
          {props.person.mass.toUpperCase()}
        </li>

        <li className="li-item">
          <p className="desc">
            <strong>Skin Color:</strong>
          </p>
          {props.person.skin_color.toUpperCase()}
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
