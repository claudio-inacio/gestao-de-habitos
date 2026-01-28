import styled from "styled-components";

export const ContainerPageHabits = styled.div``;

export const ContainerCreateHbits = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 32px;
  @media (min-width: 768px) {
    justify-content: space-between;
    width: 700px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
    width: 1000px;
    margin: 0 auto;
  }
`;
export const InformationsHabits = styled.div`
  margin-top: 32px;
  width: 300px;
  padding: 32px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }
  p {
    font-weight: 200;
    font-size: 0.85rem;
    line-height: 1.2rem;
  }

  img {
    margin-top: 22px;
  }
`;

export const ContainerFomr = styled.div`
  height: 100%;
  @media (max-width: 768px) {
    display: none;
  }

  form {
    height: 100%;
    width: 400px;
    background-color: var(--color-primary-light);
    box-shadow: 2px 2px 15px black;
    padding: 32px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

    select {
      width: 100%;
    }
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 769px) {
    display: none;
  }
`;
