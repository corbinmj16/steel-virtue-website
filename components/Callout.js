import Link from 'next/link';

export default function Callout() {
  return (
    <section className="callout layout-container">
      <div className="callout__content">
        <h2>Steel Virtue Group</h2>
        <p>When you shop with us, you’re going to get high quality customer service from real American veterans, former police, and guys who actually know what they’re talking about and will take the time to teach you about your firearms. We’ll never beat companies like Cabela’s or Academy Sports on price, and that’s not our goal. With Steel Virtue Group, you’re going to get a fair market price, and know that your family is in good hands.</p>
        <Link href='/about'>
          <a className='btn btn--white'>About Us</a>
        </Link>
      </div>

      <div className="callout__image">
        <img src='/images/logo.jpg' alt='Steel Virtue Group logo' />
      </div>
    </section>
  )
}