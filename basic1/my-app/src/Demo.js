import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './demo.css';
/*class Demo extends Component{
	render(){
		return <div className="mainDiv">
			<h1>Hello World</h1>
			<h1>Hello {this.props.name}</h1>
			<p>Welcome</p>
		</div>
	}
}*/
/*const Demo = (props) => {
	return <div className="mainDiv">
		<h1>Hello World</h1>
		<h1>Hello {props.name}</h1>
		<p>Welcome</p>
	</div>
};*/
const Demo = ({name}) => {
	return <div className="mainDiv">
		<h1>Hello World</h1>
		<h1>Hello {name}</h1>
		<p>Welcome</p>
	</div>
};
export default Demo;