import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: white;
  width: 400px;
  height: 330px;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  padding: 10px 20px;
  img {
    height: 350px;
    width: 350px;
    margin-right: 12px;
  }
  @media (max-width: 1000px) {
    width: 80%;
    height: 330px;

    img {
      display: none;
    }
  }

`;
export const ExplicativeSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;

  img {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 1000px) {
    img {
      display: block;
    }
  }
`;
export const TittleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 270px;
  margin-top: 25px;
  align-items: start;

  h3 {
  }

  span {
    font-size: 15px;
  }
`;
