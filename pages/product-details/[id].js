import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { ProductCard } from '../../components';
import newLineText from '../../utils/newLineText';

export async function getServerSideProps(context) {
  // product id
  const { req } = context;
  const { id } = context.params;

  // get the product from api
  const resp = await axios({
    method: 'GET',
    url: `https://steelvirtuegroup.salesbinder.com/api/2.0/items.json?itemIdNumber=${id}`,
    auth: {
      username: process.env.API_USERNAME,
      password: process.env.API_PASSWORD,
    }
  });

  const { item } = resp.data;
  const categoryId = item[0].category_id;

  // get the product from api
  const otherProductsResp = await axios.get(`http://${req.headers.host}/api/productByCategory?id=${categoryId}&limit=3`);
  const { data } = await otherProductsResp;
  // remove first item in the array
  data.shift();

  return {
    props: {
      product: item[0],
      similarProducts: data ,
    }
  }
}

export default function ProductDetailPage({ product, similarProducts }) {
  return (
    <div>
      <Head>
        <title>{product.name} | Steel Virtue Group</title>
      </Head>

      <main className="layout-container">
        <h1 className="section-title h2">{product.name}</h1>

        <div className="productDetail">
          {product.images && product.images[0] && (
            <div className="productDetail__image">
              <Image
                src={product.images[0].url_original}
                alt={product.name}
                width={400}
                height={200}
                layout='responsive'
                objectFit='contain'
                objectPosition='center'
                quality={30}
              />
            </div>
          )}
          <div className="productDetail__content">
            {product.price > 0
              ? <p className="productDetail__price">${product.price.toFixed(2)}</p>
              : <p className="productDetail__no-price">Call for price</p>
            }
            <ul>
              <li className="productDetail__list-item">
                <span>Category:</span> {product.category.name}
              </li>
              <li className="productDetail__list-item">
                <span>In stock:</span> {product.quantity}
              </li>
            </ul>
            <a href="tel:518-650-4081" className="productDetail__btn btn btn--primary">Call to buy</a>
          </div>
        </div>

        {product.description && (
          <section>
            <h3 className="section-title">Description</h3>
            <div className="content-container">
              {newLineText(product.description)}
            </div>
          </section>
        )}
        
        {similarProducts.length > 0 && (
          <section className="productDetail__other-products">
            <h3 className="section-title">Other Products You May Like</h3>
            <div className="productCards">
              {similarProducts.map((product) => <ProductCard key={product.id} product={product} /> )}
            </div>
          </section>
        )}
      </main>

    </div>
    
  )
}