import styled from "styled-components";

export const StyledForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  gap: 15px;
  height: 150px;
  justify-content: flex-end;

  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const RemermberText = styled.p`
  text-align: end;
  font-size: 14px;
  color: var(--text-color-secondary);
  span {
    color: #0064c0;
    text-decoration: none;
  }
`;
export const RgisterText = styled.p`
  text-align: left;
  font-size: 14px;
  color: var(--text-color-secondary);
  span {
    color: #0064c0;
    text-decoration: none;
  }
`;
