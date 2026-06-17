export const emptyData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    location: ''
  },
  summary: '',
  education: [],
  skills: [],
  projects: [],
  experience: [],
  certifications: []
};

export const sampleData = {
  personalInfo: {
    fullName: 'Alex Developer',
    email: 'alex@example.com',
    phone: '+1 234 567 8900',
    linkedin: 'linkedin.com/in/alexdev',
    github: 'github.com/alexdev',
    location: 'San Francisco, CA'
  },
  summary: 'Experienced Full Stack Developer with a passion for building scalable web applications and intuitive user interfaces. Proficient in React, Node.js, and modern web technologies.',
  education: [
    {
      id: '1',
      institution: 'University of Technology',
      degree: 'B.S. Computer Science',
      cgpa: '3.8/4.0',
      startYear: '2016',
      endYear: '2020'
    }
  ],
  skills: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'SQL', 'Git', 'AWS'],
  projects: [
    {
      id: '1',
      name: 'E-commerce Platform',
      description: 'A full-stack e-commerce application with secure payments and inventory management.',
      technologies: 'React, Node.js, MongoDB, Stripe',
      githubLink: 'github.com/alexdev/ecommerce'
    },
    {
      id: '2',
      name: 'Task Manager App',
      description: 'A drag-and-drop task management tool for remote teams.',
      technologies: 'React, Redux, Firebase',
      githubLink: 'github.com/alexdev/task-manager'
    }
  ],
  experience: [
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      role: 'Senior Frontend Developer',
      duration: 'Jan 2021 - Present',
      description: 'Lead the frontend team in developing a modern SaaS platform. Improved performance by 40% and implemented a comprehensive component library.'
    },
    {
      id: '2',
      company: 'WebDev Agency',
      role: 'Web Developer',
      duration: 'Jun 2020 - Dec 2020',
      description: 'Developed responsive websites for various clients using React and Vanilla JavaScript.'
    }
  ],
  certifications: [
    {
      id: '1',
      name: 'AWS Certified Developer',
      organization: 'Amazon Web Services',
      year: '2022'
    }
  ]
};
