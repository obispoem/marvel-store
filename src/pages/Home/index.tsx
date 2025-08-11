import { useState, useEffect } from 'react';
import ComicCard from '../../components/ComicCard';
import { getMockComics, Comic } from '../../services/mockApi';
import { HomeContainer, MainContent, ComicsGrid, LoadingMessage, ErrorMessage } from "./styles";

function Home() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadComics = async () => {
      try {
        setIsLoading(true);
        const data = await getMockComics();
        setComics(data);
      } catch (err) {
        setError('Erro ao carregar quadrinhos');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadComics();
  }, []);

  if (isLoading) {
    return (
      <HomeContainer>
        <LoadingMessage>Carregando quadrinhos...</LoadingMessage>
      </HomeContainer>
    );
  }

  if (error) {
    return (
      <HomeContainer>
        <ErrorMessage>{error}</ErrorMessage>
      </HomeContainer>
    );
  }

  return (
    <HomeContainer>
      <MainContent>
        <ComicsGrid>
          {comics.map((comic) => (
            <ComicCard
              key={comic.id}
              id={comic.id}
              title={comic.title}
              imageUrl={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              isRare={Math.random() < 0.1}
              price={comic.prices[0].price}
              description={comic.description}
            />
          ))}
        </ComicsGrid>
      </MainContent>
    </HomeContainer>
  );
}

export default Home;