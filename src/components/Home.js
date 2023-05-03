import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import { useGlobalContext } from './GlobalContext'; // Import the global context
import { useEffect } from 'react';

function Home() {
  const { setResume, setJobdes, jobdes, resume } = useGlobalContext(); // Access global context values
  // const { setResume, setJobdes } = useContext(GlobalContext);

  const handleJobDesUpload = (e) => {
    const file = e.target.files[0]; // Get the selected file
    // setJobdes(file); // Set the selected file to the global context value jobdes

    // Create a new FileReader object
    const fileReader = new FileReader();

    // Define the onload event handler for the FileReader
    fileReader.onload = (event) => {
      const fileContent = event.target.result; // Get the content of the file
      setJobdes(fileContent); //
    }

    // Read the content of the file as text
    fileReader.readAsText(file);
  };

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]); // Set the selected file to the global context value resume
    console.log(resume);
  };

  useEffect(() => {
    if (jobdes) {
      console.log(jobdes);
    }
  }, [jobdes]);

  return (
    <div>
      <header className="home-header">
        <Container>
          <Row>
            <Col>
              <h1>Lorenzo.ai</h1>
              <p>
                Revolutionizing the Knowledge share process with AI-powered insights.
              </p>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
      <div className="d-flex flex-column align-items-center"> {/* Vertical layout */}
        <div className="mb-3"> {/* Upload buttons */}
        <Row className="home-cta">
          <input
            type="file"
            accept=".txt"
            onChange={handleJobDesUpload}
            style={{ display: 'none' }}
            id="jobdes-upload"
          />
          <label htmlFor="jobdes-upload">
            <Button className="dashboard-btn company-btn" size="lg" as="span">
              Upload Job Description
            </Button>
          </label>
          <input
            type="file"
            accept=".txt"
            onChange={handleResumeUpload}
            style={{ display: 'none' }}
            id="resume-upload"
          />
          <label htmlFor="resume-upload">
            <Button className="dashboard-btn interviewee-btn" size="lg" as="span">
              Upload Resume
            </Button>
          </label>
          </Row>
          </div>
          <div>
            <Link to="/chat">
              <Button
                className="dashboard-btn chat-btn"
                size="lg"
              >
                Chat with GPT
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
