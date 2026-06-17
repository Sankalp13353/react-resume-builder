import { Briefcase, Plus, Trash2 } from 'lucide-react';

const ExperienceForm = ({ data, onChange }) => {
  const handleAdd = () => {
    onChange([
      ...data,
      {
        id: crypto.randomUUID(),
        company: '',
        role: '',
        duration: '',
        description: ''
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
          <Briefcase size={20} /> Experience
        </h2>
        <button className="btn-primary flex items-center gap-2" onClick={handleAdd}>
          <Plus size={16} /> Add Experience
        </button>
      </div>
      <div style={{ borderTop: '2px solid var(--secondary-color)', paddingTop: '1rem', marginBottom: '1rem' }}></div>

      {data.map((item, index) => (
        <div key={item.id} style={{ marginBottom: index !== data.length - 1 ? '1.5rem' : 0, paddingBottom: index !== data.length - 1 ? '1.5rem' : 0, borderBottom: index !== data.length - 1 ? '1px dashed var(--border-color)' : 'none' }}>
          <div className="flex justify-between items-center mb-3">
            <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Experience #{index + 1}</h3>
            <button className="btn-danger flex items-center gap-2" onClick={() => handleRemove(item.id)}>
              <Trash2 size={16} /> Delete
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-2">
            <div className="form-group">
              <label>Company Name</label>
              <input 
                type="text" 
                value={item.company} 
                onChange={(e) => handleChange(item.id, 'company', e.target.value)} 
                placeholder="Tech Solutions Inc." 
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <input 
                type="text" 
                value={item.role} 
                onChange={(e) => handleChange(item.id, 'role', e.target.value)} 
                placeholder="Senior Developer" 
              />
            </div>
          </div>
          
          <div className="form-group mb-2">
            <label>Duration</label>
            <input 
              type="text" 
              value={item.duration} 
              onChange={(e) => handleChange(item.id, 'duration', e.target.value)} 
              placeholder="Jan 2021 - Present" 
            />
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea 
              rows="3"
              value={item.description} 
              onChange={(e) => handleChange(item.id, 'description', e.target.value)} 
              placeholder="Describe your responsibilities and achievements..." 
            />
          </div>
        </div>
      ))}
      
      {data.length === 0 && (
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '1rem 0' }}>
          No experience added yet. Click "Add Experience" to start.
        </p>
      )}
    </div>
  );
};

export default ExperienceForm;
