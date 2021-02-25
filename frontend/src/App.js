import React, { useState, useEffect } from 'react';
import socket from './socket';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on('queue', message => handleMessage(message));
  }, [])

  const handleMessage = message => {
    setData(oldArray => [...oldArray, message]);
  };

  return (
    <div className="App">
      {data.map((value, key) => (
        <div key={key}>
          <h2>{`Nome: ${value.name}`}</h2>
          <h2>{`Email: ${value.email}`}</h2>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default App;
