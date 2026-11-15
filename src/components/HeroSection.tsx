import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Theme } from '../App';

const nav = [ ['About', '#about'], ['Projects', '#work'], ['Skills', '#skills'], ['Education', '#experience'], ['Contact', '#contact'] ];
const roles = ['Python Developer', 'Machine Learning Enthusiast', 'Data Science Learner', 'Computer Vision Explorer'];

type HeroSectionProps = { theme: Theme; onToggleTheme: () => void };

export function HeroSection({ theme, onToggleTheme }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const delay = deleting ? 45 : 90;
    const timer = window.setTimeout(() => {
      if (!deleting && text === current) {
        window.setTimeout(() => setDeleting(true), 1100);
      } else if (deleting && text === '') {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-backdrop" />
      <header className="site-header wrap">
        <a className="brand" href="#home"><span>SURESH.G</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '✕' : '☰'}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span> {theme === 'dark' ? 'LIGHT' : 'DARK'}
          </button>
          <a className="header-cta" href="#contact">Let's talk <span>↗</span></a>
        </div>
      </header>

      <div className="hero-content wrap">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="eyebrow"><span className="status-dot" /> MCA STUDENT · DEVELOPER · ANALYST </div>
          <h1>Building ideas<br />with <span>technology.</span></h1>
          <p className="role-line">I'm a <strong>{text}</strong><i className="typing-caret">|</i></p>
          <p className="hero-description">I'm Suresh G, an MCA student passionate about Python, data science and machine learning. I enjoy turning ideas into practical applications that solve real-world problems.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span>↗</span></a>
            <a className="button button-outline" href={`${import.meta.env.BASE_URL}resume.pdf`} download="Suresh_G_Resume.pdf">Download resume <span>↓</span></a>
          </div>
          <div className="social-line"><a href="https://github.com/sureshggu23-eng" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/suresh-g-841b3330b/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:sureshg.gu23@gmail.com">Email ↗</a></div>
        </motion.div>
        <motion.div className="hero-portrait" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
          <div className="portrait-glow" />
          <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Portrait of Suresh G" />
          <div className="portrait-tag"><span className="status-dot" /> Open to opportunities</div>
          <div className="portrait-index">MY PORTFOLIO</div>
        </motion.div>
      </div>
      <div className="hero-bottom wrap"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>COIMBATORE, INDIA</span></div>
    </section>
  );
}
