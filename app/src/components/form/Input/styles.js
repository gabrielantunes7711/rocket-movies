import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  height: 5.6rem;
  width: 100%;
  padding-inline: 1.6rem;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  border-radius: 1rem;

  input {
    flex: 1;
    width: 100%;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }

  svg {
    flex-shrink: 0;
  }

  button {
    background-color: transparent;
    border: none;
    flex-shrink: 0;
    color: inherit;
  }
`;
