import {
  Container,
  Title,
  Image,
  Description,
  PriceBadgeRow,
  Price,
  Badge,
  BuyButton,
  Info,
} from "./styles";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getMockComics, Comic } from "../../services/mockApi";
import { CartContext } from "../../contexts/CartContext";

function ComicDetail() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [comic, setComic] = useState<Comic | null>(null);
  const [loading, setLoading] = useState(true);
  const isRare = location.state?.isRare ?? false;
  const { addToCart, items } = useContext(CartContext);

  useEffect(() => {
    async function fetchComic() {
      setLoading(true);
      const comics = await getMockComics();
      const found = comics.find((c) => String(c.id) === id);
      setComic(found || null);
      setLoading(false);
    }
    fetchComic();
  }, [id]);

  if (loading) return <Container>Carregando...</Container>;
  if (!comic) return <Container>Quadrinho não encontrado.</Container>;

  function handleBuy() {
    if (!comic) return;
    addToCart({
      id: comic.id,
      title: comic.title,
      imageUrl: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      quantity: 1,
      price: comic.prices[0].price,
      isRare: isRare,
    });
    console.log("Quadrinho adicionado ao carrinho:", comic.title);
    console.log("Carrinho atualizado:", items);
    navigate("/cart");
  }

  return (
    <Container>
      <Image
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
      <Info>
        <Title>{comic.title}</Title>
        <Description>{comic.description || "Sem descrição."}</Description>
        <PriceBadgeRow>
          <Price>R$ {comic.prices[0].price.toFixed(2)}</Price>
          <Badge $rare={isRare}>{isRare ? "⭐ Raro" : "Comum"}</Badge>
        </PriceBadgeRow>
        <BuyButton onClick={handleBuy}>Comprar</BuyButton>
      </Info>
    </Container>
  );
}

export default ComicDetail;
