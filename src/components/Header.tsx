import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';
import logo from '../assets/logo.svg';

type HeaderProps = {
  title: string;
};

// className callback so the active link gets highlighted
const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link active' : 'nav-link';

export function Header({ title }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header className="site-header">
      <div className="site-header__brand">
        <img src={logo} alt="" width={32} height={32} />
        <p className="site-header__title">{title}</p>
      </div>

      <nav className="site-nav">
        {/* end on Home, otherwise "/" would count as active on every page */}
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/skills" className={linkClass}>
          Skills
        </NavLink>
        <NavLink to="/events" end className={linkClass}>
        Events
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </nav>

      <span className="header-likes">♥ {likes}</span>
    </header>
  );
}