import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

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

export const Container = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  margin: 12px auto;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 1000px;

    margin: 12px auto;
  }
`;

export const Square = styled.div`
  width: 44px;
  height: 44px;
  background: ${(props) => props.color};
`;

export const Circle = styled.div`
  width: 65px;
  height: 65px;
  background: #e4e3e3;
  border-radius: 50%;
`;
