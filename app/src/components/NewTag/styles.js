import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  width: max-content;
  color: ${({ theme }) => theme.colors.textColorWhite};
  font-family: ${({ theme }) => theme.fonts.secondaryFont};
  padding: 1.6rem;
  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.colors.secondaryBgColor};
  border-radius: 1rem;
  border: ${({ $isNew }) => ($isNew ? "2px dashed #948f99" : "none")};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: 700;
  }
`;
