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
    // console.log(goal);
    if (goal.target.classList.value === "") {
      goal.target.classList.add("selected");
    } else {
      goal.target.classList.remove("selected");
    }
  };

  const filterTodoHandler = (e) => {
    // console.log(e.target.value);
    // textGoal.forEach((todo) => {
    //   console.log(todo);
    // switch (e.target.value) {
    //   case "All":
    //     todo.style.display = "none";
    // }
    // });
  };

  return (
    <Container>
      <GlobalStyles />
      <div>
        <Main>
          <Nav>
            <h1>Todo List</h1>
          </Nav>
          <div className="todo-input">
            <input
              type="text"
              placeholder="Enter Your Goal"
              onChange={inputHandler}
              value={inputText}
              onKeyPress={keyCodeHandler}
            />
            <select onClick={filterTodoHandler} name="todos" id="todo-select">
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Uncompleted">Uncompleted</option>
            </select>
          </div>
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
    color: #52ffb8;
    font-family: "Open Sans", sans-serif;
  }
  @media screen and (max-width: 768px) {
    min-height: 12vh;
    h1 {
      font-size: 2rem;
    }
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
  .todo-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35vw;
    margin: 2rem 0rem 3rem 0rem;
    input {
      width: 22vw;
      padding: 1rem 1.2rem;
      border-radius: 5px;
      font-family: "Patrick Hand", cursive;
      font-size: 1.2rem;
      &::placeholder {
        color: #4a051c;
        font-family: "Patrick Hand", cursive;
      }
    }
    select {
      width: 10vw;
      padding: 1rem 1.2rem;
      border-radius: 5px;
      font-family: "Patrick Hand", cursive;
      font-size: 1.2rem;
      /* -webkit-appearance: none;
      -moz-appearance: none; */
      /* appearance: none; */
      outline: none;
      border: none;
    }
  }
  .buttons {
    width: 35vw;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    button {
      padding: 0.8rem 1rem;
      color: #fff;
      width: 30%;
      border-radius: 5px;
      font-family: "Open Sans", sans-serif;
    }
    .Add {
      background-color: #2cd402;
    }
    .Cancel {
      background-color: #ef394e;
    }
  }
  hr {
    width: 30%;
    height: 0.1rem;
    background-color: #52ffb8;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 768px) {
    width: 90vw;
    .todo-input {
      width: 85%;
      margin: 1rem 0rem 2rem 0rem;
      input {
        width: 55vw;
        padding: 0.8rem 1rem;
        font-size: 1rem;
      }
      select {
        width: 19vw;
        padding: 0.8rem 1rem;
        font-size: 1rem;
      }
    }
    .buttons {
      width: 85%;
      margin-bottom: 1.2rem;
      button {
        padding: 0.7rem 0.3rem;
        width: 19vw;
        border-radius: 5px;
      }
    }
    hr {
      width: 85%;
    }
  }
`;
export default App;
