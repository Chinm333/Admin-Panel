import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";
import './loginOption.css';


export default function LoginOption() {
    const navigate = useNavigate();
    return (
        <div className='loginOpt'>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: "100vh" }}
            >
                <Card style={{ width: "20rem", background: "transparent" }}>
                    <CardMedia
                        component="img"
                        alt="image"
                        height="300"
                        image="https://source.unsplash.com/random"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Choose User Type
                        </Typography>
                    </CardContent>
                    <CardActions style={{ alignItems: "center", justifyContent: "center" }}>
                        <Button onClick={() => navigate("/headLogin")} style={{ background: "white", color: "black" }} size='large'><strong>Official Head</strong></Button>
                    </CardActions>
                    <CardActions style={{ alignItems: "center", justifyContent: "center" }}>
                        <Button onClick={() => navigate("/userLogin")} style={{ background: "white", color: "black" }} size="large"><strong>Staff User</strong></Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    );
}
