import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      <header className="home-header">
        <Container>
          <Row>
            <Col>
              <h1>CleverHire.ai</h1>
              <p>
                Revolutionizing the recruitment process with AI-powered
                interviews and insights.
              </p>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Row className="home-cta">
          <Link to="/company">
            <Button className="dashboard-btn company-btn" size="lg">
              Company Dashboard
            </Button>
          </Link>
          <Link to="/interviewee">
            <Button className="dashboard-btn interviewee-btn" size="lg">
              Interviewee Dashboard
            </Button>
          </Link>
        </Row>
      </Container>
    </div>
  );
}

export default Home;