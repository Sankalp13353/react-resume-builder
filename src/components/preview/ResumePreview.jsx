import React from 'react';
import './ResumePreview.css';

const ResumePreview = ({ data }) => {
  const { personalInfo, summary, experience, education, projects, skills, certifications } = data;

  const hasContent = (section) => {
    if (Array.isArray(section)) return section.length > 0;
    return section && typeof section === 'string' && section.trim() !== '';
  };

  return (
    <div className="resume-container">
      {/* Header / Personal Info */}
      <header className="resume-header">
        <h1 className="resume-name">{personalInfo.fullName || 'Your Name'}</h1>
        <div className="resume-contact">
          {personalInfo.email && <span className="contact-item">{personalInfo.email}</span>}
          {personalInfo.phone && (
            <>
              {personalInfo.email && <span>•</span>}
              <span className="contact-item">{personalInfo.phone}</span>
            </>
          )}
          {personalInfo.location && (
            <>
              {(personalInfo.email || personalInfo.phone) && <span>•</span>}
              <span className="contact-item">{personalInfo.location}</span>
            </>
          )}
          {personalInfo.linkedin && (
            <>
              {(personalInfo.email || personalInfo.phone || personalInfo.location) && <span>•</span>}
              <span className="contact-item">{personalInfo.linkedin}</span>
            </>
          )}
          {personalInfo.github && (
            <>
              {(personalInfo.email || personalInfo.phone || personalInfo.location || personalInfo.linkedin) && <span>•</span>}
              <span className="contact-item">{personalInfo.github}</span>
            </>
          )}
        </div>
      </header>

      {/* Summary */}
      {hasContent(summary) && (
        <section className="resume-section">
          <h2 className="resume-section-title">Professional Summary</h2>
          <p className="resume-summary">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {hasContent(experience) && (
        <section className="resume-section">
          <h2 className="resume-section-title">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="resume-item">
              <div className="resume-item-header">
                <div>
                  <span className="resume-item-title">{exp.role}</span>
                  {exp.company && <span className="resume-item-subtitle"> at {exp.company}</span>}
                </div>
                <span className="resume-item-date">{exp.duration}</span>
              </div>
              <p className="resume-item-desc">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {hasContent(education) && (
        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="resume-item">
              <div className="resume-item-header">
                <div>
                  <span className="resume-item-title">{edu.degree}</span>
                  {edu.institution && <span className="resume-item-subtitle">, {edu.institution}</span>}
                </div>
                <span className="resume-item-date">
                  {edu.startYear} {edu.startYear && edu.endYear ? '-' : ''} {edu.endYear}
                </span>
              </div>
              {edu.cgpa && <p className="resume-item-desc" style={{marginTop: 0}}>CGPA / Percentage: {edu.cgpa}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {hasContent(projects) && (
        <section className="resume-section">
          <h2 className="resume-section-title">Projects</h2>
          {projects.map((proj) => (
            <div key={proj.id} className="resume-item">
              <div className="resume-item-header">
                <div>
                  <span className="resume-item-title">{proj.name}</span>
                  {proj.technologies && <span className="resume-item-subtitle"> | {proj.technologies}</span>}
                </div>
                {proj.githubLink && <span className="resume-item-date" style={{textTransform: 'lowercase'}}>{proj.githubLink}</span>}
              </div>
              <p className="resume-item-desc">{proj.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {hasContent(skills) && (
        <section className="resume-section">
          <h2 className="resume-section-title">Skills</h2>
          <div className="resume-skills">
            {skills.map((skill, index) => (
              <span key={index} className="resume-skill-tag">{skill}</span>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {hasContent(certifications) && (
        <section className="resume-section">
          <h2 className="resume-section-title">Certifications</h2>
          {certifications.map((cert) => (
            <div key={cert.id} className="resume-item">
              <div className="resume-item-header">
                <div>
                  <span className="resume-item-title">{cert.name}</span>
                  {cert.organization && <span className="resume-item-subtitle"> - {cert.organization}</span>}
                </div>
                <span className="resume-item-date">{cert.year}</span>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ResumePreview;
