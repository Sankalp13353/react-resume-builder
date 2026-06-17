import PersonalInfoForm from './PersonalInfoForm';
import SummaryForm from './SummaryForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import ProjectsForm from './ProjectsForm';
import ExperienceForm from './ExperienceForm';
import CertificationsForm from './CertificationsForm';

const FormSection = ({ data, onUpdate }) => {
  return (
    <div className="flex flex-col gap-4">
      <PersonalInfoForm 
        data={data.personalInfo} 
        onChange={(newData) => onUpdate('personalInfo', newData)} 
      />
      <SummaryForm 
        data={data.summary} 
        onChange={(newData) => onUpdate('summary', newData)} 
      />
      <ExperienceForm 
        data={data.experience} 
        onChange={(newData) => onUpdate('experience', newData)} 
      />
      <EducationForm 
        data={data.education} 
        onChange={(newData) => onUpdate('education', newData)} 
      />
      <ProjectsForm 
        data={data.projects} 
        onChange={(newData) => onUpdate('projects', newData)} 
      />
      <SkillsForm 
        data={data.skills} 
        onChange={(newData) => onUpdate('skills', newData)} 
      />
      <CertificationsForm 
        data={data.certifications} 
        onChange={(newData) => onUpdate('certifications', newData)} 
      />
    </div>
  );
};

export default FormSection;
