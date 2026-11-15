import { motion } from 'framer-motion';

const highlights = [
  { number: '01', title: 'Python development', text: 'Building practical applications, scripts and problem-solving solutions with Python.' },
  { number: '02', title: 'Data analytics', text: 'Exploring datasets, finding patterns and communicating insights through visualizations.' },
  { number: '03', title: 'AI & computer vision', text: 'Learning and applying machine learning techniques to real-world detection problems.' },
];

export function AboutSection() {
  return <section className="section section-dark" id="about"><div className="wrap">
    <motion.div className="section-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><p className="eyebrow">01 — A LITTLE ABOUT ME</p><h2>Curious mind.<br /><span>Practical builder.</span></h2></motion.div>
    <div className="about-layout">
      <div className="about-intro"><p className="large-copy">I am pursuing a <span>Master of Computer Applications</span> and developing my skills across programming, data analytics and intelligent systems.</p><p className="muted-copy">I enjoy learning by building. From computer-vision experiments to web-based project work, I focus on understanding the problem, choosing the right tools and creating something useful.</p><a className="text-link" href="#contact">More about my journey <span>↗</span></a></div>
      <div className="highlight-list">{highlights.map((item) => <article className="highlight-row" key={item.number}><span className="item-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="row-arrow">↗</span></article>)}</div>
    </div>
  </div></section>;
}
