import React from 'react'
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../App.css';

export default function Education() {

    const [edu, setEdu] = React.useState([{id: 0, education: ''}]);
    const handleEdu = (e) => {
        console.log(edu)

        setEdu([...edu], edu[e.target.id].education = e.target.value)
    }

    const addEdu = (e) => {
        console.log(edu)
        if (edu.length == 0) setEdu([{ id: 0, education: '' }])
        else setEdu([...edu, { id: edu[edu.length - 1].id + 1, education: '' }])
    }
    const removeEdu = (id) => {
        // console.log(index)
        setEdu(edu.filter(item => item.id != id))
        console.log(edu)
    }


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
  )
}
