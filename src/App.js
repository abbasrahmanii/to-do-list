import React, { useState } from "react";
import uuid from "react-uuid";

import Goal from "./Components/Goal";
//Style
import styled from "styled-components";
import GlobalStyles from "./Components/GlabalStyles";

function App() {
  const [inputText, setInputText] = useState("");
  const [textGoal, setTextGoal] = useState([]);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  const addGoalHandler = () => {
    if (inputText) {
      setTextGoal([...textGoal, { key: uuid(), value: inputText }]);
      setInputText("");
    }
  };
  const deleteGoalHandler = (goal) => {
    setTextGoal(textGoal.filter((goals) => goals.key !== goal.target.id));
  };
  const deleteAllGoalsHandler = () => {
    setTextGoal([]);
  };
  const keyCodeHandler = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      if (inputText) {
        setTextGoal([...textGoal, { key: uuid(), value: inputText }]);
        setInputText("");
      }
    }
  };

  return (
    <div>
      <GlobalStyles />
      <Nav>
        <h1>Todo List</h1>
      </Nav>
      <Main>
        <input
          type="text"
          placeholder="Enter Your Goal"
          onChange={inputHandler}
          value={inputText}
          onKeyPress={keyCodeHandler}
        />
        <div className="buttons">
          <button className="Add" onClick={addGoalHandler}>
            ADD
          </button>
          <button className="Cancel" onClick={deleteAllGoalsHandler}>
            DELETE ALL
          </button>
        </div>
        <hr />
        <div>
          {textGoal.map((goal) => (
            <Goal
              key={goal.key}
              id={goal.key}
              title={goal.value}
              onDelete={deleteGoalHandler}
            />
          ))}
        </div>
      </Main>
    </div>
  );
}

const Nav = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #003566;
  h1 {
    font-size: 2.5rem;
    color: #52ffb8;
    font-family: "Open Sans", sans-serif;
  }
`;
const Main = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: #003566;
  input {
    width: 30%;
    padding: 1rem 1.2rem;
    margin: 2rem 0rem;
    border-radius: 5px;
    font-family: "Patrick Hand", cursive;
    font-size: 1rem;
    &::placeholder {
      color: #4a051c;
      font-family: "Patrick Hand", cursive;
    }
  }
  .buttons {
    width: 30%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    button {
      padding: 0.8rem 1rem;
      color: #fff;
      width: 35%;
      border-radius: 5px;
      font-family: "Open Sans", sans-serif;
    }
    .Add {
      background-color: #05b431;
    }
    .Cancel {
      background-color: #e62c2c;
    }
  }
  hr {
    width: 30%;
    height: 0.1rem;
    background-color: #52ffb8;
    margin-bottom: 1rem;
  }
`;
export default App;
