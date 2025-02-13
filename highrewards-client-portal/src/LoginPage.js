import { Card, CardContent, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';
import authProvider from './authProvider';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = { username, password };
        authProvider.login(credentials).catch(() => alert('Username or Password is incorrect'));
    };

    return ( 
            <Card style={{maxWidth: 400, margin: 'auto', marginTop: '100px', padding: '20px'}}>
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
    );
};

export default LoginPage;