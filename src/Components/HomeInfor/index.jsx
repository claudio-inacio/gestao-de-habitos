import UndrawCreateHabit from "../../svg/image_undraw_to_createhabit.svg";

import UndrawManageSoftware from "../../svg/undraw_to_manage_software.svg";

import { Container } from "./indexStyle";

const HomeInfor = () => {
  return (
    <Container>
      <div>
        <h2>Crie sua lista de habitos</h2>
        <p>
          A plataforma oferece um layout simples onde você pode criar cards com
          o nome do habito, a categoria e sua dificuldade, tendo uma ornenação
          do habito mais facil para o mais dificil.
        </p>
        <img
          src={UndrawCreateHabit}
          alt="imagem de um celular do undraw com um usuario ao lado"
        />
      </div>
      <div>
        <h2>Gerenciamento do software</h2>
        <p>
          O software está programado para notificar o usuário sobre os habitos
          que ele criou, para lembra-lo se está realmente trabalhando naquele
          habito
        </p>
        <img
          src={UndrawManageSoftware}
          alt="uma folha com lista de tarefas a ser realizada"
        />
      </div>
    </Container>
  );
};

export default HomeInfor;
