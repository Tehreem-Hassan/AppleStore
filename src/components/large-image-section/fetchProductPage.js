const API_BASE_URL = 'http://localhost:1337/api';

export async function getProductPage() {
  const response = await fetch(`${API_BASE_URL}/product-pages?populate=*`);
  const data = await response.json();
  return data.data[0];
}