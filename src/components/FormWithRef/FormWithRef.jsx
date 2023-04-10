import React, { Component } from "react";
import s from "./FormWithRef.module.css";

class FormWithRef extends Component {
  constructor() {
    super();
    this.state = {
      card: '',
      email: "",
    }
    this.cardRef = React.createRef();
    this.emailRef = React.createRef();
  }

  handleChange = (event) => {
    this.setState(() => ({ [event.target.name]: event.target.value }), () => {
      if(this.state.card.length === 16){
        this.emailRef.current.focus();
      }
    });
  };

  componentDidMount() {
    this.cardRef.current.focus();
  }

  render() {
    const { card, email } = this.state;
    return (
      <div className={s.FormWithRef}>
        <h2>Form whith Ref</h2>
        <div className="boxInput">
          <input
            type="text"
            name="card"
            placeholder="card"
            value={card}
            onChange={this.handleChange}
            ref={this.cardRef}
          />
        </div>
        <div className="boxInput">
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
            ref={this.emailRef}
          />
        </div>
      </div>
    );
  }
}

export default FormWithRef;
