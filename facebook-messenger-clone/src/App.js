import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';


function App() {
const [input, setInput] = useState('');
const [messages, setMessages] = useState([
  {username: 'hitesh', text: 'hey'}, 
  {username: 'hit', text: 'hi'},
]);
const [username, setUsername] = useState('');

useEffect(() => {
 setUsername(prompt('Please enter your name'));
}, [] )

const sendMessage = (event) => {
    // all the logic to send the message goes here
    event.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
    setInput('');
}

  return (
    <div className="App">
      <h1>Hello</h1>
  <h1>Welcome {username}</h1>
      <form>
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage} >Send Message</Button>
        </FormControl>
      </form>
      
      {
        messages.map(message => (
          <Message username={message.username} text={message.text} />
        ))
      }

    </div>
  );
}

export default App;
