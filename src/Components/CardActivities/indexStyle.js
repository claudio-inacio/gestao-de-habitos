import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 70%;
  max-width: 400px;
  margin: 16px auto;
  padding: 15px;
  gap: 15px 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas:
    "Title button "
    " GroupCode WhenWillItBeDone";

  @media (max-width: 472px) {
    grid-template-areas: auto;
  }
`;

export const ButtonInfoContentEditEndDelet = styled.div`
  grid-area: ButtonInfoContentEditEndDelet;
  grid-column: 3/4;
  justify-self: flex-start;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  justify-content: space-around;
  button {
    margin: 0 8px;
  }
`;

export const Title = styled.h3`
  grid-area: Title;
  grid-column: 1;
  max-width: 28ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  justify-self: flex-start;
  color: var(--color-title-light);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 472px) {
    max-width: 15ch;
  }
`;

export const WhenWillItBeDone = styled.span`
  grid-area: WhenWillItBeDone;
  grid-column: 2/4;
  justify-self: flex-end;
  padding: 5px;
  color: var(--color-primary-light);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--color-tag-level-easy);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  height: 20px;

  @media (max-width: 472px) {
    font-size: 0.8rem;
  }
`;

export const GroupCode = styled.span`
  grid-area: GroupCode;
  grid-column: 1/4;
  align-self: flex-end;
  width: 20px;
`;
