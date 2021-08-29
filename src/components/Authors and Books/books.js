import React, { useState } from 'react';
import CardComponentBooks from './cardComponentBooks';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		margin: "50px auto" 
	}
}));

function Books() {
    const classes = useStyles();
    const [booksArr, setBooksArr] = useState([{ name: "", desc: "" }]);
    var cardsCount = [];

	if(booksArr.length == 1) { // Осторожно тут костыль!
		axios({
			method: 'get',
			url: 'https://mobile.fakebook.press/api/books',
			Authorization: window.localStorage.getItem("token")
		})
		.then(function (response) {
			setBooksArr(response.data.data);
		});
	}

    for(var i=0;i< (booksArr.length || 1);i++)
        cardsCount.push(i);
    return (
        <Container className={classes.cardGrid} maxWidth="md">
          	<Grid container spacing={4}>
            	{cardsCount.map((i) => (
              		<CardComponentBooks 
                        book={{
                            name: booksArr[i].name,
                            desc: booksArr[i].desc
                        }}
                        key={i} 
                    />
            	))}
        	</Grid>
    	</Container>
    );
}

export default Books;