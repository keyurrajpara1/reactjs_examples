import React, {Component} from 'react';
class Form extends Component{
	constructor(props){
		super(props);
		this.state = {
			name:"Test",
			email:"test@test.com",
			mobile:1234567890,
			message:"Test Message"
		}
	}
	/*handleName = (event) => {
		this.setState({name:event.target.value});
	}
	handleEmail = (event) => {
		this.setState({email:event.target.value});
	}
	handleMobile = (event) => {
		this.setState({mobile:event.target.value});
	}
	handleMessage = (event) => {
		this.setState({message:event.target.value});
	}*/
	handleInputs = (event) => {
		this.setState({[event.target.name]:event.target.value});
	}
	handleSubmit = (event) => {
		/*alert(`Name: ${this.state.name}
			Email: ${this.state.email}
			Mobile: ${this.state.mobile}
			Message: ${this.state.message}`);*/
		alert(JSON.stringify(this.state));
		event.preventDefault();
	}
	render(){
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<br/><br/>
					<label>Name</label> <br/>
					<input type="text" name="name" value={this.state.name} onChange={this.handleInputs} />
					<br/>

					<label>Email</label> <br/>
					<input type="email" name="email" value={this.state.email} onChange={this.handleInputs} />
					<br/>
					
					<label>Mobile</label> <br/>
					<input type="number" name="mobile" value={this.state.mobile} onChange={this.handleInputs} />
					<br/>
					
					<label>Message</label>
					<textarea name="message" value={this.state.message} onChange={this.handleInputs} />
					<br/>

					<input type="submit" value="Send" />
					<br/>
				</form>
			</div>
		)
	}
}
export default Form;