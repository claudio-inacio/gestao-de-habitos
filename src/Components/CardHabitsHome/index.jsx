import {
  Container,
  Square,
  Circle,
  SubContainer,
  HeadContainer,
  Line,
  SubHeadContainer,
  MainContainer,
  StatusActivity,
} from "./indexStyle";

const CardHabitsHome = () => {
  return (
    <MainContainer>
      <h2>
        Tenha o controle em suas mãos criando seus próprios hábitos e
        classificando-os de acordo com seu nivel de dificuldade.
      </h2>
      <Container>
        <SubContainer>
          <HeadContainer>
            <SubHeadContainer>
              <Square color={"#71CB75"} />
              <p>Easy</p>
            </SubHeadContainer>
            <Circle />
          </HeadContainer>

          <p>30 minutos de</p>
          <p> estudos em</p>
          <p>ReactJS</p>
          <StatusActivity margin={"36px"}>
            <p>Meta Concluída</p>
            <Line width={"120px"} color={"#71CB75"} />
          </StatusActivity>
        </SubContainer>
        <SubContainer>
          <HeadContainer>
            <SubHeadContainer>
              <Square color={"#FACB32"} />
              <p>Medium</p>
            </SubHeadContainer>
            <Circle />
          </HeadContainer>

          <p>1 hora de estudo</p>
          <p> em inglês</p>
          <StatusActivity margin={"60px"}>
            <p>Em andamento: termina 3 dias</p>
            <Line width={"85px"} color={"#FACB32"} />
          </StatusActivity>
        </SubContainer>
        <SubContainer>
          <HeadContainer>
            <SubHeadContainer>
              <Square color={"#E54B73"} />
              <p>Hard</p>
            </SubHeadContainer>
            <Circle />
          </HeadContainer>

          <p>Praticar Calistenia</p>
          <StatusActivity margin={"80px"}>
            <p>Em andamento: termina 15 dias</p>
            <Line width={"82px"} color={"#E54B73"} />
          </StatusActivity>
        </SubContainer>
      </Container>
    </MainContainer>
  );
};

export default CardHabitsHome;
