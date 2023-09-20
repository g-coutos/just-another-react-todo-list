import { styled, css } from "styled-components";

export const ListWrapper = styled.div`
  width: 100%;
  max-width: 360px;
  margin: 2rem auto;
  border: 1px solid #444;
  background-color: #fff;

  & > button {
    width: 10%;
  }
`;

export const ListHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #444;
`;

export const ListTitle = styled.p`
  margin: 0;
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
`;

export const ListClearButton = styled.button`
  width: 60px;
  border: 0;
  border-left: 1px solid #444;
  font-size: 1rem;
  font-weight: 600;
  background-color: ${($props) => ($props.disabled ? "#fff" : "#ee6055")};
  color: ${($props) => ($props.disabled ? "#444" : "#fff")};

  ${($props) =>
    !$props.disabled &&
    css`
      &:hover {
        border-top: 1px solid #444;
        transform: translate(-1px, -1px);
        box-shadow: 1px 1px 0 #444;
        transition: 0.1s;
        cursor: pointer;
      }

      &:not(:hover) {
        transition: 0.1s;
      }

      &:active {
        transform: translate(1px, 0);
        box-shadow: none;
        border: none;
        border-left: 1px solid #444;
        border-right: 1px solid #444;
        background-color: #fff;
        color: #444;
      }
    `}
`;

export const UnroderedList = styled.ul`
  margin: 0;
  padding-inline-start: 0;
`;

export const ListItem = styled.li`
  position: relative;
  padding: 1rem;
  border-bottom: 1px solid #444;
  list-style: none;
  word-break: break-all;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const ListDoneTaskButton = styled.button`
  width: 60px;
  max-height: 60px;
  position: absolute;
  height: 100%;
  border: 0;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #444;
  top: 0;
  right: 0;
  visibility: hidden;
  z-index: 2;
  font-size: 1rem;
  font-weight: 600;
  background-color: #75c2f6;
  color: #fff;

  ${ListItem}:hover & {
    visibility: visible;
    transition: 0.3s;
    cursor: pointer;
  }

  &:active {
    background-color: #fff;
    color: #444;
  }
`;

export const ListEmptyMessage = styled.li`
  padding: 1rem;
  text-align: center;
  color: #ccc;
`;
