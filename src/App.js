import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { ToggleButton } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './App.css';
import * as React from 'react';
import FormContainer from './Components/ToPDF';

function App() {
  const [alignment, setAlignment] = React.useState('edit');
  const handleChange = (e) => {
    setAlignment(e.target.value);
  }
  return (
    <div className='wrapper'>
      <Container maxWidth='sm' sx={{
        backgroundColor: 'rgb(220, 220, 220)', borderRadius: '10px', minHeight: '90vh',
        margin: '5vh auto 5vh auto', boxShadow: 'rgba(214, 230, 237, 0.12) 0px 2px 4px 0px, rgba(214, 230, 237, 0.32) 0px 2px 16px 0px;', padding: '10px'
      }}>
        <Container className='header' sx={{ display: 'flex', flexDirection: 'column'}}>
          <Typography align='center' variant='h3'>
            CV APP
          </Typography>
          <Divider />
          <ToggleButtonGroup
            color="primary"
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
      <Container className='main'>
      <FormContainer alignment={alignment} ></FormContainer>
      </Container>
      </Container>
    </div>
  );
}

export default App;
