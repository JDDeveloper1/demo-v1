import Link from "next/link";
import Image from 'next/image';
//styles
import styles from './navbar.module.css';
//components
import HeaderNavLink from './HeaderNavLink';

import Logo from '../public/img/logo-texto.svg'

const menuItems = [
  { label: 'Documentos', url: '/documents' },
  { label: 'Servicios', url: '/services' },
  { label: 'Conócenos', url: '/about' },
  { label: 'Blog', url: '/blog' },
  { label: 'Contacto', url: '/contact' },
  { label: 'FAQ', url: '/faq' },
];

function Navbar() {
  return (
    <div>
      <nav className={styles.navHeader}>
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
        </div>

        <div>
          <ul>
            {menuItems.map(({ url, label }, index) => (
              <li key={index}>
                <HeaderNavLink href={url}>{label}</HeaderNavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.redLink}>
          <Link href="/clientes">
            área clientes
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar