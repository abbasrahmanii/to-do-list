import React from "react";
import styled from "styled-components";

const Goal = ({ title, onDelete, id }) => {
  return (
    <div>
      <Goals onClick={onDelete} id={id}>
        <h4>{title}</h4>
      </Goals>
    </div>
  );
};

const Goals = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border: 2px solid #52ffb8;
  border-radius: 5px;
  padding: 0.4rem 0.3rem;
  background-color: #d0fef5;
  border: 1px solid #0099ff4c;
  margin: 0.5rem 0;
  width: 30vw;
  h4 {
    font-family: "Patrick Hand", cursive;
    font-size: 1.3rem;
    color: #000;
    text-align: center;
    pointer-events: none;
  }
`;

export default Goal;
