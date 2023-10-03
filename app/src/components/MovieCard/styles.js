import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 3rem;
  background-color: ${({ theme }) => theme.colors.primaryBgColor};
  border-radius: 1.6rem;

  h3 {
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }

  p {
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    font-family: ${({ theme }) => theme.fonts.secondaryFont};
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 3rem;
`;
