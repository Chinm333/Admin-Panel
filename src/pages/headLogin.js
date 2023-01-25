import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import './headLogin.css';

function HeadLogin() {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('')
    const handleMessageChange = event => {
        // 👇️ access textarea value
        setMessage(event.target.value);
    };
    const handleEmailChange = event => {
        // 👇️ access textarea value
        setEmail(event.target.value);
    };
    const navigate = useNavigate();
    const signin = e => {
        if (message === "github" && email === "github@version22.com") {
            navigate("/head-dashboard")
        }
        else {
            alert("Please enter correct the official password and mail")
        }
    }

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
                                value={email}
                                onChange={handleEmailChange}
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={message}
                                onChange={handleMessageChange}
                            />
                        </Box>
                        <div style={{ marginBottom: "10px" }}>
                            <a href="!#"><strong>Forgot password</strong></a>
                        </div>
                        <Button onClick={signin} variant="contained">Sign in</Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default HeadLogin
