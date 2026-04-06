import { ContactSection } from './components/ContactSection';
import { EducationSection } from './components/EducationSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { InspirationSection } from './components/InspirationSection';
import { MetadataStrip } from './components/MetadataStrip';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { SectionHeader } from './components/SectionHeader';
import { SkillsBlock } from './components/SkillsBlock';
import { BackgroundDecor } from './components/BackgroundDecor';
import {
  contactLinks,
  educationItems,
  inspirationItems,
  metadata,
  navItems,
  projects,
  skillCategories,
  skillNodes,
} from './data/portfolioData';
import { usePortfolioAnimations } from './hooks/usePortfolioAnimations';

function App() {
  usePortfolioAnimations();

  return (
    <div>
      <BackgroundDecor />
      <Navbar items={navItems} />
      <MetadataStrip items={metadata} />

      <HeroSection />

      <section className="container">
        <EducationSection items={educationItems} />
        <SkillsBlock categories={skillCategories} nodes={skillNodes} />

        <SectionHeader id="projects" label="SELECTED WORKS" title="Projects" />
        <ProjectsSection projects={projects} />

        <SectionHeader id="inspiration" label="CREATIVE FUEL" title="Sources of Inspiration" />
        <InspirationSection items={inspirationItems} />

        <SectionHeader id="contact" label="LET'S CONNECT" title="Get in Touch" className="contact-header" />
        <ContactSection links={contactLinks} />
      </section>

      <Footer />
    </div>
  );
}

export default App;
