import { IconInstagram } from '../components';

export default function Footer() {
  const date = new Date();

  return (
    <footer>
      <div className='layout-container'>
        <p>&copy;{date.getFullYear()} Steel Virtue Group, LLC</p>
        <IconInstagram fill='#fff' stroke="#bf4444" />
      </div>
    </footer>
  )
}