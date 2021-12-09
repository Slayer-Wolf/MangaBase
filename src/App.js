import React, { Component } from "react";
import MiniDrawer from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Category from "./Category";
import About from "./About";
import Signin from "./Signin";
import Regis from './Regis';
class App extends Component {
	render() {
		return (
			<>
				<Switch>
        <Route  path="/signin" component={Signin}/>
        <Route exact path="/" component={Regis}/>
					<Route path="/category" component={Category}/>
					<Route path="/top" component={MiniDrawer} />
					<Route path="/about" component={About} />
				</Switch>
			</>
		);
	}
}
export default App;
