import { Content, Image, Description, Title, Price, Badge } from "./styles";

interface ComicCardProps {
  id: number;
  title: string;
  imageUrl: string;
  isRare: boolean;
  price: number;
}

function ComicCard({ title, imageUrl, isRare, price }: ComicCardProps) {
  return (
    <Content>
      <Image src={imageUrl} alt={`Capa da HQ ${title}`} />
      <Title>{title}</Title>
      <Description>
        <Price>R$ {price.toFixed(2)}</Price>
        <Badge $isRare={isRare}>{isRare ? "⭐ Raro" : "Comum"}</Badge>
      </Description>
    </Content>
  );
}

export default ComicCard;
