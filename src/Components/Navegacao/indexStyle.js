import styled from "styled-components";

export const NavigationCustomizer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 260px;

  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(14px);
  box-shadow: -12px 0 32px rgba(0, 0, 0, 0.1);

  transform: ${({ open }) =>
    open ? "translateX(0)" : "translateX(100%)"};

  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};

  transition:
    transform 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s ease;

  z-index: 1000;

  ul {
    margin-top: 96px;
    margin-right: 60px;

    display: flex;
    flex-direction: column;
    gap: 28px;

    li {
      list-style: none;

      a {
        position: relative;
        display: inline-block;

        font-size: 1rem;
        font-weight: 500;
        color: var(--color-primary-light);
        text-decoration: none;

        transition: color 0.3s ease;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background-color: var(--color-primary-light);
          transition: width 0.3s ease;
        }

        &:hover {
          color: var(--color-primary-dark);

          &::after {
            width: 100%;
          }
        }

        &.active {
          font-weight: 600;
          color: var(--color-primary-dark);

          &::after {
            width: 100%;
          }
        }
      }
    }
  }

  /* DESKTOP */
  @media (min-width: 768px) {
    position: static;
    height: auto;
    width: auto;

    transform: none;
    opacity: 1;
    pointer-events: auto;

    background: transparent;
    backdrop-filter: none;
    box-shadow: none;

    ul {
      flex-direction: row;
      align-items: center;
      margin-top: 0;
      padding: 0;
      gap: 32px;

      li a {
        color: var(--color-text-light);

        &::after {
          background-color: var(--color-text-light);
        }
      }
    }
  }
`;
