import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.tvmaze.com/',
});

const getAll = () => api.get('/shows');

const searchByTerm = (term = '') => api.get(`/search/shows?q=${term}`);

const getShowDetails = (id) =>api.get(`/shows/${id}?embed[]=cast&embed[]=seasons`);

export default {
  getAll,
  searchByTerm,
  getShowDetails,
};
