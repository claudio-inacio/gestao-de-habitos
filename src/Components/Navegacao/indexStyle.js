import styled from "styled-components";

export const NavegationCustumizer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;

  height: 100vh;
  width: 240px;
  padding: 0 32px;

  background-color: var(--bg-color-menu-mobile-light);

  transform: ${({ open }) =>
    open ? "translateX(0)" : "translateX(100%)"};

  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};

  transition: transform 0.4s ease, opacity 0.3s ease;

  z-index: 1000;

  ul {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    li a {
      color: var(--color-primary-light);
      text-decoration: none;
    }
  }

  @media screen and (min-width: 768px) {
    position: static;
    height: auto;
    width: auto;
    padding: 0;

    transform: none;
    opacity: 1;
    pointer-events: auto;
    background: transparent;

    ul {
      flex-direction: row;
      margin-top: 0;
      gap: 24px;

      li a {
        color: var(--color-text-light);
        font-weight: 600;
      }
    }
  }
`;
