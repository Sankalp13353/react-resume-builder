import { Award, Plus, Trash2 } from 'lucide-react';

const CertificationsForm = ({ data, onChange }) => {
  const handleAdd = () => {
    onChange([
      ...data,
      {
        id: crypto.randomUUID(),
        name: '',
        organization: '',
        year: ''
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
          <Award size={20} /> Certifications
        </h2>
        <button className="btn-primary flex items-center gap-2" onClick={handleAdd}>
          <Plus size={16} /> Add Certification
        </button>
      </div>
      <div style={{ borderTop: '2px solid var(--secondary-color)', paddingTop: '1rem', marginBottom: '1rem' }}></div>

      {data.map((item, index) => (
        <div key={item.id} style={{ marginBottom: index !== data.length - 1 ? '1.5rem' : 0, paddingBottom: index !== data.length - 1 ? '1.5rem' : 0, borderBottom: index !== data.length - 1 ? '1px dashed var(--border-color)' : 'none' }}>
          <div className="flex justify-between items-center mb-3">
            <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Certification #{index + 1}</h3>
            <button className="btn-danger flex items-center gap-2" onClick={() => handleRemove(item.id)}>
              <Trash2 size={16} /> Delete
            </button>
          </div>
          
          <div className="form-group mb-2">
            <label>Certification Name</label>
            <input 
              type="text" 
              value={item.name} 
              onChange={(e) => handleChange(item.id, 'name', e.target.value)} 
              placeholder="AWS Certified Developer" 
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group">
              <label>Issuing Organization</label>
              <input 
                type="text" 
                value={item.organization} 
                onChange={(e) => handleChange(item.id, 'organization', e.target.value)} 
                placeholder="Amazon Web Services" 
              />
            </div>
            <div className="form-group">
              <label>Year</label>
              <input 
                type="text" 
                value={item.year} 
                onChange={(e) => handleChange(item.id, 'year', e.target.value)} 
                placeholder="2022" 
              />
            </div>
          </div>
        </div>
      ))}
      
      {data.length === 0 && (
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '1rem 0' }}>
          No certifications added yet. Click "Add Certification" to start.
        </p>
      )}
    </div>
  );
};

export default CertificationsForm;
