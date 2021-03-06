import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

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
  import logo from "../../../assets/img/logo1.png";
  import '../../App.css';
  import '../../css/Home.css';

  const useStyles = makeStyles(theme => ({
    marginTopBanner: {
        "margin-top":"100px;",
    },
    imgFull: {
        "width":"100%;",
    },
    greyLine: {
        "border-left":"1px solid black;"
    },
    testProduit: {
        backgroundColor: 'black',
    },
    
}));

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#ebf1f5',
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
            <Grid container spacing={2} className="menuQuality">
                <Grid item xs={4} className={classes.alignTitle}>
                    <h4 className="flexCenter">Respect du terroir</h4>
                    <h5 className="flexCenter">De l'environnement et des traditions</h5>
                </Grid>
                <Grid item xs={4} className={classes.alignTitle} className="greyLineBorders">
                    <h4 className="flexCenter">Respect du terroir</h4>
                    <h5 className="flexCenter">De l'environnement et des traditions</h5>
                </Grid>
                <Grid item xs={4} className={classes.alignTitle}>
                <h4 className="flexCenter">Respect du terroir</h4>
                    <h5 className="flexCenter">De l'environnement et des traditions</h5>
                </Grid>
            </Grid>
            <div className="mt-10">
                <h3 className="flexCenter">Nos meilleurs ventes</h3>
                <h4 className="flexCenter">D??couvrez les produits pr??f??r??s de nos clients !</h4>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={3} className={classes.alignTitle}>
                    <Paper className="productCard" style={{backgroundColor: '#ebf1f5'}}/>
                </Grid>
                <Grid item xs={3} className={classes.alignTitle}  >
                    <Card className="productCard"style={{backgroundColor: '#ebf1f5'}} />
                </Grid>
                <Grid item xs={3} className={classes.alignTitle}>
                    <Paper className="productCard" style={{backgroundColor: '#ebf1f5'}} ></Paper>
                </Grid>
                <Grid item xs={3} className={classes.alignTitle}>
                    <Paper className="productCard" style={{backgroundColor: '#ebf1f5'}}/>
                </Grid>
            </Grid>
            <h2 className="flexCenter">Ils ont v??cu l'exp??rience</h2>
            <Grid container spacing={2}>
                <Grid item xs={3} className={classes.alignTitle}>
                    <Item>truc</Item>
                </Grid>
                <Grid item xs={9} className={classes.alignTitle}  >
                    <Item>truc</Item>
                </Grid>
                
            </Grid>
            </Container>

        </div>
    )
}

