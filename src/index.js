import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

export const root = document.getElementById('root');

export default class Index extends React.Component {
	render() {
		return (
			<React.StrictMode>
				
			</React.StrictMode>
		);
	}
}

ReactDOM.render(<Index />, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();