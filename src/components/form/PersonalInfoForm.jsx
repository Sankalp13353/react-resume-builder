import { User } from 'lucide-react';

const PersonalInfoForm = ({ data, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="card">
      <h2 className="section-title">
        <User size={20} /> Personal Information
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName" 
            value={data.fullName} 
            onChange={handleChange} 
            placeholder="John Doe" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={data.email} 
            onChange={handleChange} 
            placeholder="john@example.com" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={data.phone} 
            onChange={handleChange} 
            placeholder="+1 234 567 8900" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input 
            type="text" 
            id="location" 
            name="location" 
            value={data.location} 
            onChange={handleChange} 
            placeholder="New York, NY" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn URL</label>
          <input 
            type="text" 
            id="linkedin" 
            name="linkedin" 
            value={data.linkedin} 
            onChange={handleChange} 
            placeholder="linkedin.com/in/johndoe" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="github">GitHub URL</label>
          <input 
            type="text" 
            id="github" 
            name="github" 
            value={data.github} 
            onChange={handleChange} 
            placeholder="github.com/johndoe" 
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
