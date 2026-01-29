
import HabitCardComponent, { CardDificultEnum } from "../../../../Components/HabitCard";

import { Container, MainContainer } from "./indexStyle";

const CardHabitsHome = () => {
  return (
    <MainContainer>
      <h3>
        Tenha o controle em suas mãos{" "}
        <b>criando seus próprios hábitos e classificando-os</b>
        de acordo com
        <b>seu nivel de dificuldade.</b>
      </h3>
      <Container>
        <HabitCardComponent
          description="30 minutos de estudos em ReactJs"
          cardDificult={CardDificultEnum.EASY}
        />
        <HabitCardComponent
          description="1 hora de estudo em ingês"
          cardDificult={CardDificultEnum.MEDIUM}
        />
        <HabitCardComponent
          description="Corrida ao entardecer"
          cardDificult={CardDificultEnum.HARD}
        />
      </Container>
    </MainContainer>
  );
};

export default CardHabitsHome;
