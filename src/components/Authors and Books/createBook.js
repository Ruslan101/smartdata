import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  muiPickersUtilsProvider: {
    width: 'inherit'
  }
}));

function CreateBook() {
	const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-08-12T21:11:54'));
    const history = useHistory();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

	function handleSubmit(e) {
		e.preventDefault();
		
		var url = "https://mobile.fakebook.press/api/books";

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Authorization", `Bearer ${window.localStorage.getItem('token')}`);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }};

        var data = `{
            "name": "${e.target.name.value}",
            "author_id": "1",
            "desc": "${e.target.desc.value}",
            "publication_date": "${e.target.date.value}"
        }`;

        xhr.send(data);

        history.push("/books");
	}
    
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Create Book
				</Typography>
				<form className={classes.form} noValidate onSubmit={handleSubmit}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="name"
						label="Book name"
						name="name"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="desc"
						label="Description"
						name="desc"
					/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            
                            className={classes.muiPickersUtilsProvider}
                            disableToolbar
                            variant="inline"
                            format="yyyy/MM/dd"
                            margin="normal"
                            id="date"
                            label="Publication date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Create Book
					</Button>
				</form>
			</div>
		</Container>
	);
}

export default CreateBook;