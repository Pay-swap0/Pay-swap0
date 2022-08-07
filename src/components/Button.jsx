import React from "react";
import styled from "styled-components";

function Button(props) {
  return <ButtonContainer onClick={props.onClick}>{props.content}</ButtonContainer>;
}

export default Button;

const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
  gap: 8px;
  background: linear-gradient(180deg, #b060ff 0%, #7e21f3 100%);
  box-shadow: 0px 8px 12px rgba(152, 66, 249, 0.36);
  border-radius: 104px;
  transition: all 0.2s ease;
  border: 0;
  color: white;
  font-family: TTNormsPro;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 4px rgba(152, 66, 249, 0.36);
  }

  &:active {
    box-shadow: 0px 2px 2px rgba(152, 66, 249, 0.5);
  }

  &.contained {
    width: 100%;
  }
`;
