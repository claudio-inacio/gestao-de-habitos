import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100%;

  span {
    text-align: left;
    margin-left: 8px;
    color: rgba(255, 2, 2, 0.8);
    font-size: 0.9rem;
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--color-text-light);

  input {
    background-color: transparent;
    border: 0;
    flex: 1;
    font-size: 0.8rem;
    margin-bottom: 10px;
    color: var(--color-text-light);
    opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: rgba(32, 32, 32, 0.8);
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

export const Spinner = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 8px;

  border: 2px solid rgba(0, 0, 0, 0.2);
  border-top-color: var(--color-primary);
  border-radius: 50%;

  animation: ${spin} 0.8s linear infinite;
`;
