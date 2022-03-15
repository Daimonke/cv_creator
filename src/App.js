import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { ToggleButtonGroup } from '@mui/material';
import { ToggleButton } from '@mui/material';
import './App.css';
import * as React from 'react';

function App() {
  const [alignment, setAlignment] = React.useState('edit');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div className='main'>
      <Container maxWidth='sm' sx={{
        backgroundColor: 'rgb(190, 190, 190)', borderRadius: '10px', height: '90%',
        margin: '5vh auto 5vh auto', boxShadow: 'rgba(214, 230, 237, 0.12) 0px 2px 4px 0px, rgba(214, 230, 237, 0.32) 0px 2px 16px 0px;', padding: '10px'
      }}>
      <Container sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography align='center' variant='h3'>
          CV APP
        </Typography>
        <Divider />
        <ToggleButtonGroup
          color="info"
          value={alignment}
          exclusive
          onChange={handleChange}
          sx={{ m: '20px 0 20px 0', alignSelf: 'center' }}
        >
          <ToggleButton value="edit">Edit</ToggleButton>
          <ToggleButton value="preview">Preview</ToggleButton>
        </ToggleButtonGroup>
        <Divider />
      </Container>
      </Container>
    </div>
  );
}

export default App;
