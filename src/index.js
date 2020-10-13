import React from 'react';
import ReactDOM from 'react-dom';
import Menu from "./menu/Menu";
import Home from "./home/Home";
import Mangatheque from "./mangatheque/Mangatheque";
import "./index.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import * as serviceWorker from './serviceWorker';



class App extends React.Component
{
	render()
	{
		return <div>

	    <Router>
				<Menu/>
	      <Switch>
	        <Route path="/mangatheque">
						<Mangatheque/>
	        </Route>
	        <Route path="/contact">
						user
	        </Route>
					<Route path="/">
						<Home/>
					</Route>
	      </Switch>
			</Router>
		</div>;
	}
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
