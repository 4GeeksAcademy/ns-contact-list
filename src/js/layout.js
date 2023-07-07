import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import ContactListPage from "./pages/ContactListPage.jsx";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import ContextProvider from '../js/context/Provider.jsx'

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ContextProvider>
					<ScrollToTop>
						<Navbar />
						<Routes>
							<Route path="/" element={<ContactListPage />} />
							{/* <Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} /> */}
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
						<Footer />
					</ScrollToTop>
				</ContextProvider>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
