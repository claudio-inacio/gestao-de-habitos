import styled from "styled-components";

export const ButtonComponent = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: var(--color-second-light);
  background-color: var(--bg-button);
  width: 100%;
  height: 40px;
  padding: 15px;
  font-size: 1rem;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 0px #000000;

  .fikMRy button {
    margin-bottom: 55px;
  }

  ${(props) =>
    props.disabled &&
    `
      background-color: #cfcfcf;
      color: #7a7a7a;
      cursor: not-allowed;
      opacity: 0.7;
      box-shadow: none;
    `}
`;
