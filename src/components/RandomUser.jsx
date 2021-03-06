import React from "react";
import "./RandomUser.css";

const RandomUser = (props) => {
  const { userData } = props;
  return (
    <ul>
      {userData.map((user) => (
        <li className="user-card" key={user.login.uuid}>
          <img
            src={userData.picture.large}
            alt={`${userData.name.first} ${userData.name.last}`}
          />
          <p>
            {userData.name.first} {userData.name.last}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default RandomUser;
