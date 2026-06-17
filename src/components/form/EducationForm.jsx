import { GraduationCap, Plus, Trash2 } from 'lucide-react';

const EducationForm = ({ data, onChange }) => {
  const handleAdd = () => {
    onChange([
      ...data,
      {
        id: crypto.randomUUID(),
        institution: '',
        degree: '',
        cgpa: '',
        startYear: '',
        endYear: ''
      }
    ]);
  };

  const handleRemove = (id) => {
    onChange(data.filter(item => item.id !== id));
  };

  const handleChange = (id, field, value) => {
    onChange(
      data.map(item => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="section-title" style={{ marginBottom: 0, borderBottom: 'none' }}>
          <GraduationCap size={20} /> Education
        </h2>
        <button className="btn-primary flex items-center gap-2" onClick={handleAdd}>
          <Plus size={16} /> Add Education
        </button>
      </div>
      <div style={{ borderTop: '2px solid var(--secondary-color)', paddingTop: '1rem', marginBottom: '1rem' }}></div>

      {data.map((item, index) => (
        <div key={item.id} style={{ marginBottom: index !== data.length - 1 ? '1.5rem' : 0, paddingBottom: index !== data.length - 1 ? '1.5rem' : 0, borderBottom: index !== data.length - 1 ? '1px dashed var(--border-color)' : 'none' }}>
          <div className="flex justify-between items-center mb-3">
            <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Education #{index + 1}</h3>
            <button className="btn-danger flex items-center gap-2" onClick={() => handleRemove(item.id)}>
              <Trash2 size={16} /> Delete
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group">
              <label>Institution Name</label>
              <input 
                type="text" 
                value={item.institution} 
                onChange={(e) => handleChange(item.id, 'institution', e.target.value)} 
                placeholder="University Name" 
              />
            </div>
            <div className="form-group">
              <label>Degree</label>
              <input 
                type="text" 
                value={item.degree} 
                onChange={(e) => handleChange(item.id, 'degree', e.target.value)} 
                placeholder="B.S. Computer Science" 
              />
            </div>
            <div className="form-group">
              <label>CGPA / Percentage</label>
              <input 
                type="text" 
                value={item.cgpa} 
                onChange={(e) => handleChange(item.id, 'cgpa', e.target.value)} 
                placeholder="3.8/4.0" 
              />
            </div>
            <div className="form-group flex gap-2">
              <div style={{ flex: 1 }}>
                <label>Start Year</label>
                <input 
                  type="text" 
                  value={item.startYear} 
                  onChange={(e) => handleChange(item.id, 'startYear', e.target.value)} 
                  placeholder="2016" 
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>End Year</label>
                <input 
                  type="text" 
                  value={item.endYear} 
                  onChange={(e) => handleChange(item.id, 'endYear', e.target.value)} 
                  placeholder="2020" 
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {data.length === 0 && (
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '1rem 0' }}>
          No education added yet. Click "Add Education" to start.
        </p>
      )}
    </div>
  );
};

export default EducationForm;
