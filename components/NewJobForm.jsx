import styles from '../styles/createJobPage.module.css';
import { useState } from 'react';
import axios from 'axios';

function NewJobForm() {
  const [formData, setFormData] = useState({
    title: '',
    companyName: '',
    city: '',
    state: '',
    hours: '',
    site: '',
    companyOverview: '',
    duties: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5850/api/v1/jobs', formData);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.newJobForm}>
      <div className={styles.flexbox}>
        <input
          onChange={handleChange}
          name='title'
          value={formData.title}
          className={styles.inputJobTitle}
          type='text'
          placeholder='Title of job position'
        />
        <input
          onChange={handleChange}
          name='companyName'
          value={formData.companyName}
          className={styles.inputJobTitle}
          type='text'
          placeholder='Name of company'
        />
      </div>
      <div className={styles.flexbox}>
        <input
          onChange={handleChange}
          name='city'
          value={formData.city}
          className={styles.inputJobTitle}
          type='text'
          placeholder='Which city is this job in?'
        />
        <input
          onChange={handleChange}
          name='state'
          value={formData.state}
          className={styles.inputJobTitle}
          type='text'
          placeholder='Which state is this job in?'
        />
      </div>
      <div className={styles.flexbox}>
        <input
          onChange={handleChange}
          name='hours'
          value={formData.hours}
          className={styles.inputJobTitle}
          type='text'
          placeholder='Is the position Full-time or Part-time?'
        />
        <input
          onChange={handleChange}
          name='site'
          value={formData.site}
          className={styles.inputJobTitle}
          type='text'
          placeholder='Is job On-site, Remote or Hybrid remote?'
        />
      </div>
      <textarea
        onChange={handleChange}
        name='companyOverview'
        value={formData.companyOverview}
        className={styles.textarea}
        cols='30'
        rows='7'
        placeholder="Company Overview: Describe your company and it's purpose."
      ></textarea>
      <textarea
        onChange={handleChange}
        name='duties'
        value={formData.duties}
        className={styles.textarea}
        cols='30'
        rows='7'
        placeholder='Duties: Describe the duties and responsibilities of the job.'
      ></textarea>
      <textarea
        onChange={handleChange}
        name='skills'
        value={formData.skills}
        className={styles.textarea}
        cols='30'
        rows='7'
        placeholder='Skills: What skills and qualifications are needed for this job.'
      ></textarea>
      <button type='submit' className={styles.btnSubmitNewJob}>
        Submit
      </button>
    </form>
  );
}

export default NewJobForm;
