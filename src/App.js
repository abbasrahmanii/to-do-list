import React, { useState } from "react";
import uuid from "react-uuid";
import Goal from "./Components/Goal";
import styled from "styled-components";
import GlobalStyles from "./Components/GlabalStyles";
import Footer from "./Components/Footer";

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
  const selectGoalHandler = (goal) => {
    if (goal.target.classList.value === "") {
      goal.target.classList.add("selected");
    } else {
      goal.target.classList.remove("selected");
    }
  };

  return (
    <Container>
      <GlobalStyles />
      <div>
        <Main>
          <Nav>
            <h1>Todo List</h1>
          </Nav>
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
                select={goal.select}
                onDelete={deleteGoalHandler}
                onSelect={selectGoalHandler}
              />
            ))}
          </div>
          {/* <Footer /> */}
        </Main>
      </div>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.div`
  min-height: 15vh;
  width: 100%;
  display: flex;
  background-color: #003566;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2.5rem;
    /* text-align: center; */
    color: #52ffb8;
    font-family: "Open Sans", sans-serif;
  }
`;
const Main = styled.div`
  min-height: 100vh;
  width: 95vw;
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
      /* background-color: #05b431; */
      background-color: #2cd402;
    }
    .Cancel {
      /* background-color: #e62c2c; */
      background-color: #ef394e;
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
