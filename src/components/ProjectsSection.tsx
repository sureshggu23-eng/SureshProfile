import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  { number: '01', title: 'Suspicious Activity Detection', type: 'AI / COMPUTER VISION', description: 'A real-time surveillance prototype designed to identify suspicious actions and fall events using pose estimation and computer vision.', details: ['This prototype explores how computer vision can help review activity in surveillance footage. It combines YOLOv8-based person detection with pose estimation to examine people’s movement across frames.', 'The project focuses on recognizing movement patterns that may indicate a suspicious action or a fall. OpenCV supports the video-processing workflow, while the detection and pose information provides visual context for reviewing what happened.', 'The goal is to demonstrate an AI-assisted monitoring workflow—not to make definitive judgments about a person.'], stack: ['Python', 'OpenCV', 'YOLOv8', 'Pose Estimation'], image: `${import.meta.env.BASE_URL}images/suspicious-activity-detection.svg`, link: 'https://github.com/sureshggu23-eng', linkLabel: 'GitHub profile' },
  { number: '02', title: 'OrganoConnect', type: 'WEB DEVELOPMENT', description: 'A digital marketplace concept connecting farmers and consumers through organic and traditional farm products.', details: ['OrganoConnect is a web marketplace concept intended to make it easier for consumers to discover organic and traditional products from farmers. It presents a digital space focused on local produce and direct connections between growers and buyers.', 'The interface is built with HTML, CSS, and JavaScript, providing the foundation for presenting product and marketplace information in a clear, approachable way. The concept centers on helping users explore farm products and learn about the people who grow them.', 'This project explores how a simple web experience can support visibility for farmers and make local food options easier to find.'], stack: ['HTML', 'CSS', 'JavaScript'], image: `${import.meta.env.BASE_URL}images/organo-connect.svg`, link: 'https://github.com/sureshggu23-eng/Organo_Project', linkLabel: 'View repository' },
  { number: '03', title: 'Wild Animal Detection', type: 'MACHINE LEARNING', description: 'A computer-vision project exploring object detection to identify wild animals from images or video.', details: ['This project explores using object detection to recognize wild animals in images or video. A YOLO model is used as the detection approach, with Python and OpenCV supporting the computer-vision workflow.', 'The intended result is to locate animals in visual input and make detections easier to inspect. This kind of workflow can be useful as a starting point for wildlife observation, while detection quality depends on the model and the images it is given.', 'The project is focused on applying and visualizing object detection; it does not replace expert review or field monitoring.'], stack: ['Python', 'YOLO', 'OpenCV'], image: `${import.meta.env.BASE_URL}images/wild-animal-detection.svg`, link: 'https://github.com/sureshggu23-eng', linkLabel: 'GitHub profile' },
  { number: '04', title: 'Data Analytics & Visualization', type: 'DATA SCIENCE', description: 'A data analytics workflow for processing datasets, extracting useful information and presenting insights with charts.', details: ['This project demonstrates a general workflow for turning raw data into information that is easier to explore. Python and Pandas support dataset handling, while NumPy can be used for numerical operations during analysis.', 'After preparing and examining the data, Matplotlib provides a way to present patterns and comparisons with charts. The emphasis is on making the steps from data preparation to visual communication clear and understandable.', 'The workflow can be adapted to different datasets and questions; the insights depend on the data being analyzed.'], stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85', link: 'https://github.com/sureshggu23-eng', linkLabel: 'GitHub profile' },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const selectedCard = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
        selectedCard.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const closePopup = () => {
    setSelectedProject(null);
    selectedCard.current?.focus();
  };

  return (
    <section className="section section-black" id="work">
      <div className="wrap">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">02 — SELECTED WORK</p>
            <h2>Things I've<br /><span>been building.</span></h2>
          </div>
          <p className="heading-note">A selection of academic and personal projects where I apply programming, analytics and AI concepts.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              tabIndex={0}
              role="group"
              aria-label={`${project.title}. Open project details.`}
              onClick={(event) => {
                selectedCard.current = event.currentTarget;
                setSelectedProject(project);
              }}
              onKeyDown={(event) => {
                if (event.target === event.currentTarget && (event.key === 'Enter' || event.key === ' ')) {
                  event.preventDefault();
                  selectedCard.current = event.currentTarget;
                  setSelectedProject(project);
                }
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .08 }}
            >
              <img className="project-image" src={project.image} alt={`${project.title} project preview`} loading="lazy" />
              <div className="project-info">
                <div className="project-meta"><span>{project.number} / 04</span><span>{project.type}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a
                  className="text-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                >
                  {project.linkLabel} <span>↗</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="project-note">Thanks for visiting! I'm just getting started - more exciting projects are on the way.</p>
      </div>
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePopup();
          }}
        >
          <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <button className="project-modal-close" type="button" onClick={closePopup} aria-label="Close project details" autoFocus>×</button>
            <p className="eyebrow">{selectedProject.number} / 04 — {selectedProject.type}</p>
            <h2 id="project-modal-title">{selectedProject.title}</h2>
            <img className="project-modal-image" src={selectedProject.image} alt="" />
            <div className="project-modal-description">
              {selectedProject.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="tag-list">{selectedProject.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <a className="text-link" href={selectedProject.link} target="_blank" rel="noreferrer">
              {selectedProject.linkLabel} <span>↗</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
