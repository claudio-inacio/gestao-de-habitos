import HabitsList from "../../../../images/gestao-habitos-check.png";
import HabitsCheck from "../../../../images/gestao-habitos-list.png";
import iconCheck from "../../../../images/check-icon.png";
import iconNotification from "../../../../images/notification-icon.png";
import ActionsExplicative from "../ActionsExplicative";
import { Container } from "./indexStyle";

const HomeInfo = () => {
  return (
    <Container>
      <ActionsExplicative
        sectionImage={HabitsCheck}
        iconImage={iconCheck}
        title="Crie sua lista de habitos"
        description="Crie e organize sua lista de hábitos em um layout simple, definindo categorias e níveis de dificuldade de forma rapida e fácil."
      />
      <ActionsExplicative
        sectionImage={HabitsList}
        iconImage={iconNotification}
        title="Gerenciamento do software"
        description="Receba lembretes automáticos sobre seus hábitos e acompanhe seu progresso diário para evoluir de maneira consistente."
      />
    </Container>
  );
};

export default HomeInfo;
