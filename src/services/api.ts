import axios from 'axios';
import md5 from 'md5';

const baseURL = 'https://gateway.marvel.com/v1/public';

const publicKey = 'PUBLIC_KEY';
const privateKey = 'PRIVATE_KEY';

export const getComics = async (offset: number = 0) => {
  const ts = Number(new Date());
  const hash = md5(ts + privateKey + publicKey);

  const api = axios.create({
    baseURL: baseURL,
    params: {
      ts,
      apikey: publicKey,
      hash
    }
  });

  const response = await api.get('/comics', {
    params: { offset, limit: 20 }
  });

  console.log(response.data.data.results);
  return response.data.data.results;
};
