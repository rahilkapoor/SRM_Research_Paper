import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignIn.css";

import { useDispatch, useSelector } from "react-redux";
import { setUser, selectUser } from "../user/userSlice";

const SignIn = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);

	const handleUsername = (e) => {
		e.preventDefault();
		setUsername(e.target.value);
	};
	const handlePassword = (e) => {
		e.preventDefault();
		setPassword(e.target.value);
	};

	const loginToApp = () => {
		dispatch(setUser({ user: username }));
		console.log(username, password);
	};

	return (
		<div className="my-login-page">
			<div className="h-100">
				<div className="container h-100">
					<div className="row justify-content-md-center h-100">
						<div className="card-wrapper">
							<div
								className="brand"
								style={{
									boxShadow: "0 4px 8px rgba(0,0,0,.05)",
								}}
							>
								<img
									src="https://cdn4.iconfinder.com/data/icons/laboratory-3-1/512/50-Laboratory-Icons-Vol.3-30-128.png"
									alt="logo"
								/>
							</div>
							<div className="card fat">
								<div className="card-body">
									<h4 className="card-title">Login</h4>

									<form className="my-login-validation">
										<div className="form-group">
											<label>User Name</label>
											<input
												id="username"
												type="text"
												className="form-control"
												name="user name"
												required
												onChange={handleUsername}
											></input>
										</div>

										<div className="form-group">
											<label>Password</label>
											<input
												id="password"
												type="password"
												className="form-control"
												name="password"
												required
												data-eye
												onChange={handlePassword}
											></input>
										</div>
										<div className="form-group m-0">
											<Link to="/">
												<button
													type="submit"
													className="form-button button-login"
													onClick={loginToApp}
												>
													Login
												</button>
											</Link>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
