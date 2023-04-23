import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match')
    } else {
      if (!nickname || !email || !password || !confirmPassword || !phone) {
        setErrorMessage('All fields are required')
      } else {
        // Perform form submission logic
        setErrorMessage('')
        setFormSubmitted(true)
      }
    }
  }
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  function validatePhone(phone) {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="main" id="main">
          <label htmlFor="nickname">Name:</label>
          <input type="text" id="nickname" name="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} className={nickname.length === 0 && "error"} /><br />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className={email.length === 0 && "error"} /><br />
          {!validateEmail(email) && email.length > 0 && <span className="error-message">Invalid email format</span>}
  
          <label htmlFor="password">Password:</label>
          <div className="password-wrapper">
            <input type={showPassword ? "text" : "password"} id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className={password.length === 0 && "error"} />
            <button type="button" className="show-hide-button" onClick={handleShowPassword}>{showPassword ? "Hide" : "Show"}</button>
          </div>
  
          <label htmlFor="confirm_password">Confirm password:</label>
          <div className="password-wrapper">
            <input type={showConfirmPassword ? "text" : "password"} id="confirm_password" name="confirm_password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={confirmPassword.length === 0 && "error"} />
            <button type="button" className="show-hide-button" onClick={handleShowConfirmPassword}>{showConfirmPassword ? "Hide" : "Show"}</button>
          </div>
          {password !== confirmPassword && confirmPassword.length > 0 && <span className="error-message">Passwords do not match</span>}
  
          <label htmlFor="phone_number">Phone Number:</label>
          <input type="tel" id="phone_number" name="phone_number" value={phone} onChange={(e) => setPhone(e.target.value)} className={phone.length === 0 && "error"} /><br />
          {!validatePhone(phone) && phone.length > 0 && <span className="error-message">Invalid phone number</span>}
  
          <button type="submit" disabled={password !== confirmPassword}>Submit</button>
          
          {errorMessage && <div id="root" className="error-message">{errorMessage}</div>}
        </div>
      </form>
    </>
  );
}

export default App;
