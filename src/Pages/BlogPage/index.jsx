import CardBlog from "../../Components/CardBlog";
import MoreInfor from "../../Components/MoreInfor";

import Image1Blog from "../../svg/image1Blog.svg";

import TakeCareMindBlog from "../../svg/Take_care_mind_blog.svg";
import { Article, Container } from "./indexStyle";

const Blog = () => {
  return (
    <Container>
      <Article>
        <h1>Blog sobre TDAH</h1>
        <img
          src={TakeCareMindBlog}
          alt="poster com frase dizendo para amar sua mente"
        />
        <article>
          <p>
            O TDAH é um transtorno associado com as funções executivas do nosso
            cérebro, essas funções são responsáveis pela execução de tarefas
            simples e diversas tais como cozinhar, escrever, planejar o nosso
            dia e até controlar as nossas emoções. Por se tratar de uma
            disfunção que impacta a maneira como operamos no mundo, a criança ou
            o jovem que possui TDAH apresenta sinais bem característicos:
            impulsividade, dificuldade de concentração e problemas para
            administrar atividades do dia a dia de forma organizada.
          </p>
          <p>
            Quem tem TDAH costuma ter um foco razoável para assuntos do seu
            interesse, porém, para os temas e atividades que não fazem parte
            desse círculo, o indivíduo demonstra uma grande desmotivação. Na
            visão de Ana Beatriz Barbosa, autora do livro Mentes Inquietas, “ o
            TDAH não é uma doença em si, mas um funcionamento cerebral em que a
            pessoa tem uma hiperatividade mental, ou seja, ela pensa mais em
            diversos assuntos em uma velocidade maior”.
          </p>
          <p>
            Atualmente, estima-se que 5% da população mundial apresenta o
            transtorno. É preciso apurar a discussão e capacitar todos aqueles
            que estão em contato com o TDAH, para auxiliar quem tem o transtorno
            a desenvolver mecanismos adaptativos e viver com mais qualidade de
            vida. Na escola, os educadores podem auxiliar tanto o estudante
            quanto seus pais a identificarem o TDAH e a buscar ajuda
            especializada.
          </p>
        </article>
      </Article>

      <MoreInfor/>
    </Container>
  );
};

export default Blog;
