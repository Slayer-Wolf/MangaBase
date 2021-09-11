import React, { Component } from "react";
import MiniDrawer from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Category from "./Category";
import About from "./About";
class App extends Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path="/" component={MiniDrawer} />
					<Route path="/category" component={Category} />
					<Route path="/top" component={MiniDrawer} />
					<Route path="/about" component={About} />
				</Switch>
			</>
		);
	}
}
export default App;
