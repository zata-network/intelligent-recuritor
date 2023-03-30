import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CompanyDashboard from './components/CompanyDashboard';
import IntervieweeDashboard from './components/IntervieweeDashboard';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/company" element={<CompanyDashboard/>} />
        <Route path="/interviewee" element={<IntervieweeDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
