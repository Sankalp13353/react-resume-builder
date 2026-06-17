import { Code, Plus, X } from 'lucide-react';
import { useState } from 'react';

const SkillsForm = ({ data, onChange }) => {
  const [skillInput, setSkillInput] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (skillInput.trim() && !data.includes(skillInput.trim())) {
      onChange([...data, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const handleRemove = (skillToRemove) => {
    onChange(data.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="card">
      <h2 className="section-title">
        <Code size={20} /> Skills
      </h2>
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input 
          type="text" 
          value={skillInput} 
          onChange={(e) => setSkillInput(e.target.value)} 
          placeholder="e.g. React, Python, SQL" 
          style={{ flex: 1 }}
        />
        <button type="submit" className="btn-primary flex items-center gap-2">
          <Plus size={16} /> Add Skill
        </button>
      </form>
      
      <div className="flex" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
        {data.map((skill, index) => (
          <div 
            key={index} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              backgroundColor: 'var(--background-color)', 
              padding: '0.4rem 0.8rem', 
              borderRadius: '20px',
              fontSize: '0.9rem',
              border: '1px solid var(--border-color)'
            }}
          >
            {skill}
            <button 
              type="button"
              onClick={() => handleRemove(skill)}
              style={{ 
                background: 'none', 
                border: 'none', 
                padding: 0, 
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      {data.length === 0 && (
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '1rem 0' }}>
          No skills added yet.
        </p>
      )}
    </div>
  );
};

export default SkillsForm;
