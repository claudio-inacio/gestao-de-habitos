import styled from "styled-components";
import imageExplicative from "../../../../images/gesta-habitos-explicative.png";

export const HomeTitleContainer = styled.div`
  display: flex;
  min-width: 300px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  
  justify-content: start;
  @media (min-width: 1099px) {
    flex-direction: row;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  height: 100%;
  width: 100%;

  justify-content: center;
  @media (min-width: 1099px) {
    width: 50%;
    height: 200px;
    align-items: start;
    padding-left: 200px;
  }

  h2 {
    font-size: 1.5rem;

    @media (min-width: 1099px) {
      text-align: start;
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--color-title-light);
    }
  }

  span {
    @media (min-width: 1099px) {
      text-align: center;
      font-weight: 200;
      color: var(--color-text-light);
      font-size: 15px;
      margin-left: 8px;
    }
  }
`;

export const BoxButton = styled.div`
  display: flex;
  min-width: 150px;
  width: 60%;
  gap: 10px;
  flex-direction: column;
  width: 60%;

  svg {
    margin-left: 10px;
  }
  @media (min-width: 1099px) {
    flex-direction: row;
    width: 60%;
  }
`;

export const DivImage = styled.div`
  background-size: contain;
  img{

    width: 350px;
    height: 300px;
  }
  @media (min-width: 1099px) {
    img {

      width: 350px;
      height: 300px;

    }
  }
`;
