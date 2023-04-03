import React,{Component} from 'react';
import './avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';
/*const Avatar = (props) => {
	const avatarListArray = [
		{ id:1, name:"Keyur Rajpara", work:"Web Developer" },
		{ id:2, name:"Amit", work:"Web Developer" },
		{ id:3, name:"Balaram", work:"Web Developer" },
		{ id:4, name:"Cira", work:"Web Developer" }
	];
	const avatarListCard = avatarListArray.map((value, index) => {
		return <AvatarList id={value.id} name={value.name} work={value.work} />
	});
	return (
		<div className="mainPage">
		<h1>Welcome to Avatar World</h1>
			{avatarListCard}
		<button>Click Here</button>
	</div>);
}*/
class Avatar extends Component{
	constructor(){
		super();
		this.state = {
			name: "Welcome to Avatar World"
		}
	}
	nameChange(){
		this.setState({
			name: "Welcome"
		})
	}
	render(){
		const avatarListArray = [
			{ id:1, name:"Keyur Rajpara", work:"Web Developer" },
			{ id:2, name:"Amit", work:"Web Developer" },
			{ id:3, name:"Balaram", work:"Web Developer" },
			{ id:4, name:"Cira", work:"Web Developer" }
		];
		const avatarListCard = avatarListArray.map((value, index) => {
			return <AvatarList key={index} id={value.id} name={value.name} work={value.work} />
		});
		return (
			<div className="mainPage">
			<h1>{this.state.name}</h1>
				{avatarListCard}
			<button onClick={() => this.nameChange()}>Click Here</button>
		</div>);
	}
}
export default Avatar;