import type { ContactLink } from '../types';
import { ContactActionLink } from './ui/ContactActionLink';

type ContactSectionProps = {
  links: ContactLink[];
};

export function ContactSection({ links }: ContactSectionProps) {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <p className="contact-intro">Interested in collaborating or just want to say hello? I'd love to hear from you.</p>
        <div className="contact-links">
          {links.map((link) => (
            <ContactActionLink key={link.label} href={link.href} label={link.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
