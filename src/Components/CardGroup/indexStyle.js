import styled from "styled-components";

export const Container = styled.section`
  width: 70%;
  max-width: 308px;
  margin: 10px;
  padding: 25px;
  margin: 5px;
  display: flex;
  background-color: var(--color-primary-light);
  border-radius: 12px;

  box-shadow:
    0px 6px 16px rgba(120, 104, 230, 0.15),
    0px 12px 32px rgba(120, 104, 230, 0.08);

  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;
  padding: 10px 15px;
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
  justify-content: start;
  color: var(--color-text-light);

  h3 {
    max-width: 15ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

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

      border-radius: 100%;
      margin-bottom: 20px;
    }
  }
  p {
    font-size: 0.75rem;
  }
  img {
    width: 40px;
    height: 40px;

    margin-bottom: 20px;
  }
`;
