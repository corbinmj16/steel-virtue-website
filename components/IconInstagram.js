export default function IconInstagram({ fill = '#bf4444', stroke = '#fff' }) {
  return (
    <a href="https://www.instagram.com/steelvirtue/" target="_blank" style={{ 'borderBottom': 'none' }} rel="noopener noreferrer">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke={stroke} fill={fill} d="M19.34 22H4.66C3.19 22 2 20.81 2 19.34V4.66C2 3.19 3.19 2 4.66 2H19.33C20.81 2 22 3.19 22 4.66V19.33C22 20.81 20.81 22 19.34 22Z"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke={stroke} fill={fill} d="M16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12Z"></path>
        <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1" stroke={stroke} fill={fill} d="M19 5.5C19 5.78 18.78 6 18.5 6C18.22 6 18 5.78 18 5.5C18 5.22 18.22 5 18.5 5C18.78 5 19 5.22 19 5.5Z"></path>
      </svg>
    </a>
  )
}