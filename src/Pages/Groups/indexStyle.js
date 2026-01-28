import styled from "styled-components";

export const Container = styled.section`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
    color: var(--color-text-light);
  }
  img {
    display: block;
    width: 100%;
    margin: 15px auto 30px;
    max-width: 327px;
  }
`;
export const ContentInfoCreateGroup = styled.div`
  h4 {
    width: 80%;
    margin: 5px auto;
    max-width: 100%;
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: var(--color-text-light);
  }
  @media (min-width: 839px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div {
    flex: 1;
  }
`;
export const ContainerList = styled.div`
  margin: 20px 0;

  h3 {
    margin-bottom: 10px;
    color: var(--color-text-light);
  }

  button{
    font-weight: 600;
    font-size: 16.75px;
  }

  @media (max-width: 814px) {
    max-width: 320px;
    width: 320px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerInput = styled.div`
  margin: 10px 0 15px;
  @media (max-width: 814px) {
    max-width: 320px;
    width: 320px;
  }

  border: 1px solid black;
  border-radius: 15px;
  width: 450px;
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 1px 3px black;

  input {
    border: none;
    border-radius: 15px;
    padding-left: 25px;
    width: 100%;
  }
  input:focus,
  textarea:focus {
    outline: 0;
  }
`;

export const ListGroups = styled.div`
  @media (max-width: 814px) {
    max-width: 250px;
    width: 250px;

    .icon {
      display: none;
    }
  }
  //  width: 70%;
  //  display: flex;
  //  flex-direction: row;
  //  overflow-y: hidden;
  background-color: #D2D2D2;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  width: 99%;
  padding: 5px;
  margin: 5px;
  justify-content: space-around;
`;

export const Carrossel = styled.div`
  @media (max-width: 814px) {
    display: none;
  }
  max-width: 69vw;
  max-height: 300px;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  div{
    margin-right:10px;
  }
`;

export const MobileList = styled.div`
  @media (min-width: 815px) {
    display: none;
  }

  max-width: 320px;
  width: 300px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
`;

export const DivButtons = styled.div`
       width: 350px;
       display: flex;
       align-items: center;
       justify-content: space-around;
`;
