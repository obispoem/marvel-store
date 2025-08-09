import { styled } from "styled-components";

export const Content = styled.div`
  background-color: #3b0404ff;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 8px;
  transition: transform 0.15s;

  /* Largura 100% para ocupar a célula do grid */
  width: 100%;
  max-width: 220px; /* opcional, limite para não ficar gigante em telas largas */

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
  aspect-ratio: 2/3;
`;


export const Title = styled.h2`
font-size: 16px;
font-weight: 600;
margin: 12px 0;
padding: 0 4px;
color: #fff;
overflow: hidden;
width: 100%;
text-overflow: ellipsis;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0;
`;

export const Price = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #ffd000ff;
`;

export const Badge = styled.span<{ $isRare: boolean }>`
  display: inline-block;
  background-color: ${({ $isRare }) => ($isRare ? "#ffd000ff" : "#ffffffff")};
  color: ${({ $isRare }) => ($isRare ? "#000" : "#000000ff")};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-family: sans-serif, "Arial";
`;