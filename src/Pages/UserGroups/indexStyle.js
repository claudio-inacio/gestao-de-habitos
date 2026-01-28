import styled from "styled-components";

export const ContainerPage = styled.div`
  @media (max-width: 607px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-width: 320px;
  }
`;

export const InfoPage = styled.div`
  @media (max-width: 606px) {
    margin-top: 20px;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 25px;
  padding-top: 15px;
  color: var(--color-text-light);
`;
export const Info = styled.div`
  h1 {
    font-size: 1.5rem;
    text-align: center;
  }
  p {
    font-size: 0.9rem;
    width: 80%;
    margin: 20px auto;
  }
  @media (min-width: 606px) {
    padding: 20px;
    h1 {
      font-size: 1.6rem;
      text-align: left;
    }
    p {
      font-size: 1.2rem;
      width: 100%;
    }
  }
`;

export const DivFigure = styled.div`
  @media (max-width: 606px) {
    display: none;
  }

  img {
    width: 250px;
    height: 250px;
  }
`;

export const ContainerGroups = styled.div`
  @media (max-width: 608px) {
  }
  h2 {
    margin: 8px auto;
  }
  color: var(--color-text-light);
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // max-width: 1200px;
  width: 100%;
`;

export const ListGroups = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  height: 400px;

  padding-top: 50px;

  @media (min-width: 607px) {
    //flex-direction: row;
    //height: 260px;
    ////width: 100%;
    ////background-color: red;
    ////max-width: 1500px;
    ////min-width: 600px;
    //margin-top: 0px;
    //width: 3800px;
    //padding-top: 0px;

    max-height: 300px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    overflow: auto;
    scroll-behavior: smooth;

    max-width: 69vw;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ContainerList = styled.div`
  @media (max-width: 606px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const ContainerListMobile = styled.div`
  @media (min-width: 607px) {
    display: none;
  }
`;
