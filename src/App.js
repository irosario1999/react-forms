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
    console.log(this.state);
  };

  render() {
    return (
      <Form
        getFormValues={this.getFormValues}
        getAllFormData={this.getAllFormData}
      />
    );
  }
}
