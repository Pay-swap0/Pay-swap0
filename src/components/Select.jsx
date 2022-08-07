import React from "react";
import styled from "styled-components";

function Select(props) {
  return (
    <Container>
      <Label>
        {props.label} <span>*</span>
      </Label>
      <SelectContainer onChange={props.onChange} required placeholder={props.placeholder}>
        {props.options.map((option, key) => {
          return (
            <option value={option} key={key}>
              {option}
            </option>
          );
        })}
      </SelectContainer>
    </Container>
  );
}

export default Select;

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

const SelectContainer = styled.select`
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
`;
