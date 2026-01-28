import { useModal } from "../../Providers/ControlModal";
import { useGroup } from "../../Providers/Grupos";
import { useGoals } from "../../Providers/Metas";

import CardGoals from "../CardGoals";
import { Box, Container, LengthGoals, List } from "./indexStyle";

const ListGoals = () => {
  const { member } = useGroup();
  const { goals } = useGoals();
  const { controlModalGoalsAdd } = useModal();
  return (
    <Container>
      <Box>
        <h3>Metas</h3>
        {member && (
          <button onClick={controlModalGoalsAdd}>
            <span>+</span>
          </button>
        )}
      </Box>

      <LengthGoals>
        <span>Numero de metas: {goals.length} </span>
      </LengthGoals>
      <List>
        {goals.map((value) => (
          <CardGoals key={value.id} goals={value} />
        ))}
      </List>
    </Container>
  );
};

export default ListGoals;
