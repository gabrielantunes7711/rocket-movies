import styled from "styled-components";
import { Grid } from "../../styles/Grid";
import { Container as Tag } from "../../components/Tag/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  & > ${Grid} {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-block: 4rem;

    & > a {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 2.4rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  flex: 1;

  & > div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-right: 2rem;
  }

  p {
    text-align: justify;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2.4rem;

  h2 {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-size: 3.6rem;
  }

  button {
    width: max-content;
    margin-left: auto;
    padding: 1rem 4rem;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  img {
    width: 1.6rem;
    height: 1.6rem;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    overflow: hidden;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.secondaryFont};
  }

  svg {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 4rem;

  ${Tag} {
    background-color: ${({ theme }) => theme.colors.primaryBgColor};
  }
`;
