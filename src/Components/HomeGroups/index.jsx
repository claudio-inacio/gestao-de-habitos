import CardGroup from "../CardGroup";
import { Container, List } from "./indexStyle";

const HomeGroups = () => {
  return (
    <Container>
      <h2>
        Conecte-se com grupos e amplie sua rede com pessoas que desejam alcançar
        as mesmas metas que as suas!
      </h2>
      <List>
        <CardGroup
          groups={{
            name: "Grupo React",
            description: "Estudar e aperfeiçoar o desenvolvimento com react",
            category: "Aprendizado",
          }}
        />
        <CardGroup
          groups={{
            name: "Caminhada Matinal",
            description: "Realizar uma caminhada de manhã por no minimo 1 hora",
            category: "Saúde",
          }}
        />
        <CardGroup
          groups={{
            name: "Bate-Papo",
            description: "Marcar uma resenha com os amigos toda sexta",
            category: "social",
          }}
        />
      </List>
    </Container>
  );
};
export default HomeGroups;
