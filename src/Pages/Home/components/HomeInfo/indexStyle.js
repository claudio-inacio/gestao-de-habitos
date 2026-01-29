import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--color-second-light);
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 350px;
  padding: 30px 0px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
