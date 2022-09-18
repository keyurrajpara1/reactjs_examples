import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom'; // React 17

/*let reactElement = React.createElement("h1", null, "Hello World");
export default reactElement;*/

class App extends Component{
	render(){
		// return React.createElement("h1", null, "Hello World");
		// return <h1>Hello World</h1>;
		/*return (
			<div>
				<h1>Hello World</h1>
				<p>Welcome</p>
			</div>
		);*/
		return (
			<>
				<h1>Hello {this.props.name}</h1>
				<p>Welcome</p>
			</>
		);
		/*return (
			<React.Fragment>
				<h1>Hello World</h1>
				<p>Welcome</p>
			</React.Fragment>
		);*/
		/*return (
			<Fragment>
				<h1>Hello World</h1>
				<p>Welcome</p>
			</Fragment>
		);*/
	}
}
export default App;