
import React from 'react';
import ReactToPrint from 'react-to-print';
import ComponentToPrint from './CvForm';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default class FormContainer extends React.PureComponent {
  render() {
    return (
      <div >
        <ComponentToPrint alignment={this.props.alignment} ref={el => (this.componentRef = el)} ></ComponentToPrint>

        <Box
          sx={{
            mt: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ReactToPrint
            trigger={() => {
              return <Button variant="contained" color="error">Print</Button>
            }}
            content={() => this.componentRef}
          />
        </Box>
      </div>
    );
  }
}
