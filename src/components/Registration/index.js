import {Link} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

class Registration extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    phoneNumber: '',
    address: '',
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangePhoneNumber = event => {
    this.setState({phoneNumber: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeAddress = event => {
    this.setState({address: event.target.value})
  }

  registrationForm = async event => {
    event.preventDefault()
    const {userName, email, password, phoneNumber, address} = this.state
    const userDetails = {userName, password, email, phoneNumber, address}
    const url = 'https://fable-api-h6v5.onrender.com/register'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      console.log('Registration Success')
    } else {
      console.log('Registration Failed ')
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderEmail = () => {
    const {email} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          Email
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={email}
          onChange={this.onChangeEmail}
        />
      </>
    )
  }

  renderPhoneNumber = () => {
    const {phoneNumber} = this.state
    return (
      <>
        <label className="input-label" htmlFor="phonenumber">
          Phone Number
        </label>
        <input
          type="text"
          id="phonenumber"
          className="username-input-field"
          value={phoneNumber}
          onChange={this.onChangePhoneNumber}
        />
      </>
    )
  }

  renderUserName = () => {
    const {userName} = this.state
    return (
      <>
        <label className="input-label" htmlFor="userName">
          User Name
        </label>
        <input
          type="text"
          id="userName"
          className="username-input-field"
          value={userName}
          onChange={this.onChangeUserName}
        />
      </>
    )
  }

  renderAddress = () => {
    const {address} = this.state
    return (
      <>
        <label className="input-label" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="username-input-field"
          value={address}
          onChange={this.onChangeAddress}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    return (
      <div className="login-form-container">
        <img
          src="https://res.cloudinary.com/dwzaz0hvq/image/upload/v1675802918/Screenshot_41_aa2qx6.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://res.cloudinary.com/dwzaz0hvq/image/upload/v1675802918/Screenshot_41_aa2qx6.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.registrationForm}>
          <img
            src="https://fable.club/wp-content/uploads/2022/11/Fable-Club.svg"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUserName()}</div>
          <div className="input-container">{this.renderEmail()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">{this.renderPhoneNumber()}</div>
          <div className="input-container">{this.renderAddress()}</div>

          <button type="submit" className="login-button">
            Register
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          <Link to="/login">
            <button type="submit" className="register-button">
              Login
            </button>
          </Link>
        </form>
      </div>
    )
  }
}

export default Registration
