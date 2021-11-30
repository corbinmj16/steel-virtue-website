import Head from 'next/head';
import { ContactCard } from '../components';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact | Steel Virtue Group</title>
        <meta name="description" content="Contact Steel Virtue Group before you go to the bit gun stores. We'll find you the best price for your firearm." />
      </Head>

      <section className="layout-container">
        <h1 className='section-title'>Contact Steel Virtue Group</h1>

        <ContactCard />
      </section>
    </div>
  )
}