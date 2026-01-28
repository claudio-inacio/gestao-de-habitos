import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 260px;
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
    "Titulo Difficulty "
    " GoalIsCompleted PercentageAlreadyMade";
`;
export const Title = styled.h3`
  grid-area: Titulo;
  grid-column: 1;
  max-width: 28ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--color-title-light);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Difficulty = styled.span`
  grid-area: Difficulty;
  grid-column: 2/4;
  justify-self: flex-end;
  padding: 5px;
  color: var(--color-primary-light);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--color-tag-level-easy);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  height: 20px;
`;
export const PercentageAlreadyMade = styled.span`
  grid-area: PercentageAlreadyMade;
  grid-column: 1;
  align-self: flex-end;
  width: 20px;
`;

export const GoalIsCompleted = styled.div`
  grid-area: GoalIsCompleted;
  grid-column: 2/4;
  justify-self: flex-end;
  border-radius: 10px;
  padding: 5px;
  color: var(--color-primary-light);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${(props) =>
    props.isCompleted
      ? "var(--color-tag-level-easy)"
      : "var(--color-tag-level-hard)"};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  height: 20px;
  font-size: 0.75rem;
`;
