import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { IconMenu, IconClose, Search } from '.';


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      if (isOpen) {
        toggleMenu();
      }
    });
  });

  

  return (
    <header>
      <nav className='nav layout-container'>
        <Link href='/'>
          <div className='nav__logo'>
            <p>Steel Virtue Group</p>
          </div>
        </Link>
        
        <div className="nav__items">
          <button
            className="nav__button nav__menu-button"
            onClick={toggleMenu}
            aria-label="Open Menu"
          >
            <IconMenu />
          </button>

          <div className={`nav__bg-mobile ${isOpen ? 'open' : ''}`}>
            <button
              className="nav__button nav__close-button"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <IconClose />
            </button>
            <ul>
              <li>
                <Link href='/products'>
                  Products
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  About
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  Contact
                </Link>
              </li>
              <li className="nav__search">
                <Search />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}