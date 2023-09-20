import { styled } from "styled-components";

export const InputWrapper = styled.div`
  max-width: 360px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px;
  border-bottom: 2px;
  border-style: solid;
  border-color: #444;
  border-radius: 5px;
  background-color: #fff;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  color: #444;
`;

export const InputFieldFlex = styled.div`
  display: flex;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #444;
  border-right: 0;
  font-size: 1rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-style: italic;
  }
`;

export const InputFieldButton = styled.button`
  display: inline;
  padding: 0.8rem;
  border: 1px solid #444;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  background-color: #60d394;
  color: #fff;

  &:hover {
    transform: translate(-1px, -1px);
    box-shadow: 1px 1px 0 #444;
    transition: 0.1s;
    cursor: pointer;
  }

  &:not(:hover) {
    transition: 0.1s;
  }

  &:active {
    transform: translate(0, 0);
    box-shadow: none;
    border-left: 1px solid #444;
    background-color: #fff;
    color: #444;
  }
`;
