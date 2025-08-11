import axios from 'axios';
import md5 from 'blueimp-md5';

const baseURL = 'https://gateway.marvel.com/v1/public';

const publicKey = '5abc687784f7c453f50e6f74b2c6accb';
const privateKey = '3aa889fcceb6a732f038f56adc2004e04a76ff18';

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
