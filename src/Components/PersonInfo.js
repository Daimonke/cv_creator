import React from 'react'
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import '../App.css';

export default function PersonInfo() {
    const [name, setName] = React.useState('');
    const handleName = (e) => setName(e.target.value)
    const [surname, setSurname] = React.useState('');
    const handleSurname = (e) => setSurname(e.target.value)
    const [age, setAge] = React.useState('');
    const handleAge = (e) => setAge(e.target.value)
    const [email, setEmail] = React.useState('');
    const handleEmail = (e) => setEmail(e.target.value)

  return (
    <div>
         <Box
                component="form"
                sx={{
                    pt: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 3
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="name"
                    label="Name"
                    value={name}
                    onChange={handleName}
                    type='text'
                />
                <TextField
                    id="surname"
                    label="Surname"
                    value={surname}
                    onChange={handleSurname}
                    type='text'
                />
            </Box>
            <Box
                component="form"
                sx={{
                    p: '15px 0 20px 0',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 3
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="age"
                    label="Age"
                    value={age}
                    onChange={handleAge}
                    type='number'
                />
                <TextField
                    id="email"
                    label="Email"
                    value={email}
                    onChange={handleEmail}
                    type='email'
                />
            </Box>
            <Divider sx={{ mb: '20px' }}></Divider>
           
    </div>
  )
}
