import NewJobForm from '../components/NewJobForm';
import styles from '../styles/createJobPage.module.css';
import { useState } from 'react';

function CreateJobPage() {
  const [newPost, setNewPost] = useState(0);

  return (
    <div className={styles.createJobPage}>
      <h1 className={styles.title}>Job Board</h1>
      {newPost === 0 && (
        <h2 onClick={() => setNewPost(1)} className={styles.postNewJobBtn}>
          + Post New Job
        </h2>
      )}
      {newPost === 1 && <NewJobForm />}
    </div>
  );
}

export default CreateJobPage;
