import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardComponent from './cardComponent';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    home: {
        textAlign: "center"
	}
}));

export default function Home() {
    const classes = useStyles();
    const [booksArr, setBooksArr] = useState([{ name: "", desc: "" }]);
    var cardsCount = [];

	if(booksArr.length == 1) {
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
        <React.Fragment>
            <h1 className={classes.home}>Авторы и их книги</h1>
            <Container className={classes.cardGrid} maxWidth="md">
          		<Grid container spacing={4}>
            		{cardsCount.map((i) => (
              			<CardComponent 
                            book={{
                                name: booksArr[i].name,
                                desc: booksArr[i].desc
                            }}
                            key={i} 
                        />
            		))}
          		</Grid>
        	</Container>
        </React.Fragment>
    );
}