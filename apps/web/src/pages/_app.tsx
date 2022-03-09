import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { store } from '../app/store';
import { Provider } from 'react-redux';
import 'tailwindcss/tailwind.css';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
	const ReactDOM = require('react-dom');
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

function CustomApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Head>
				<title>Welcome to musigrow!</title>
			</Head>
			<main className='app'>
				<Component {...pageProps} />
			</main>
		</Provider>
	);
}

export default CustomApp;
