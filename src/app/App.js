import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "../pages/login";
import Main from "../layouts/main";
import Notes from "../pages/notes";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/notes" element={<Main />}>
					<Route index element={<Notes />} />
				</Route>				
			</Routes>
		</BrowserRouter>
	);
}

export default App;
