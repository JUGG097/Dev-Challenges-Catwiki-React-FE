import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<div className="App">
							<h1>App is starting</h1>
						</div>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
