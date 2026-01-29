import styled from "styled-components";

export const Container = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  h3 {
    width: 340px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    margin: 16px auto;
    text-align: start;

    @media screen and (min-width: 768px) {
      width: 758px;
      text-align: start;
      font-size: 1.5rem;
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 768px;
    margin: 16px auto;
    justify-content: space-around;
  }
`;
