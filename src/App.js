import React from "react";
import "./App.css";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Upload from "./components/Upload";
import Filter from "./components/Filter";
import Files from "./components/Files";
import Sidebar from "./components/Sidebar";
import SignIn from "./components/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { setUser, logout, selectUser } from "./user/userSlice";

function App() {
	const user = useSelector(selectUser);
	const isAuth = () => {
		if (user) {
			return true;
		} else {
			return false;
		}
	};
	return (
		//BEM convention
		<div className="app">
			<BrowserRouter>
				<Switch>
					{isAuth() ? (
						<Route path="/">
							<Sidebar />
						</Route>
					) : (
						<Route path="/">
							<SignIn />
						</Route>
					)}
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
