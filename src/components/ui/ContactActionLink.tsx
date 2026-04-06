type ContactActionLinkProps = {
  href: string;
  label: string;
};

export function ContactActionLink({ href, label }: ContactActionLinkProps) {
  return (
    <a href={href} className="contact-link">
      {label}
    </a>
  );
}
