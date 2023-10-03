import styled from "styled-components";
import { Grid } from "../../styles/Grid";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  & > ${Grid} {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    max-width: 116rem;
    margin: 0 auto;
    padding: 4.7rem 2rem 6rem;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;

  h2 {
    color: #fff;
    font-size: 3.2rem;
    font-weight: 400;
  }

  button {
    max-width: max-content;
  }
`;

export const CardsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & > div {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    width: 100%;
    height: 100%;
    padding-right: 0.8rem;
    overflow: auto;
  }
`;
