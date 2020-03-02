










import React, { Component } from "react";
import Form from "./componets/Form";
import './App.css'
export default class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: ""
  };


  getFormValues = (e, name) => {

    const  password = "1234"

    this.setState({
      [name]: e.target.value
    }, () => console.log(this.state));
  };

  getAllFormData = e => {
    e.preventDefault();
    const {firstName, lastName} = this.state
    alert(`Hello ${firstName} ${lastName}`)
  };

  render() {
    return (
      <>
        <h1>Hello Guys!</h1>
        {/* <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" onClick={this.getAllFormData}>click</a> */}
        <Form
          getFormValues={this.getFormValues}
          getAllFormData={this.getAllFormData}
        />
      </>
    );
  }
}
