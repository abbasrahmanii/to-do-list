import React from "react";
import styled from "styled-components";

const Goal = ({ title, onDelete, onSelect, id, status }) => {
  return (
    <div>
      <Goals>
        <div id={id} onClick={onSelect}>
          <h4>
            {title}-{status ? "true" : "false"}
          </h4>
        </div>
        <button id={id} onClick={onDelete}>
          delete
        </button>
      </Goals>
    </div>
  );
};

const Goals = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35vw;
  color: #000;
  font-family: "Patrick Hand", cursive;
  font-size: 1.3rem;
  .selected {
    opacity: 0.7;
    text-decoration: line-through;
  }
  h4 {
    text-align: center;
    pointer-events: none;
    border: none;
    border-radius: 5px;
    padding: 0.4rem 0.3rem;
    background-color: #d0fef5;
    border: 1px solid #0099ff4c;
    margin: 0.5rem 0;
    width: 28vw;
  }
  button {
    width: 5vw;
    border: none;
    border: 2px solid #52aa86;
    border-radius: 5px;
    padding: 0.4rem 0.3rem;
    margin: 0.5rem 0;
    background: none;
    font-size: 1.3rem;
    color: #ef394e;
  }
  @media screen and (max-width: 768px) {
    width: 75vw;
    h4 {
      padding: 0.3rem 0.2rem;
      width: 55vw;
    }
    button {
      width: 17vw;
      padding: 0.3rem 0.2rem;
      margin: 0.5rem 0;
      font-size: 1.3rem;
    }
  }
`;

export default Goal;
