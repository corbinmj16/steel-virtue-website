import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>About | Steel Virtue Group</title>
        <meta name="description" content="Welcome to Steel Virtue Group, where we’re serious about Firearms, Ammunition, Training, and Tactical Gear Solutions!" />
      </Head>

      <main style={{'marginBottom': '90px'}}>
        <section className='layout-container'>
          <h1 className='section-title'>About Steel Virtue Group</h1>
          <div className='content-container'>
            <h2 className="h4 section-header" style={{ 'textAlign': 'center' }}>Welcome to Steel Virtue Group, where we’re serious about Firearms, Ammunition, Training, and Tactical Gear Solutions!</h2>

            <p>In 2016, an idea was born out of a passion for firearms and tactical training that was acquired by our founders’ backgrounds in the U.S. Marine Corps, SWAT Law Enforcement, Diplomatic Security, and Private Military Contracting with over 20 combined years of experience in real-life scenarios both overseas and domestic. We didn’t want just “another gun shop” name or business model, and we ultimately chose the name Steel Virtue Group, because it embodies the principles upon which we run our business:</p>

            <ul className="content-list">
              <li><b>Steel:</b> strong, disciplined citizen gun-owners are what the American way of life was founded upon; the ability to hunt, protect oneself, loved ones, and those who can’t help themselves, from imminent threats is a basic American tenant</li>
              <li><b>Virtue:</b> fair, equitable, and ethical business practices; any success we have in our business is a direct result of God’s grace and kindness to us</li>
            </ul>

            <h4 className="section-header">Service-Disabled Veteran-Owned Small Business</h4>
            <p>Our business is certified by the VA as a Service-Disabled Veteran-Owned Small Business, and we take that certification seriously. We are focused on helping customers find the right firearm, but we don’t stop there – through our partner company <a href="https://www.turnertactics.com/" target="_blank" rel="noopener noreferrer">Turner Tactics</a>, we also offer on-site training courses that teach individuals about gun cleaning, general firearm knowledge for pistols, shotguns, and tactical/hunting rifles, as well as concealed carry handgun certifications for both North and South Carolina from expert instructors. <a href="https://www.turnertactics.com/" target="_blank" rel="noopener noreferrer">Turner Tactics</a> can also teach you how to setup and accessorize your tactical rifle in a way that makes sense, and Turner Tactics also offers private security consultations.</p>
            
            <h4 className="section-header">Firearm Mentoring from Real American Patriots</h4>
            <p>When you shop with us, you’re going to get high quality customer service from real American veterans, former police, and guys who actually know what they’re talking about (most of the time) and will take the time to teach you about your firearms. We’ll never beat companies like Cabela’s or Academy Sports on price, and that’s not our goal. With Steel Virtue Group, you’re going to get a fair market price, and know that your family is in good hands. Is it OK if we make a small profit? We think we’re worth the extra 4 dollars. Finally, ALL our employees are required to carry loaded firearms at all times on premises, and they also know how to shoot! – this is the complete opposite of companies that enforce dangerous policies forbidding firearm carry by their employees, such as Cabela’s, Academy Sports, and Sportsman’s Warehouse.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
