import React, { useState } from "react";
import styled from "styled-components";
import angleDownSrc from "../img/angleDown.png";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className={isOpen ? "" : "hide"}
    >
      <QuestionContainer>
        {props.question}
        <img className={isOpen ? "rotate" : ""} src={angleDownSrc} alt="" />
      </QuestionContainer>

      <AnswerContainer className={isOpen ? "" : "hide"}>{props.answer}</AnswerContainer>
    </Container>
  );
}

export default Dropdown;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  background: #ffffff;
  box-shadow: 0px 48px 32px rgba(168, 168, 168, 0.12);
  border: 2px solid #6d24ff;
  width: auto;
  border-radius: 8px;
  cursor: pointer;
  opacity: 1;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0px 24px 16px rgba(168, 168, 168, 0.24);
  }
`;

const QuestionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  img {
    height: 100%;
    transition: 0.2s ease all;
    &.rotate {
      transform: rotate(180deg);
    }
  }
`;

const AnswerContainer = styled.div`
  margin-top: 1rem;
  font-size: 16px;
  &.hide {
    display: none;
  }
`;
