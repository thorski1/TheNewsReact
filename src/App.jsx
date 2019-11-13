import React from "react";
import "./App.css";

import { CollectionGrid } from "./Components/CollectionGrid";
import Navbar from "./Components/Navbar";

export const App = props => (
	<>
		<Navbar />
		<CollectionGrid topic={props.topic} />
	</>
);
