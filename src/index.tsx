import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import RTLLayout from './layouts/rtl';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<HashRouter>
				<Routes>
					<Route path={`/`} element={<AdminLayout/>} />
					<Route path={`/auth`} element={<AuthLayout/>} />
					<Route path={`/admin`} element={<AdminLayout/>} />
					<Route path={`/rtl`} element={<RTLLayout/>} />
				</Routes>
			</HashRouter>
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);
