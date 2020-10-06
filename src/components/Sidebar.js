import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "../styles/Sidebar.css";
import {
	faHome,
	faCalculator,
	faUpload,
	faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Upload from "./Upload";
import Home from "./Home";

function Sidebar() {
	return (
		<Router>
			<SideNav
				className="sidebar"
				onSelect={(selected) => {
					// Add your code here
				}}
			>
				<SideNav.Toggle />
				<SideNav.Nav defaultSelected="home">
					<NavItem>
						<NavIcon>
							<Link to="./gpa">
								<FontAwesomeIcon icon={faCalculator} />
							</Link>
						</NavIcon>

						<NavText>GPA Calculator</NavText>
					</NavItem>
					<NavItem>
						<NavIcon>
							<Link to="/upload">
								<FontAwesomeIcon icon={faUpload} />
							</Link>
						</NavIcon>
						<NavText>
							<Link to="/upload">Upload Files</Link>
						</NavText>
					</NavItem>
					<NavItem>
						<NavIcon>
							<Link to="/elab">
								<FontAwesomeIcon icon={faCode} />
							</Link>
						</NavIcon>
						<NavText>
							<Link to="/elab">Elab Solutions</Link>
						</NavText>
					</NavItem>
					<NavItem>
						<NavIcon>
							<Link to="/">
								<FontAwesomeIcon icon={faHome} />
							</Link>
						</NavIcon>
						<NavText>
							<Link to="/">Home</Link>
						</NavText>
					</NavItem>
				</SideNav.Nav>
			</SideNav>
			<Switch>
				<Route path="/upload">
					<Upload />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default Sidebar;
