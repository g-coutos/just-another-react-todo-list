import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #444;
  background-color: #fff;
`;

export const HeaderTitle = styled.p`
  margin: 0;
  padding: 1rem 3rem;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;
