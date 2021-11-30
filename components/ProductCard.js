import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className='productCard'>
      {product.images && product.images[0] && (
        <div className='productCard__image'>
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

      <div className="productCard__container">
        <h4 className='productCard__title'>
          <Link href={`/product-details/${product.item_number}`}>
            {product.name}
          </Link>
        </h4>
        
        <div className='productCard-footer'>
          <ul className='productCard__ctas'>
            <li>
              <a href="tel:518-650-4081" className='btn btn--primary'>
                Call to Buy
              </a>
            </li>
            <li>
              <Link href={`/product-details/${product.item_number}`}>
                <a className='btn btn--alt'>
                  Details
                </a>
              </Link>
            </li>
          </ul>
          {product.price > 0
            ? <p className='productCard__price'>${product.price.toFixed(2)}</p>
            : <p className='productCard__no-price'>Call for price</p>
          }
        </div>
      </div>
      
    </div>
  )
}