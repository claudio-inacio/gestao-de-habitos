import { Container } from "./indexStyle";

const CardBlog = ({ image, url, link }) => {
  return (
    <Container>
      <figure>
        <img src={image} alt="" />
      </figure>
      <article>
          <a href={url} target="_blank">{link}</a>
      </article>
    </Container>
  );
};

export default CardBlog;
