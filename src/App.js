import "./styles.css";
import React, { useState } from "react";

var color = "green";

var isPrime;
export default function App() {
  var [birthDate, setbirthDate] = useState("");

  function birthDateHandler(event) {
    var inputDate = event.target.value;
    console.log(inputDate);

    for (var i = 2; i < inputDate; i++) {
      if (inputDate % i == 0) {
        isPrime = false;
        break;
      } else {
        isPrime = true;
        break;
      }
    }
    console.log(isPrime);

    if (isPrime) {
      birthDate = "Your birthdate is a prime number";
    } else {
      birthDate = "Your birthdate is not a prime number";
    }
  }

  function clickHandler() {
    setbirthDate(birthDate);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>
        Is your birthdate a prime number?
      </h1>

      <p>Enter Birthdate in DD/MM format</p>

      <input onChange={birthDateHandler} />

      <button
        onClick={clickHandler}
        style={{
          position: "relative",
          padding: "0.2rem",
          top: "2vh",
          display: "block",
          margin: "auto"
        }}
      >
        Find out!
      </button>

      <h2>{birthDate}</h2>
    </div>
  );
}
