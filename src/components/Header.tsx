import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';

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
      <p className="site-header__title">{title}</p>

      <nav className="site-nav">
        {/* end on Home, otherwise "/" would count as active on every page */}
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/skills" className={linkClass}>
          Skills
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </nav>

      <span className="header-likes">♥ {likes}</span>
    </header>
  );
}
