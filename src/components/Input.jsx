import React from "react";
import styled from "styled-components";

function Input(props) {
  return (
    <Container>
      <Label>
        {props.label} <span>{props.mandatory ? "*" : ""}</span>
      </Label>
      <InputContainer
        onChange={props.onChange}
        name={props.name}
        id={props.id}
        type={props.type ? props.type : "text"}
        maxlength={props.maxlength ? props.maxlength : 50}
        minlength={props.minlength ? props.minlength : 1}
        required
        placeholder={props.placeholder}
        className={props.className}
      />
    </Container>
  );
}

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
  span {
    color: #ff4e4e;
  }
`;

const InputContainer = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 14px;
  gap: 8px;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 1px solid #6d24ff;
  box-shadow: 0px 2px 0px #6d24ff;
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
  &:focus {
    outline: solid 1px #6d24ff;
  }
  &.error {
    background: #fef1f2;
    border: 1px solid #e25965;
    box-shadow: 0px 2px 0px #e25965;
  }
`;
