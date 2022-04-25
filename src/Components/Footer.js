import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <a href="https://telegram.me/Web_developer_98">
          <FontAwesomeIcon icon={faTelegram} size="2x" />
        </a>
        <a href="https://instagram.com/abbasdotdev">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://linkedin.com/in/abbas-rahmani-27123319a">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  min-height: 100vh;
  width: 5vw;
  background-color: #39a2db;
  div {
    min-height: 100vh;
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
        color: #ff0051;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 10vw;
    div a {
      padding: 0.4rem;
    }
  }
`;

export default Footer;
