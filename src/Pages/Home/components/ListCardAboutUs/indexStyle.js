import styled from "styled-components";

export const Container = styled.section`
  margin-top: 80px;
  padding: 40px 0px;
  text-align: center;
  align-items: center;
  background-color: var(--color-second-light);
  width: 100%;
  max-width: 100%;
  h2 {
    font-size: 1.8rem;
    margin-bottom: 40px;
    color: var(--color-text-light);
  }

  > div {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;


  }
`;
