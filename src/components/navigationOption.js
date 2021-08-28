import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
    	display: 'none',
    	[theme.breakpoints.up('sm')]: {
      		display: 'block',
    	}
	},
    text: {
		marginRight: "10px"
	}
}));

function NavigationOption(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
      
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    function logout() {
        // To do logout
    }
    const IsAutorisationTrue = (
        <React.Fragment>
            <Typography className={classes.title, classes.text} variant="h6" noWrap onClick={handleSigINClick}>
                <Link className={"title"} to='/signIn'>Войти</Link>
            </Typography>
            <Typography variant="h6" noWrap className={classes.title} onClick={handleRegistrationClick}>
                <Link className={"title"} to='/signUp'>Регистрация</Link>
            </Typography>
        </React.Fragment>
    );
    const IsAutorisationFalse = (
        <React.Fragment>
            <Typography className={classes.title, classes.text} variant="h6" noWrap>
                <Link className={"title"} to='/'>Authors</Link>
            </Typography>
            <Typography variant="h6" noWrap className={classes.title}>
                <Link className={"title"} to='/'>Books</Link>
            </Typography>
            <Typography>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={ {
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                    >
                    <MenuItem onClick={handleClose, logout}>Log out</MenuItem>
                </Menu>
            </Typography>
        </React.Fragment>
    );

    function handleRegistrationClick() {
        props.change_activePage("/signUp");
    }
    function handleSigINClick() {
        props.change_activePage("/signIn");
    }
    if(localStorage.getItem("token"))
        return IsAutorisationFalse;
    else
        return IsAutorisationTrue;
}

export default NavigationOption;