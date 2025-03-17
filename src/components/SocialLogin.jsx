
const SocialLogin = () => {
    // for google auth0
    const handleGoogleLogin = () => {
        window.location.href = "#";
      };


    return (
        
      <div className="social-login">

        <button className="social-button">
          <img src="google.svg" alt="Google" className="social-icon" href="#" />
          Google
        </button>

        {/* <button className="social-button">
          <img src="apple.svg" alt="Apple" className="social-icon" />
          Apple
        </button> */}
      </div>
    )
  }
  export default SocialLogin;