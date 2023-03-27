import React from "react";
import s from "./FormValid.module.css";

class FormValid extends React.Component {
  state = {
    email: "",
    isAgreeWithTerms: false,
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleCheckbox = (event) => {
    this.setState({ isAgreeWithTerms: event.target.checked });
  };

  handleSubmit = () => {
    const isValidEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(this.state.email)
    const isValidCheckbox = this.state.isAgreeWithTerms

    if (!isValidEmail) {
        alert('Your email is not valid')
        return
    }
    if (!isValidCheckbox) {        
        alert("Your should accept all terms and conditions")
        return
    }

    this.setState({
        email: '',
        isAgreeWithTerms: false
    })

    alert('Thank you for subscription!')
    return

  };

  render() {
    const { email, isAgreeWithTerms } = this.state;
    return (
      <div className={s.FormValid}>
        <h2>Validation email</h2>
        <div className={s.boxInput}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleEmail}
          />
        </div>
        <div className={s.boxInput}>
          <label>
            <input
              type="checkbox"
              name="isAgreeWithTerms"
              value={isAgreeWithTerms}
              onChange={this.handleCheckbox}
            />
            I agree with terms and conditions
          </label>
        </div>
        <div className={s.boxButton}>
          <button onClick={this.handleSubmit}>Send</button>
        </div>
      </div>
    );
  }
}

export default FormValid;
