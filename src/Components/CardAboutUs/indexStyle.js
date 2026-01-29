import styled from "styled-components";

export const Container = styled.div`
  width: 700px;
  max-width: 100%;
  padding: 20px;

  margin: auto;
  background: #fff;
  border-radius: 16px;

  box-shadow:
    0px 6px 16px rgba(120, 104, 230, 0.15),
    0px 12px 32px rgba(120, 104, 230, 0.08);

  display: flex;
  flex-direction: column;
  gap: 16px;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0px 8px 20px rgba(120, 104, 230, 0.18),
      0px 16px 40px rgba(120, 104, 230, 0.12);
  }
  @media (max-width: 800px) {
    width: 80%;
    max-width: 80%;

    
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Picture = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text-light);
  }

  span {
    font-size: 0.85rem;
    color: #777;
  }
`;

export const Description = styled.div`
  p {
    font-size: 0.9rem;
    color: #555;
    line-height: 1.5;
    text-align: left;
    margin: 0;
  }
`;

export const ContainerCircles = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Circle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ color }) => color};

  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

  a {
    color: #fff;
  }

  &:hover {
    transform: scale(1.08);
    opacity: 0.9;
  }
`;
