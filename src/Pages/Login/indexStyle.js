import styled from "styled-components";
import imageLogin from "../../svg/image_login.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: start;
  @media (min-width: 1099px) {
    flex-direction: row;
  }
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 70px;
  text-align: center;
  min-width: 320px;
  width: 100%;
  height: calc(95vh - 60px);
  
  @media (min-width: 1099px) {
    width: 50%;
  }
`;

export const DivTitleMobile = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  p {
    margin-top: 20px;
  }
`;

export const ContainerForm = styled.div`
  box-shadow: 1px 1px 4px var(--bg-color-menu-mobile-light);
  min-height: 400px;
  max-height: 400px;
  border-radius: 5px;
  max-width: 100%;
  width: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding-top: 20px;
  padding-bottom: 40px;

  align-items: center;
  justify-content: space-around;

  span {
    color: #0064c0;
    text-decoration: none;
  }
`;

export const DivImage = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 1099px) {
    flex: 1;
    background: url(${imageLogin}) no-repeat center;
    background-size: contain;
    width: 300px;
    height: 450px;
    max-height: 100%;
    max-width: 100%;
  }
`;
