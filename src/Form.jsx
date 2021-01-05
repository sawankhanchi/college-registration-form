import React, {Component} from "react";
import "./form.css"

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = { firstname: "", 
                       lastname: "",
                       email: "",
                       password: "",
                       phone: "",
                       message: "",
                       gender: ""

       }
    }

    // handlefname = (event) => {

    //     this.setState({ firstname: event.target.value })
    //     // console.log(event.target.value);
    // }

    // handlelname = (event) => {
    //     this.setState({ lastname: event.target.value })
    // }

    // handleemail= (event) => {
    //     this.setState({ email: event.target.value })
    // }

    // handlepassword = (event) => {
    //     this.setState({ password: event.target.value })
    // }

    // handlephone= (event) => {
    //     this.setState({ phone: event.target.value })
    // }

    // handlemessage= (event) => {
    //     this.setState({ message: event.target.value })
    // }

    // handlegender = (event) => {
    //     this.setState({ gender: event.target.value })
    // }

    handlechangeall = (event) => {
        this.setState( { [event.target.name] : event.target.value } )
    }

    handlesubmit = (event) => {
        // alert (`Thank you! Your Application Has Been Sent Succesfully!`);
        alert( JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <div className="main_div">
                <form onSubmit={this.handlesubmit} >
                    <label> Firstname </label> <br/>
                    <input type="text" placeholder="Enter your first name" name="fullname" value={this.state.fullname} 
                           onChange={this.handlechangeall} /> <br/>

                    <label> Lastname </label> <br/>
                    <input type="text" placeholder="Enter your last name" name="lastname" value={this.state.lastname} 
                           onChange={this.handlechangeall} /> <br/>

                    <label> Email </label> <br/>
                    <input type="email" placeholder="Enter your email id" name="email" value={this.state.email}  
                           onChange={this.handlechangeall} /> <br/>

                    <label> Password </label> <br/>
                    <input type="password" placeholder="Enter your password" name="password" value={this.state.password} 
                           onChange={this.handlechangeall} /> <br/>

                    <label> Mobile </label> <br/>
                    <input type="phone" placeholder="Enter your mobile no." name="phone" value={this.state.phone} 
                           onChange={this.handlechangeall} /> <br/>

                    <label> Message </label> <br/>
                    <textarea value={this.state.message} placeholder="Write a message" name="message"
                              onChange={this.handlechangeall} /> <br/>

                    <label> Gender </label> <br/>
                    <input type="text" value={this.state.gender} placeholder="Enter your gender" name="gender"
                           onChange={this.handlechangeall} /> <br/>

                    <input type="submit" value="Send" />
                </form>
            </div>
        )
    }
}

export default Form;
