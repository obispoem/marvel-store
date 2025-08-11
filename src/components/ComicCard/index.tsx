import { Content, Image, Description, Title, Price, Badge } from "./styles";
import { Link } from 'react-router-dom';

interface ComicCardProps {
  id: number;
  title: string;
  imageUrl: string;
  isRare: boolean;
  price: number;
  description: string;
}

function ComicCard({ id, title, imageUrl, isRare, price, description }: ComicCardProps) {

  return (
    <Link 
    to={`/comic/${id}`}
    state={{ isRare }}
    >
      <Content key={id}>
        <Image src={imageUrl} alt={`Capa da HQ ${title}`} />
        <Title>{title}</Title>
        <Description>
          <Price>R$ {price.toFixed(2)}</Price>
          <Badge $isRare={isRare}>{isRare ? "⭐ Raro" : "Comum"}</Badge>
        </Description>
      </Content>
    </Link>
  );
}

export default ComicCard;
