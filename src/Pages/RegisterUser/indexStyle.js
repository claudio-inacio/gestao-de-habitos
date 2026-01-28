import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* align-items: center; */

  @media (min-width: 1100px) {
    background-color: var(--color-primary-light);
    margin-top: 18px;
    height: calc(100vh - 100px);
  }
`;

export const RegistrationContent = styled.section`
  flex: 1;
  color: var(--color-text-light);
  h2 {
    width: 180px;
    margin: 60px auto 0;
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 25px;
  }

  @media (min-width: 400px) {
    h2 {
      width: auto;
    }
  }
  @media (min-width: 600px) {
    h2 {
      font-size: 2rem;
    }
  }
  @media (min-width: 1100px) {
    h2 {
      width: 280px;
      font-size: 2.5rem;
    }
  }
`;

export const ContainerForm = styled.div`
  width: 225px;
  margin: 20px auto 0;
  padding: 25px 30px;
  background-color: var(--color-primary-light);
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  @media (min-width: 400px) {
    width: 289px;
  }
  @media (min-width: 600px) {
    width: 389px;
  }
  @media (min-width: 768px) {
    width: 489px;
  }
  @media (min-width: 1100px) {
    width: 500px;
    background-color: unset;
    box-shadow: none;
    border-radius: 0;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  margin-bottom: 20px;
  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--color-text-light);
  }
  p::after {
    content: "";
    display: block;
    width: 75px;
    height: 2px;
    background-color: var(--bg-button);
  }

  @media (min-width: 600px) {
    padding: 0 45px;
  }
  @media (min-width: 1100px) {
    display: none;
  }
`;

export const IconFormHeader = styled.span`
  background-color: #000;
  padding: 6px 8px;
  border-radius: 100%;
`;

export const Form = styled.form`
  border-bottom: 1px solid var(--color-title-light);
  margin-bottom: 8px;

  input + input {
    margin-top: 15px;
  }
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  button {
    display: block;
    margin: 50px auto;
  }
  @media (min-width: 600px) {
    button {
      width: 78%;
    }
  }
  @media (min-width: 1100px) {
    border-bottom: none;
    input + input {
      margin-top: 35px;
    }
    button {
      width: 88%;
    }
  }
`;

export const InfoHasAccount = styled.p`
  text-align: center;
  font-size: 0.8rem;
  a {
    cursor: pointer;
    text-decoration: none;
    color: var(--color-tag-link);
  }
  @media (min-width: 600px) {
    font-size: 1rem;
  }
  @media (min-width: 1100px) {
    font-size: 1.2rem;
  }
`;

export const ContentImage = styled.figure`
  img {
    display: none;
  }
  @media (min-width: 1300px) {
    flex: 1;
    background-color: #fff;
    img {
      display: block;
      width: 65%;
      margin: 60px auto;
    }
  }
`;
