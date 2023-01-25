import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import './headLogin.css';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

function UserLogin() {
    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const login = async () => {
        const user = signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        navigate("/user-dashboard")
        // console.log(loginEmail, loginPassword);
    };
    return (
        <div>
            <Box sx={{ width: "100%" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 12, md: 6 }}>
                    <Grid item xs={12} md={6}>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="imgs" alt="Phone image" />
                    </Grid>
                    <Grid item xs={12} md={6} container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => {
                                    setLoginEmail(e.target.value);
                                }}
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                style={{ textAlign: "center" }}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => {
                                    setLoginPassword(e.target.value);
                                }}
                            />
                        </Box>
                        <div style={{ marginBottom: "10px" }}>
                            <a href="!#"><strong>Forgot password</strong></a>
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                            <a href="/signup"><em>Create an account!</em></a>
                        </div>
                        <Button variant="contained" onClick={login}>Sign in</Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default UserLogin