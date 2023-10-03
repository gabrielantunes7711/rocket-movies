import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  border-radius: 1rem;

  textarea {
    width: 100%;
    height: 100%;
    background-color: transparent;
    resize: none;
    border: none;
  }
`;
