import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
// import { Link, Route } from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <a href="https://telegram.me/AbbasRN">
          <FontAwesomeIcon icon={faTelegram} size="2x" />
        </a>
        <a href="https://instagram.com/abbasrahmani98">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://linkedin.com/in/abbas-rahmani-27123319a">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
      </div>

      {/* <h2>a</h2>
      <h2>b</h2>
      <h2>c</h2> */}
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  min-height: 100vh;
  width: 5vw;
  background-color: #39a2db;
  display: flex;
  div {
    min-height: 80vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    a {
      color: #003566;
      padding: 0.5rem;
      border-radius: 50%;
      &:hover {
        background-color: #a2dbfa;
        color: #053742;
      }
    }
  }
`;

export default Footer;
