import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Login from "../pages/login";
import Main from "../layouts/main";
import Notes from "../pages/notes";
import UserProvider from "../context/user/Provider";
import NotesProvider from "../context/notes/Provider";
import SearchProvider from "../context/search/provider";

function App() {

	return (
		<BrowserRouter>
			<UserProvider>
				<SearchProvider>
					<NotesProvider>
						<ToastContainer
							position="top-right"
							autoClose={5000}
							theme="light"
						/>
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/notes" element={<Main />}>
								<Route index element={<Notes />} />
							</Route>
						</Routes>
					</NotesProvider>
				</SearchProvider>
			</UserProvider>
		</BrowserRouter>
	);
}

export default App;
