import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateJobPage from '../pages/CreateJobPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/create-job' element={<CreateJobPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
