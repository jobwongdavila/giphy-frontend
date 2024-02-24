import axios from 'axios';

type ResponseData = {
  id: string;
  url: string;
  preview: string;
};
const search = async (query: string): Promise<ResponseData[]> => {
  const { REACT_APP_API_URL } = process.env;
  const response = (await axios.get(`${REACT_APP_API_URL}/search`, { params: { q: query } })).data;
  const { data } = response;

  return data;
};

export default search;
