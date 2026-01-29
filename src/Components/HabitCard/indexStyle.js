import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: white;
  width: 300px;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  background: #fff;
  border-radius: 12px;

  box-shadow:
    0px 6px 16px rgba(120, 104, 230, 0.15),
    0px 12px 32px rgba(120, 104, 230, 0.08);

  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;
  padding: 10px 15px;
  span {
    padding: 5px 6px;
  }
`;

export const HeadContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;

  img {
    width: 80px;
    height: 80px;
  }
`;

export const SubHeadContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 12px;
  }
`;
