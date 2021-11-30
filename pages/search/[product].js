import axios from 'axios';
import { ProductCard } from '../../components';

export async function getServerSideProps(context) {
  // product id
  const { product } = context.params;

  // get the product from api
  const resp = await axios({
    method: 'GET',
    url: `https://steelvirtuegroup.salesbinder.com/api/2.0/items.json?s=${product}&compact=true`,
    auth: {
      username: process.env.API_USERNAME,
      password: process.env.API_PASSWORD,
    }
  });
  const { items, item } = resp.data;
  let inStockItems = null;
  if (item) {
    inStockItems = item.filter((item) => item.quantity > 0);
  } else {
    inStockItems = items.filter((item) => item.quantity > 0);
  }

  return {
    props: {
      products: inStockItems,
      searchTerm: product,
    }
  }
}

export default function SearchProduct({ products, searchTerm }) {
  return (
    <div className="layout-container">
      <h1 className="section-title">Showing results for: "{searchTerm}"</h1>
      <div className="productResultHeader">
        <p className="productResultHeader__result-count">Showing {products.length} results</p>
      </div>
      
      <div className="productCards">
        {products.map((product, index) => <ProductCard product={product} key={index} /> )}
      </div>
    </div>
  )
}