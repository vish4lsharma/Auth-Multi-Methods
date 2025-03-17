import SocialLogin from "./components/SocialLogin";
import InputField from "./components/InputField";

const App = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>

      <SocialLogin />

      <p className="separator"><span>or</span></p>

      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />

        <a href="#" className="forgot-password-link">Forgot password?</a>

        <button type="submit" className="login-button">Log In</button>
      </form>
      
      <p className="signup-prompt">
        Don't have an account? <a href="#" className="signup-link">Sign up</a>
      </p>
    </div>
  )
}
export default App;