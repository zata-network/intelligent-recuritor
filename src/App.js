import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CompanyDashboard from './components/CompanyDashboard';
import IntervieweeDashboard from './components/IntervieweeDashboard';
import Chat from './components/ChatPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalContextProvider} from './components/GlobalContext';

function App() {
  return (
    <Router>
      <GlobalContextProvider>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/company" element={<CompanyDashboard/>} />
          <Route path="/interviewee" element={<IntervieweeDashboard/>} />
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </GlobalContextProvider>
    </Router>
  );
}

export default App;
