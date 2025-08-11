export interface Comic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  prices: { type: string; price: number }[];
  description: string;
}

export const getMockComics = async (offset: number = 0): Promise<Comic[]> => {
  // Simulando delay da internet
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const mockComics: Comic[] = Array.from({ length: 20 }, (_, i) => ({
    id: offset + i + 1,
    title: `Quadrinho ${offset + i + 1}`,
    thumbnail: {
      path: 'https://cdn.marvel.com/u/prod/marvel/i/mg/c/e0/688a5ead645dd/clean',
      extension: 'jpg',
    },
    prices: [{ type: 'printPrice', price: 3.99 + (i % 5) }],
    description: `Descrição do quadrinho ${offset + i + 1} Et nobis similique ea facere nihil rem atque similique. Qui iste facere non possimus culpa aut minus ducimus. Et iste illum non eveniet vero aut maiores veniam aut maiores exercitationem.`,
  }));

  return mockComics;
};