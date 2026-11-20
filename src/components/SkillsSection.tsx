import { motion } from 'framer-motion';
const groups = [
  { id: '01', title: 'Programming & scripting', skills: ['Python (Core)', 'Java', 'C/C++', 'PHP (Basics)', 'SQL/MySQL (Basic Knowledge)', 'Data Structures & Algorithms (Fundamentals)'] },
  { id: '02', title: 'Data science & analytics', skills: ['Data Analysis', 'Data Visualization', 'Statistical Interpretation', 'Basics of Machine Learning'] },
  { id: '03', title: 'Computer vision', skills: ['OpenCV', 'YOLO / YOLOv8', 'Pose Estimation', 'Real-time Object & Activity Detection'] },
  { id: '04', title: 'Software testing', skills: ['Manual Testing', 'SDLC & STLC', 'Test Case Design', 'Defect Lifecycle Management'] },
  { id: '05', title: 'Tools & platforms', skills: ['Jupyter Notebook', 'VS Code', 'Git/GitHub basics', 'MS Excel'] },
];
export function SkillsSection() { return <section className="section section-dark" id="skills"><div className="wrap"><div className="section-heading"><p className="eyebrow">03 — MY TOOLKIT</p><h2>Skills & <span>technologies.</span></h2><p className="heading-note">Technologies I have worked with and continue to develop through coursework and hands-on projects.</p></div><div className="skills-grid">{groups.map((group) => <motion.article className="skill-card" key={group.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><span className="item-number">{group.id}</span><h3>{group.title}</h3><div className="tag-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></motion.article>)}</div></div></section>; }
