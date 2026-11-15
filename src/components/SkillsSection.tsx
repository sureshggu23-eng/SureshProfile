import { motion } from 'framer-motion';
const groups = [
  { id: '01', title: 'Programming', skills: ['Python', 'Java', 'SQL'] },
  { id: '02', title: 'Data & analytics', skills: ['Pandas', 'NumPy', 'Matplotlib', 'Data Analytics'] },
  { id: '03', title: 'AI & machine learning', skills: ['Machine Learning', 'Computer Vision', 'YOLOv8', 'OpenCV'] },
  { id: '04', title: 'Web development', skills: ['HTML', 'CSS', 'JavaScript'] },
  { id: '05', title: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'] },
];
export function SkillsSection() { return <section className="section section-dark" id="skills"><div className="wrap"><div className="section-heading"><p className="eyebrow">03 — MY TOOLKIT</p><h2>Skills & <span>technologies.</span></h2><p className="heading-note">Technologies I have worked with and continue to develop through coursework and hands-on projects.</p></div><div className="skills-grid">{groups.map((group) => <motion.article className="skill-card" key={group.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><span className="item-number">{group.id}</span><h3>{group.title}</h3><div className="tag-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></motion.article>)}</div></div></section>; }
