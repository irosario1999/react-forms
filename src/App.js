import React, { Component } from "react";
import Form from "./componets/Form";

export default class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: ""
  };

  getFormValues = (e, name) => {
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
        <Form
          getFormValues={this.getFormValues}
          getAllFormData={this.getAllFormData}
        />
      </>
    );
  }
}
