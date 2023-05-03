import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import './CompanyDashboard.css';
import './CompanyDashboardResponse.css';
import axios from 'axios';

function CompanyDashboard() {
  const [inputText, setInputText] = useState('');
  const [gptResponse, setGptResponse] = useState(''); // 新的state变量

  const handleConfirm = async () => {
    try {
      const response = await axios.post('http://localhost:3001/gpt', { inputText });
      setGptResponse(response.data.gptText); // 更新GPT-4回复
      console.log('GPT-4 Response:', response.data.gptText);
    } catch (error) {
      console.error('Error:', error);
    }
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
                <Form.Label>Enter the Info Here:</Form.Label>
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
      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <div className="gpt-response">
            <h3>GPT-4 Response:</h3>
            <p>{gptResponse}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CompanyDashboard;
