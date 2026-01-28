import styled from "styled-components";

export const Container = styled.section`
  width: 70%;
  max-width: 308px;
  margin: 10px;
  padding: 25px;
  margin: 5px;
  display: flex;
  background-color: var(--color-primary-light);
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  cursor: pointer;
`;

export const LineBox = styled.div`
  width: 6px;
  height: 179px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: var(--color-tag-level-easy);
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  color: var(--color-text-light);

  h3 {
    max-width: 15ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 20px;
    font-size: 1.1rem;
  }
  h5 {
    margin-bottom: 8px;
    font-size: 0.95rem;
  }
  p {
    max-width: 15ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.85rem;
    font-weight: lighter;
    margin-bottom: 10px;
    span {
      color: var(--color-tag-level-easy);
    }
  }
`;
export const GroupMembersContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: start;

    div {
      width: 31px;
      height: 31px;
      background-color: #d9d9d9;
      margin-right: 5px;
      border-radius: 100%;
      margin-bottom: 20px;
    }
  }
  p {
    font-size: 0.75rem;
  }
`;
