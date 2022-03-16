import React from 'react'
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import '../App.css';

export default function PersonInfo(props) {
    const [name, setName] = React.useState('');
    const handleName = (e) => setName(e.target.value)
    const [surname, setSurname] = React.useState('');
    const handleSurname = (e) => setSurname(e.target.value)
    const [age, setAge] = React.useState('');
    const handleAge = (e) => setAge(e.target.value)
    const [email, setEmail] = React.useState('');
    const handleEmail = (e) => setEmail(e.target.value)


    if (props.alignment === 'edit') {
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
    } if(props.alignment === 'preview') {
        return (
            <div>
                <Box  sx={{
                        p: '15px 0 20px 0',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        gap: 1
                    }}>
                <Box
                    sx={{
                        p: '15px 0 20px 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                    }}
                    >
                <Typography variant='h6'>Name:</Typography>
                <Typography variant='h6'>Surname:</Typography>
                <Typography variant='h6'>Age:</Typography>
                <Typography variant='h6'>Email:</Typography>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box  sx={{
                        p: '15px 0 20px 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        overflow: 'hidden'
                    }}>
                <Typography variant='h6' color={'rgb(100, 100, 100)'}>{name}</Typography>
                <Typography variant='h6' color={'rgb(100, 100, 100)'}>{surname}</Typography>
                <Typography variant='h6' color={'rgb(100, 100, 100)'}>{age}</Typography>
                <Typography variant='h6' color={'rgb(100, 100, 100)'}>{email}</Typography>
                </Box>
                </Box>
                <Divider sx={{ mb: '20px' }}></Divider>
            </div>
        )
    }
}
