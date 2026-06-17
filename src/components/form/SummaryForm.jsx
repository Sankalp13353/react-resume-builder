import { AlignLeft } from 'lucide-react';

const SummaryForm = ({ data, onChange }) => {
  return (
    <div className="card">
      <h2 className="section-title">
        <AlignLeft size={20} /> Professional Summary
      </h2>
      <div className="form-group">
        <textarea 
          rows="4" 
          value={data} 
          onChange={(e) => onChange(e.target.value)} 
          placeholder="Briefly describe your professional background, skills, and goals..."
        />
      </div>
    </div>
  );
};

export default SummaryForm;
