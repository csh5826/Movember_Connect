import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

// styles for navbar
const useStyles = makeStyles({
    rightToolbar: {
        marginLeft: 'auto',
        marginRight: 12
    },
    appBar: {
        background: '#800000'
    },
    home:{
        marginRight: 70
    }
})

const NavBar = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <AppBar position="fixed">
                <Toolbar className={classes.appBar}>
                    <Typography variant="h4">
                        Movember Connect
                    </Typography>
                <section className={classes.rightToolbar}>
                    <Link style={{color:'white'}} to='/'><Button color="inherit" className={classes.home}>Home</Button></ Link>
                    <Link style={{color:'white'}} to='/participants/new'><Button color="inherit">Share your story</Button></ Link>
                </section>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default NavBar;