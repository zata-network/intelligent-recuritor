import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Chat.css';
import { useGlobalContext } from './GlobalContext';
import axios from 'axios';
import { Configuration, OpenAIApi } from "openai";


function Chat() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  
  const callGPTAPI = async (input) => {
    const apiKey = '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'; // Replace this with your actual API key
  
    try {
      const configuration = new Configuration({
        // apiKey: process.env.OPENAI_API_KEY,
        apiKey: apiKey,
      });
      
      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
  
      if (response.data.choices && response.data.choices.length > 0) {
        return response.data.choices[0].text.trim();
      } else {
        return 'Sorry, I could not generate a response.';
      }
    } catch (error) {
      console.error('Error calling GPT API:', error);
      return 'Sorry, there was an error processing your request.';
    }
  };
  

  const sendMessage = async () => {
    if (userInput.trim() === '') return;

    setMessages([...messages, { text: userInput, sender: 'user' }]);
    setUserInput('');

    const gptResponse = await callGPTAPI(userInput);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: gptResponse, sender: 'gpt' },
    ]);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Container className="chat-container">
      <Row>
        <Col>
          <h2>Talk with the AI Interviewer</h2>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${
                  message.sender === 'user' ? 'user-message' : 'gpt-message'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <Form className="chat-input-form">
            <Form.Control
              as="textarea"
              value={userInput}
              onChange={handleUserInput}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
            />
            <Button onClick={sendMessage} className="send-message-btn">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;
