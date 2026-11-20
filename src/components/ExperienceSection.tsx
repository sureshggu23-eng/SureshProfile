import { motion } from 'framer-motion';
const education = [
  { period: '2025 — 2027', degree: 'Master of Computer Applications', institution: 'Hindusthan College of Arts and Science', detail: 'Bharathiar University · Coimbatore', score: '85.8%', status: 'CURRENT' },
  { period: '2022 — 2025', degree: 'B.Sc. Computer Science', institution: 'Kongunadu Arts and Science College', detail: 'Bharathiar University · Coimbatore', score: '83.65%', status: 'COMPLETED' },
  { period: '2020 — 2022', degree: 'Higher Secondary · XII', institution: 'JKK Nattraja Matriculation Higher Secondary School', detail: 'Komarapalayam · Matriculation', score: '80.7%', status: 'COMPLETED' },
  { period: '2020', degree: 'Secondary · X', institution: 'JKK Nattraja Matriculation Higher Secondary School', detail: 'Komarapalayam · Matriculation', score: '80.6%', status: 'COMPLETED' },
];
const internships = [
  {
    role: 'Python with Data Science Intern',
    company: 'Gateway Software Solutions Pvt. Ltd.',
    location: 'Coimbatore',
    period: 'May 2024 – Jun 2024',
    responsibilities: [
      'Completed a structured internship applying Python to data analysis and interpretation, working with real-world datasets under mentor guidance.',
      'Performed end-to-end dataset analysis, including data cleaning, exploration, and interpretation to derive actionable insights from raw data.',
      'Built visualizations to communicate data trends and patterns clearly, strengthening the ability to translate data into business-relevant findings.',
      'Developed a strong foundation in dataset analysis, a core skill applied across academic and personal projects.',
    ],
  },
];
const certificates = [
  ['Python for Data Science', 'NPTEL', '79% · Top 5% of all course participants'],
  ['Data Science & Analytics', 'HP LIFE', 'Certification'],
  ['Data Analytics Essentials', 'Cisco Networking Academy', 'Certification'],
  ['Machine Learning for Data Science Projects', 'IBM SkillsBuild', 'Certification'],
  ['Web Development Fundamentals', 'IBM SkillsBuild', 'Certification'],
  ['Cloud Computing Fundamentals', 'IBM SkillsBuild', 'Certification'],
  ['OOPS in Java', 'Simplilearn', 'Certification'],
  ['AI Driven Workflow Optimization', 'Simplilearn', 'Certification'],
];
export function ExperienceSection() { return <section className="section section-black" id="experience"><div className="wrap"><div className="section-heading"><p className="eyebrow">04 — ACADEMIC JOURNEY</p><h2>Learning is a <span>process.</span></h2></div><div className="education-list">{education.map((item, i) => <motion.article className="education-row" key={item.degree} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }}><span className="education-period">{item.period}</span><div className="education-main"><h3>{item.degree}</h3><p>{item.institution}</p><small>{item.detail}</small></div><div className="education-result"><strong>{item.score}</strong><span>{item.status}</span></div></motion.article>)}</div><div className="cert-heading"><p className="eyebrow">PROFESSIONAL EXPERIENCE</p><h3>Internship</h3></div><div className="internship-list">{internships.map((item) => <motion.article className="internship-card" key={item.role} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><div className="internship-heading"><div><h4>{item.role}</h4><p>{item.company} · {item.location}</p></div><span className="education-period">{item.period}</span></div><ul>{item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul></motion.article>)}</div><div className="cert-heading"><p className="eyebrow">CONTINUOUS LEARNING</p><h3>Certifications</h3></div><div className="cert-grid">{certificates.map(([title, provider, detail]) => <article className="cert-card" key={title}><span className="cert-mark">✳</span><div><h4>{title}</h4><p>{provider}</p><small>{detail}</small></div><span className="row-arrow">↗</span></article>)}</div></div></section>; }
