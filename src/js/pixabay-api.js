import axios from 'axios';

export default function getImagesByQuery(query) {
  const searchParam = new URLSearchParams({
    key: '38288513-b7843bc63d8f48176142cf2e3',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const URL = `https://pixabay.com/api/`;

  return axios
    .get(URL, { params: searchParam })
    .then(response => response.data);
}
