import styled from "styled-components";

export const ContainerInfor = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 62px;
  margin-bottom: 32px;
  border-bottom: solid 2px;
  padding-bottom: 22px;

  h1 {
    font-size: 1.5rem;
    text-align: center;
    max-width: 100ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > div {
    margin-top: 26px;
    display: flex;
    justify-content: space-between;
    padding: 0px 12px;
    div {
      width: 200px;
      display: flex;
      flex-direction: column;

      p {
        margin-bottom: 12px;
        font-size: 0.85rem;
      }
    }

    button {
      width: 100px;
      height: 30px;
      background-color: ${(props) =>
        props.member
          ? "var(--color-tag-level-hard)"
          : "var(--color-tag-level-easy)"};
    }
  }

  @media screen and (min-width: 768px) {
    width: 668px;
    margin: 62px auto;
  }
`;

export const ContainerLists = styled.div`
  @media (max-width: 600px) {
    width: 70%;
    margin: 0 auto;
    display: flex;
    align-items: stretch;
    overflow-x: auto;
    section {
      min-width: 300px;
      margin: 0 15px 20px 0;
    }
  }
  @media (max-width: 472px) {
    width: 90%;
    section {
      min-width: 200px;
      margin: 0 15px 20px 0;
    }
  }
`;
