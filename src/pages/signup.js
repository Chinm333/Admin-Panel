import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './headLogin.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from './firebase';

function Signup() {
    const navigate = useNavigate();

    const [regEmail, setRegEmail] = useState(null);
    const [regPassword, setRegPassword] = useState('');
    const [regPhoneNo, setregPhoneNo] = useState('');
    const register = async (e) => {
        const user = await createUserWithEmailAndPassword(auth, regEmail, regPassword);
        navigate("/user-dashboard")
        // console.log(regEmail, regPassword, regPhoneNo);
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "email"), {
                email: regEmail,
                phone: regPhoneNo,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    };
    return (
        <div>
            <Box sx={{ width: "100%" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 12, md: 6 }}>
                    <Grid item xs={12} md={6}>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="imgs" alt="Phone" />
                    </Grid>
                    <Grid item xs={12} md={6} container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <h2 style={{ color: "lightblue" }}>Create an account</h2>
                        <Box sx={{ padding: "0 10%" }}>
                            <TextField
                                required
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => {
                                    setRegEmail(e.target.value);
                                }}
                                autoFocus
                            />
                            <TextField
                                required
                                margin="normal"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => {
                                    setRegPassword(e.target.value);
                                }}
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                name="phoneNumber"
                                label="Phone Number"
                                type="text"
                                id="phoneNumber"
                                onChange={(e) => {
                                    setregPhoneNo(e.target.value);
                                }}
                            />
                        </Box>
                        <Button onClick={register} variant="contained">Sign up</Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Signup