import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
		cursor: 'pointer'
	},
	cardContent: {
		flexGrow: 1,
	},
	typographyContent: {
		color: 'gray',
	}
}));

export default function CardComponentBooks(props) {
	const classes = useStyles();

	function addFavorite(){
		var url = `https://mobile.fakebook.press/api/books/${props.book.id}/add-to-favorites`;

		var xhr = new XMLHttpRequest();
		xhr.open("POST", url);

		xhr.setRequestHeader("Authorization", `Bearer ${window.localStorage.getItem('token')}`);

		xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if(xhr.status != 200)
				console.error(xhr.responseText);
		}};

		xhr.send();
	}

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card className={classes.card}>
				<CardMedia
					className={classes.cardMedia}
					image="https://source.unsplash.com/random"
					title="Image title"
				/>
				<CardContent className={classes.cardContent}>
					<Typography gutterBottom variant="h5" component="h2">
						{props.book.name}
					</Typography>
				    <Typography component="div">
						<Typography className={classes.typographyContent}>{props.book.desc}</Typography>
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" color="primary" onClick={addFavorite}>Add to favorite</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}