import { useState, useRef } from 'react';
import { Download, Trash2, FileText, ExternalLink } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './App.css';
import { emptyData, sampleData } from './data/initialData';

import FormSection from './components/form/FormSection';
import ResumePreview from './components/preview/ResumePreview';

function App() {
  const [resumeData, setResumeData] = useState(emptyData);
  const resumeRef = useRef(null);

  const handleUpdateData = (section, data) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const handleClearForm = () => {
    if (window.confirm('Are you sure you want to clear all data?')) {
      setResumeData(emptyData);
    }
  };

  const handleLoadSample = () => {
    setResumeData(sampleData);
  };

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;
    
    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        logging: false
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${resumeData.personalInfo.fullName || 'resume'}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-title">
          <FileText size={28} />
          <span>ResumeBuilder</span>
        </div>
        <div className="header-actions">
          <button className="btn-outline flex items-center gap-2" onClick={handleClearForm}>
            <Trash2 size={16} /> Clear Form
          </button>
          <button className="btn-outline" onClick={handleLoadSample}>
            Sample Data
          </button>
          <button className="btn-primary flex items-center gap-2" onClick={handleDownloadPDF}>
            <Download size={16} /> Download PDF
          </button>
        </div>
      </header>

      <main className="main-content">
        <section className="form-section">
          <FormSection data={resumeData} onUpdate={handleUpdateData} />
        </section>

        <section className="preview-section">
          <div ref={resumeRef} className="resume-preview-wrapper" style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
             <ResumePreview data={resumeData} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="flex flex-col items-center gap-4">
          <a 
            href="https://digitalheroesco.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Built for Digital Heroes
          </a>
          <p>
            Developed by <strong>Sankalp</strong> | Email: <strong>sankalp13353@gmail.com</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
