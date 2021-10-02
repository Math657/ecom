import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
// import AppBar from '@mui/material/AppBar';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { styled } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import logo from "../../../assets/img/logo1.png"

  const useStyles = makeStyles(theme => ({
    marginTopBanner: {
        "margin-top":"100px;",
    },
    imgFull: {
        "width":"100%;",
    }
    
}));

export default function Home() {

    const classes = useStyles();

    return (
        <div className={classes.marginTopBanner}>
            <div>
            
                {/* HELLO IYS HOME <Logo /> */}
                <img src={logo} alt="Logo" className={classes.imgFull}/>
            </div>
            <Container>
            <Grid container spacing={2} >
                    <Grid item xs={4} className={classes.alignTitle}>
                        111
                    </Grid>
                    <Grid item xs={4} className={classes.alignTitle}>
                        222
                    </Grid>
                    <Grid item xs={4} className={classes.alignTitle}>
                        333
                    </Grid>
            </Grid>
            </Container>

        </div>
    )
}

