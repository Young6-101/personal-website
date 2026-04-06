type NavItemLinkProps = {
  href: string;
  label: string;
};

export function NavItemLink({ href, label }: NavItemLinkProps) {
  return (
    <a href={href} className="nav-link">
      {label}
    </a>
  );
}
