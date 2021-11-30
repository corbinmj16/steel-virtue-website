import ContactForm from './ContactForm';
import { IconLocation, IconPhone, IconInstagram } from '../components';

export default function ContactCard() {
  return (
    <div className="contactCard content-container">
      <div className="contactCard__content">
        <p>Talk to me before you go to the big gun stores! I’ll find you the best price for your firearm.</p>

        <ul>
          <li>
            <IconLocation />
            <span>
              Indian Land, South Carolina
            </span>
          </li>
          <li>
            <IconPhone />
            <span>
              <a href="tel:518-650-4081">
                (518) 650-4081
              </a>
            </span>
          </li>
          <li>
            <IconInstagram fill='#bf4444' stroke="#fff" />
            <span>Instagram</span>
          </li>
        </ul>
      </div>

      <div className="contactCard__form">
        <ContactForm />
      </div>
    </div>
  );
}