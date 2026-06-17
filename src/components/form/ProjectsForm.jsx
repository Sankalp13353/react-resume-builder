import { FolderGit2, Plus, Trash2 } from 'lucide-react';

const ProjectsForm = ({ data, onChange }) => {
  const handleAdd = () => {
    onChange([
      ...data,
      {
        id: crypto.randomUUID(),
        name: '',
        description: '',
        technologies: '',
        githubLink: ''
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
          <FolderGit2 size={20} /> Projects
        </h2>
        <button className="btn-primary flex items-center gap-2" onClick={handleAdd}>
          <Plus size={16} /> Add Project
        </button>
      </div>
      <div style={{ borderTop: '2px solid var(--secondary-color)', paddingTop: '1rem', marginBottom: '1rem' }}></div>

      {data.map((item, index) => (
        <div key={item.id} style={{ marginBottom: index !== data.length - 1 ? '1.5rem' : 0, paddingBottom: index !== data.length - 1 ? '1.5rem' : 0, borderBottom: index !== data.length - 1 ? '1px dashed var(--border-color)' : 'none' }}>
          <div className="flex justify-between items-center mb-3">
            <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Project #{index + 1}</h3>
            <button className="btn-danger flex items-center gap-2" onClick={() => handleRemove(item.id)}>
              <Trash2 size={16} /> Delete
            </button>
          </div>
          
          <div className="form-group mb-2">
            <label>Project Name</label>
            <input 
              type="text" 
              value={item.name} 
              onChange={(e) => handleChange(item.id, 'name', e.target.value)} 
              placeholder="E-commerce Platform" 
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-2">
            <div className="form-group">
              <label>Technologies Used</label>
              <input 
                type="text" 
                value={item.technologies} 
                onChange={(e) => handleChange(item.id, 'technologies', e.target.value)} 
                placeholder="React, Node.js, MongoDB" 
              />
            </div>
            <div className="form-group">
              <label>GitHub Link</label>
              <input 
                type="text" 
                value={item.githubLink} 
                onChange={(e) => handleChange(item.id, 'githubLink', e.target.value)} 
                placeholder="github.com/username/project" 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea 
              rows="3"
              value={item.description} 
              onChange={(e) => handleChange(item.id, 'description', e.target.value)} 
              placeholder="Briefly describe the project, your role, and the outcomes..." 
            />
          </div>
        </div>
      ))}
      
      {data.length === 0 && (
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '1rem 0' }}>
          No projects added yet. Click "Add Project" to start.
        </p>
      )}
    </div>
  );
};

export default ProjectsForm;
