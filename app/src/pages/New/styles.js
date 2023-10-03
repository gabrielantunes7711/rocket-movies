import styled from "styled-components";
import { Grid } from "../../styles/Grid";

export const Container = styled.div``;
export const ContentWrapper = styled.div`
  margin: 4rem 0;

  ${Grid} {
    & > a {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 2.4rem;
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 3.6rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }

  form {
    & > div:first-of-type {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 4rem;
      margin-bottom: 4rem;

      & > :last-child {
        grid-column: 1/-1;
      }
    }

    & > span {
      display: block;
      margin-bottom: 2.4rem;
      color: ${({ theme }) => theme.colors.secondaryTextColor};
      font-size: 2rem;
    }
  }
`;
export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.4rem;
  width: 100%;
  padding: 1.6rem;
  margin-bottom: 4rem;
  border-radius: 1rem;
  background-color: #0d0c0f;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;

  button {
    max-width: calc(50% - 4rem);
  }
`;
