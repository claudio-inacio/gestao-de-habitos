import styled from "styled-components";

export const Container = styled.div`


  width: 100%;
  max-width: 100%;
  span {
    text-align: left;
    font-size: 0.7rem;
    margin-left: 8px;
    color: rgba(255, 2, 2, 0.8);
    font-size: 0.9rem;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid var(--color-text-light);

  input {
    background-color: transparent;

    opacity: ${({ disabled }) => (disabled ? "30%" : "100% ")};
    border: 0;
    max-width: 100%;
    flex: 1;
    font-size: 0.8rem;
    margin-bottom: 10px;
    color: var(--color-text-light);

    &::placeholder {
      color: rgba(32, 32, 32, 0.8);
    }

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 1000px var(--color-primary-light) inset;
      box-shadow: 0 0 0 1000px var(--color-primary-light) inset;
      -webkit-text-fill-color: var(--color-text-light);
      transition: background-color 9999s ease-in-out 0s;
    }
  }

  svg {
    margin-right: 10px;
  }

  @media (min-width: 500px) {
    input {
      font-size: 1rem;
    }
  }
`;
