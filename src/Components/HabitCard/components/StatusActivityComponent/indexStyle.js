import styled from "styled-components";

export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  width: 100%;

  p {
    font-size: 0.75rem;
    color: #555;
    margin: 0;

    span {
      color: ${({ color }) => color};
      font-weight: 500;
    }
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: end;
    

  }

  img {
    width: 40px;
    height: 40px;
    padding: 0px;
    margin: 0px;
  }
`;


export const Line = styled.div`
  width: 82px;
  height: 2px;
  border-radius: 2px;

  background: linear-gradient(
    90deg,
    ${({ color }) => color} 0%,
    ${({ color }) => color} 45%,
    rgba(0, 0, 0, 0) 100%
  );
`;
