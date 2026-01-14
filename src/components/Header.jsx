import './Header.css'
import logoWhite from '../assets/logo_white.png'

function Header({ activePage = 'Gaceta' }) {
  const navItems = [
    { name: 'Gaceta', path: '/gaceta' },
    { name: 'Artículos', path: '/articulos' },
    { name: 'Categorías', path: '/categorias' },
    { name: 'Imágenes', path: '/imagenes' }
  ]

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <img src={logoWhite} alt="gaceta Queer" className="login-logo" />
        </div>

        {/* Navegación */}
        <nav className="header-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={`header-nav-link ${activePage === item.name ? 'active' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
