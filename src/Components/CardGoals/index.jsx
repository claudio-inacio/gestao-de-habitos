import { useGoals } from "../../Providers/Metas";
import { useModal } from "../../Providers/ControlModal";
import {
  Container,
  Difficulty,
  GoalIsCompleted,
  PercentageAlreadyMade,
  Title,
} from "./indexStyle";
import { useGroup } from "../../Providers/Grupos";

const CardGoals = ({ goals }) => {
  const { deleteGoalToGroup } = useGoals();
  const { member } = useGroup();
  const { controlModalGoalEdit } = useModal();
  return (
    <Container>
      <Title>{goals.title}</Title>
      <Difficulty>{goals.difficulty}</Difficulty>
      <PercentageAlreadyMade>{goals.how_much_achieved}%</PercentageAlreadyMade>
      <GoalIsCompleted isCompleted={goals.achieved}>
        {goals.achieved ? "Concluido" : "Não concluido"}
      </GoalIsCompleted>

      {member && (
        <>
          <button onClick={() => deleteGoalToGroup(goals.id)}>deletar</button>
          <button onClick={() => controlModalGoalEdit(goals.id)}>Editar</button>
        </>
      )}
    </Container>
  );
};
export default CardGoals;
