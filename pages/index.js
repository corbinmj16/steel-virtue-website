import Head from 'next/head'
import { Callout, ContactCard, HeroCard, FeaturedItems } from '../components/'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Steel Virtue Group</title>
        <meta name="description" content="Steel Virtue Group is a firearms and NFA Class 3 items dealer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroCard />

      <main className='layout-container'>
        <FeaturedItems />

        <Callout />

        <section>
          <h2 className="section-title h1">Have more questions?</h2>
          <ContactCard />
        </section>
      </main>
    </>
  )
}
