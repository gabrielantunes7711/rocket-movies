import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: 100%;
  padding: 1.7rem 3.2rem;
  border-radius: 10px;
  background: ${({ theme, $alt }) =>
    !$alt ? theme.colors.primaryColor : "#0D0C0F"};
  border: none;
  color: ${({ theme, $alt }) =>
    !$alt ? theme.colors.secondaryBgColor : theme.colors.primaryColor};
  text-align: center;
  font-family: Roboto Slab;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
