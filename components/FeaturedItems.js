import Link from 'next/link';
import FeaturedRifles from './FeaturedRifles';
import FeaturedPistols from './FeaturedPistols';
import FeaturedAmmo from './FeaturedAmmo';

export default function FeaturedItems() {

  return (
    <>
      <section>
        <h3 className='section-title h1'>Featured Firearms</h3>
        <div className='productCards'>
          <FeaturedRifles />
          <FeaturedPistols />
        </div>
        <Link href="/products">
          <a className="btn btn--primary btn--max-width">
            View All
          </a>
        </Link>
      </section>

      <section>
        <h3 className='section-title h1'>Featured Ammunition</h3>
        <div className='productCards'>
          <FeaturedAmmo />
        </div>
        <Link href="/products">
          <a className="btn btn--primary">
            View All
          </a>
        </Link>
      </section>
    </>
  )
}
