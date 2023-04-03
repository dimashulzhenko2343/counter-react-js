import React, { Component } from "react";
import s from "./Form.module.css";

class Form extends Component {
  state = {
    firstName: "",
    email: "",
    message: "",
    selest: "",
    subscription: false,
    gender: "",
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleCheckboxChange = (event) =>
    this.setState({ [event.target.name]: event.target.checked });

  validateName = () => {
    if (this.state.firstName.length < 4) {
      alert("Имя должно содержать более четырех символов");
    }
  };

  validateEmail = () => {
    if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(this.state.email)
    ) {
      alert("Ошибка email");
    }
  };

  render() {
    const { firstName, email, message, select, subscription, gender } =
      this.state;
    return (
      <div className={s.Form}>
        <h2>Forms and validation</h2>
        <div className={s.boxInput}>
          <input
            type="text"
            name="firstName"
            placeholder="Введите имя"
            value={firstName}
            onChange={this.handleChange}
            onBlur={this.validateName}
          />
        </div>
        <div className={s.boxInput}>
          <input
            type="email"
            name="email"
            placeholder="Введите mail"
            value={email}
            onChange={this.handleChange}
            onBlur={this.validateEmail}
          />
        </div>
        <div className={s.boxInput}>
          <textarea
            name="message"
            value={message}
            placeholder="Введите текст сообщения"
            cols="20"
            rows="5"
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className={s.boxInputCheckbox}>
          <div className={s.boxSelect}>
            <select name="select" value={select} onChange={this.handleChange}>
              <option value="" disabled></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="boxCheckbox">
            <label>
              <input
                type="checkbox"
                name="subscription"
                checked={subscription}
                onChange={this.handleCheckboxChange}
              />
              Я готов
            </label>
          </div>
        </div>
        <div className={s.boxInput}>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={this.handleChange}
          /> male
          <input
            type="radio"
            name="gender"
            value="bigender"
            checked={gender === "bigender"}
            onChange={this.handleChange}
          /> bigender
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={this.handleChange}
          /> female
        </div>
      </div>
    );
  }
}

export default Form;
