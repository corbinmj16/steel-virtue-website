import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import Loader from "react-loader-spinner";
import newLineText from "../utils/newLineText";
import { fetcher } from "../utils/fetcher";

export default function HeroCard() {
  const { data, error } = useSWR(`/api/productById?id=1872`, fetcher);
  const product = data;

  if (error) {
    return <section className="heroCard">
    <p>No item found.</p>
  </section>
  };
  if (!data) {
    return <section className="heroCard heroCard--loading">
      <Loader
        type="Oval"
        color="#BF4444"
        height={100}
        width={100}
      />
    </section>
  }

  return (
    <section className="heroCard">
      {product.images && product.images[0] && (
        <div className="heroCard__image">
          <Image
            src={product.images[0].url_original}
            alt={product.name}
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            quality={30}
          />
        </div>
      )}

      <div className="heroCard__content">
        <h2 className="heroCard__title">
          <Link href={`/product-details/${product.item_number}`}>
            {product.name}
          </Link>
        </h2>

        <div className="heroCard__description">
          {newLineText(product.description)}
        </div>

        <div className="heroCard__footer">
          {product.price > 0 
            ? <p className="heroCard__price">${product.price.toFixed(2)}</p>
            : <p className="heroCard__no-price">Call for price</p>
          }
          <ul className="heroCard__ctas">
            <li>
              <a href="tel:518-650-4081" className="btn btn--primary">Call to buy</a>
            </li>
            <li>
              <Link href={`/product-details/${product.item_number}`}>
                <a className="btn btn--alt">Details</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </section>
  )
}