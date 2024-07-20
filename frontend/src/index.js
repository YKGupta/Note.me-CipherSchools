import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './app/App';
import LoaderProvider from './context/loader/provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<LoaderProvider>
			<App />
		</LoaderProvider>
	</React.StrictMode>
);