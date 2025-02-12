import { Login } from 'react-admin';
import { Card, CardContent, TextField, Button, Typography } from '@mui/material';
import { use, useState } from 'react';
import authProvider from './authProvider';

const loginPage = ({ theme }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = { username, password };
        authProvider.login(credentials).catch(() => alert('Username or Password is incorrect'));
    };

    return ( 
        <Login>
            <Card>
                <CardContent>
                    <Typography variant="h5">Client Login</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField label="Username" fullWidth margin="normal" onChange={(e) => setUsername(e.target.value)} />
                        <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => setPassword(e.target.value)} />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Login
                            </Button>
                    </form>
                </CardContent>
            </Card>
        </Login>
    );
};

export default loginPage;