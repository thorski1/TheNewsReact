import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import { App } from "../App";

import { routes } from "./routes";


export const Routing = () => (
	<Router>
		<Switch>
			{routes.map((route, i) => (
				<Route
					exact
					path={route.path}
					render={() => <App topic={route.topic} />}
				/>
			))}
		</Switch>
	</Router>
);
