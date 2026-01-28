import styled from "styled-components";

export const HeaderCustomizer = styled.header`
  height: 60px;
  width: 100%;
  min-width: 370px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  box-shadow: 1px 1px 15px var(--bg-color-menu-mobile-light);

  position: relative;
  z-index: 1100; 

  figure {
    height: 100px;
    display: flex;
    align-items: center;
    margin-top: 15px;

    img {
      height: 60px;
    }
  }

  div {
    height: 30px;
    width: 60px;
    position: relative;
    z-index: 1100;

    svg {
      cursor: pointer;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;
