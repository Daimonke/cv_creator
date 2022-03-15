import React from 'react'
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../App.css';

export default function Experience() {
    const [exp, setExp] = React.useState([{id: 0, experience: '', years: ''}]);
    const handleExp = (e) => {
        console.log(exp)

        setExp([...exp], exp[e.target.id].experience = e.target.value)
    }
    const handleYears = (e) => {
        setExp([...exp], exp[e.target.id].years = e.target.value)
        console.log(exp)
    }
    const addExp = (e) => {
        console.log(exp)
        if (exp.length == 0) setExp([{ id: 0, experience: '', years: '' }])
        else setExp([...exp, { id: exp[exp.length - 1].id + 1, experience: '', years: '' }])
    }
    const removeExp = (id) => {
        // console.log(index)
        setExp(exp.filter(item => item.id != id))
        console.log(exp)
    }
  return (
      <div>
    <Divider sx={{ mb: '20px' }}></Divider>
            <Box
                sx={{
                    mb: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 3
                }}
            >
                <Typography variant='h5'>Practical experience</Typography>

            </Box>
            {exp.map((item, index) => {
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
                            label="Workplace"
                            value={exp[index].experience}
                            onChange={handleExp}
                        />
                        <TextField
                            id={index.toString()}
                            label="Years"
                            value={exp[index].years}
                            onChange={handleYears}
                            type='number'
                        />
                        <DeleteForeverIcon fontSize='large' onClick={() => removeExp(item.id)}></DeleteForeverIcon>
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
                <IconButton onClick={addExp}>
                    <AddBoxIcon fontSize='large' ></AddBoxIcon>
                </IconButton>
            </Box>
            <Divider sx={{ mb: '20' }}></Divider>
            </div>
  )
}
