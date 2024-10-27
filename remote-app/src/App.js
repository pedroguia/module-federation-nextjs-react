import React from 'react';
import Button from '@mui/material/Button';

// TODO: lint cmd not working in this project

function App({ user }) {
  console.log('remote user', user);

  return (
    <>
      <h1>Remote App</h1>
      <Button variant="contained" onClick={() => alert('Remote button')}>
        Remote MUI Button
      </Button>
    </>
  );
}

export default App;
