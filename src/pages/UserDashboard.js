import React from 'react';
import Marquee from "react-fast-marquee";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './UserDashboard.css';
import { auth } from './firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
    const navigate = useNavigate();
    var state = {
        date: new Date().toLocaleString(),
    }
    const logout = async () => {
        signOut(auth)
        navigate("/")
    };
    return (
        <div className='userDash'>
            <Box sx={{ flexGrow: 1 }}>
                <img className='imgsSpeedExpess' src='http://speedexpress.in/images/logo_final.jpg' />
                <Marquee style={{ backgroundColor: "red", color: "white" }}>
                    <strong>Welcome to Speed Express</strong>
                </Marquee>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <div className='btnList'>
                            <div style={{ paddingBottom: "5px" }}>
                                <strong>{state.date}</strong>
                            </div>
                            <Button className='btnColor' fullWidth size='small' variant="contained" style={{ backgroundColor: "red", marginBottom: "2px" }}>ABOUT US</Button>
                            <Button className='btnColor' fullWidth size='small' variant="contained" style={{ backgroundColor: "red", marginBottom: "2px" }}>OUR SERVICES</Button>
                            <Button className='btnColor' fullWidth size='small' variant="contained" style={{ backgroundColor: "red", marginBottom: "2px" }}>OUR CUSTOMER</Button>
                            <Button className='btnColor' fullWidth size='small' variant="contained" style={{ backgroundColor: "red", marginBottom: "2px" }}>FIND YOUR LOCATION</Button>
                            <Button className='btnColor' fullWidth size='small' variant="contained" style={{ backgroundColor: "red", marginBottom: "2px" }}>BUSINESS PURPOSE</Button>
                            <Button className='btnColor' fullWidth size='small' variant="contained" style={{ backgroundColor: "red", marginBottom: "2px" }}>FEEDBACK</Button>
                            <Button className='btnColor' fullWidth size='small' variant="contained" style={{ backgroundColor: "red", marginBottom: "2px" }}>CONTACT US</Button>
                        </div>
                        <Button onClick={logout} className='btnColor' fullWidth size='small' variant="contained" style={{ backgroundColor: "green", marginBottom: "2px" }}>LOG OUT</Button>
                    </Grid>
                    <Grid item xs={9}>
                        <div>
                            <img className='imgscourier' src='http://speedexpress.in/images/banner/courier.jpg' />
                            <div className='caption'>
                                <p>@Courier Service.</p>
                            </div>
                            <div className='textContent'>
                                <h1>Brief Introduction</h1>
                                <p>
                                    If a journey of thousand miles begins with a step, Speed Express is here to create an opportunity for that step. With its Head Office at Hotel Bilas Complex, G.S. Road, Ulubari, Guwahati – 781007 and Regional office at 15C, Hazra Road, Kolkata – 700026, Speed Express is the lone firm to add reliable, fastest and flexible express and logistic services covering all the major locations in the Eastern India, with its own uninterrupted network.
                                </p>
                                <p>
                                    We understand, that the object of all work is production or accomplishment and to either of these ends there must be a foresight, system, planning, intelligence and honest purpose as well as hardworking. We are honest to ourselves and confident of our ability to translate your faith into action. Our concepts go through experiences as we are changing ourselves to motivate our attitude how well we can serve you. That is why, we have studied and work hard and done the best to us, always aiming for the achievements.
                                </p>
                                <b>Speed Express is a venture born out of a need.</b>
                                <p>
                                    In the fields of Express & Logistic Industry, specially in Eastern & North Eastern Region, there are many multinational, national, regional & local players but none has made their presence at all the major locations. Therefore, to fill up the gap in needs, Speed Express was born in the year 2008 to make it a ‘ONE STOP SHOP’.
                                </p>
                                <b>Vision of Speed Express.</b>
                                <p>
                                    Speed Express promises excellence in delivery, focusing on the individual customer and to become a comprehensive integrated service provider in the field of Warehousing, Courier, Logistics, Packing & Moving, etc. In pursuit of sustainable leadership in North east and East with quality services, Speed Express has evolved an infrastructure unique in the North East & East today. It is being stretched always by a new idea while expanding its network through out India gradually. Speed Express is here not to live in the past but to compete in the present to overcome the challenges. We do not pursue our vision of excellence at whatever we do, we leave it to you to decide, as we prefer the habits of punctuality, order and diligence with the determination to concentrate ourselves for what we amount to.
                                </p>

                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default UserDashboard