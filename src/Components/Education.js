import React from 'react'
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../App.css';

export default function Education(props) {

    const [edu, setEdu] = React.useState([{id: 0, education: ''}]);
    const handleEdu = (e) => {
        setEdu([...edu], edu[e.target.id].education = e.target.value)
    }

    const addEdu = (e) => {
        if (edu.length === 0) setEdu([{ id: 0, education: '' }])
        else setEdu([...edu, { id: edu[edu.length - 1].id + 1, education: '' }])
    }
    const removeEdu = (id) => {
        setEdu(edu.filter(item => item.id !== id))
    }

    if(props.alignment === 'edit'){
  return (
    <div>
        <Box
                sx={{
                    mb: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 3
                }}
            >
                <Typography variant='h5'>Education</Typography>
            </Box>
            {edu.map((item, index) => {
                return (
                    <Box
                        component="form"
                        sx={{
                            p: '5px 0 5px 0',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 3
                        }}
                        noValidate
                        autoComplete="off"
                        key={index}
                    >
                        <TextField
                            fullWidth
                            id={index.toString()}
                            label="Education"
                            value={edu[index].education}
                            onChange={handleEdu}
                        />
                     
                        <DeleteForeverIcon fontSize='large' onClick={() => removeEdu(item.id)}></DeleteForeverIcon>
                    </Box>

                )

            })}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 3
                }}
            >
                <IconButton onClick={addEdu}>
                    <AddBoxIcon fontSize='large' ></AddBoxIcon>
                </IconButton>
            </Box>
            <Divider sx={{ mb: '20' }}></Divider>
    </div>
  )} if(props.alignment === 'preview'){
      return (
          <div>
             <Box
                sx={{
                    mb: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 3
                }}
            >
                <Typography variant='h5'>Education</Typography>
            </Box>
            <ol>
            {edu.map(item => {
                if(item.education !== '')
                return (
                    
                    <Box
                    sx={{
                        mb: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                <Typography sx={{ml:"15px"}} variant='h5' color={'rgb(100, 100, 100)'}><li>{item.education}</li></Typography>
                </Box>
                
                )}
            )}
            </ol>
          </div>
      )
  }
}
