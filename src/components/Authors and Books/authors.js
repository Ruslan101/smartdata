import React, { useState } from 'react';
import CardComponentAuthors from './cardComponentAuthors';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		margin: "50px auto" 
	}
}));

function Authors() {
    const classes = useStyles();
    const [booksArr, setBooksArr] = useState([{ name: "", bio: "", birth_date: "", died_date: "" }]);
    var cardsCount = [];

	if(booksArr.length == 1) { // Осторожно тут костыль!
		axios({
			method: 'get',
			url: 'https://mobile.fakebook.press/api/authors',
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
              		<CardComponentAuthors
                        book={{
                            name: booksArr[i].name,
                            bio: booksArr[i].bio,
							birth_date: booksArr[i].birth_date,
							died_date: booksArr[i].died_date
                        }}
                        key={i} 
                    />
            	))}
        	</Grid>
    	</Container>
    );
}

export default Authors;