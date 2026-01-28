import styled from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  overflow-y: scroll;

  @media (min-width: 600px) {
    width: 70%;
    height: 300px;
    flex-direction: row;
    overflow-x: auto;
    section {
      min-width: 300px;
      margin: 0 10px 20px 0;
    }
    ::-webkit-scrollbar {
      width: 18px;
      height: 18px;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--color-span-light);
      width: 8px;
      height: 8px;
      border-radius: 8px;
    }
  }
`;

export const LengthGoals = styled.div`
  margin-top: 32px;
  width: 250px;
  span {
    font-size: 0.65rem;
    color: var(--color-span-light);
  }
`;

export const Box = styled.div`
  display: flex;

  button {
    margin-left: 92px;
    font-size: 1.2rem;
    font-weight: 800;
    background: transparent;
  }
`;
