import CardBlog from "../CardBlog";

import Image1Blog from "../../svg/image1Blog.svg";
import Image2Blog from "../../svg/ImageBlog2.svg";
import Image3Blog from "../../svg/ImageBlog3.svg";

import { Container } from "./indexStyle";

const MoreInfor = () => {
  return (
    <Container>
      <h2>Acompanhe também outros blogs e noticias sobre TDAH</h2>
      <div>
        <CardBlog
          image={Image1Blog}
          url="https://tdahdescomplicado.com/qual-o-melhor-profissional-para-diagnosticar-e-tratar-o-tdah/"
          link="QUAL O MELHOR PROFISSIONAL PARA DIAGNOSTICAR E TRATAR O TDAH?"
        />
        <CardBlog
          image={Image2Blog}
          url="https://tdahdescomplicado.com/criacao-de-filhos-com-tdah-pode-custar-ate-5x-mais/"
          link="Criação de filhos com TDAH pode custar até 5x mais"
        />
        <CardBlog
          image={Image3Blog}
          url="https://tdahdescomplicado.com/conheca-a-redacao-final-da-lei-para-tdah-e-dislexia-pl-7081-10//"
          link="Conheça a redação final da lei para TDAH e Dislexia – PL 7081/10"
        />
      </div>
    </Container>
  );
};

export default MoreInfor;
