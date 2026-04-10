import type { NavItem } from '../types';
import { NavItemLink } from './ui/NavItemLink';

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  return (
    <nav className="main-nav" aria-label="Main">
      <div className="nav-brand">YL.</div>
      <div className="nav-links">
        {items.map((item) => (
          <NavItemLink key={item.href} href={item.href} label={item.label} />
        ))}
      </div>
    </nav>
  );
}
