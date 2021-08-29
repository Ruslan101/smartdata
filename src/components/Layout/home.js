import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    home: {
        textAlign: "center"
	}
}));

export default function Home() {
    const classes = useStyles();


    return <h1 className={classes.home}>Authors and their books by Laravel</h1>;
}