import { props } from "bluebird";
import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  border: 1px solid;
  border-color: ${props => props.theme.button.borderColor};
  border-radius: 6px;
  background-color: ${props => props.theme.button.backgroundColor};
  color: ${props => props.theme.button.textColor};
  padding: 5px 10px 4px;
  box-shadow: 5px 2px 20px 5px rgb(127, 129, 159);

  font-size: 1rem;
  letter-spacing: 0.7px;
  cursor: pointer;
  transition: opacity 0.4s linear, color 0.4s linear,
    background-color 0.4s linear;

  &:hover {
    opacity: 0.65s;
  }
`;
