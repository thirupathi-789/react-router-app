import React, { Component } from "react";
import "./index.css";

class Contact extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      textarea: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your feedback submitted successfully!!`);
    this.setState({ name: "", email:"", textarea:"" });
  }

  render() {
    const { name, email, textarea } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <div className="input-elements">
          <label for="name">Name</label>
          <input id="name" type="text" value={name} onChange={(e) => {
            this.setState({ name: e.target.value })
          }} />
        </div>
        <div className="input-elements">
          <label for="email">Email</label>
          <input id="email" type="email" value={email} onChange={(e) => {
            this.setState({ email: e.target.value })
          }} />
        </div>
        <div className="input-elements">
          <label for="feedback">Feedback</label>
          <textarea id="feedback" rows="4" cols="50" value={textarea} onChange={(e) => {
            this.setState({ textarea: e.target.value })
          }} />
        </div>
        <input type="submit" />
      </form>
    )
  }
}

export default Contact;