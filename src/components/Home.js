import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Intelligent Recruiter</h1>
      <nav>
        <ul>
          <li>
            <Link to="/company">Company Dashboard</Link>
          </li>
          <li>
            <Link to="/interviewee">Interviewee Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
