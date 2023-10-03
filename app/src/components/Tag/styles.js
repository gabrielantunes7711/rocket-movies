import styled from "styled-components";

export const Container = styled.span`
  padding: 0.5rem 1.6rem;
  border-radius: 0.8rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondaryFont};
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.tertiaryBgColor};
`;
