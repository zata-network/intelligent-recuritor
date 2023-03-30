import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import './CompanyDashboard.css';

function CompanyDashboard() {
  const [inputText, setInputText] = useState('');

  const handleConfirm = () => {
    // Handle the "Confirm" button click, e.g., send inputText to the backend or process it further.
    console.log('Confirmed:', inputText);
  };

  const handleCancel = () => {
    setInputText(''); // Reset the text input
  };

  return (
    <Container className="dashboard-container">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="dashboard-form">
            <h2>Company Dashboard</h2>
            <Form>
              <Form.Group controlId="formTextInput">
                <Form.Label>Enter the Job Info Here:</Form.Label>
                <Form.Control
                  className="half-width"
                  as="textarea" // Use a textarea instead of a single line input
                  rows={4} // Adjust the number of rows displayed
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleConfirm}>
                Confirm
              </Button>{' '}
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CompanyDashboard;
