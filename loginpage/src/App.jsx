import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

const LoginPage = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          {/* <h1>Login Page</h1> */}
        </div>
        <div className="auth0-login">
          {!isAuthenticated ? (
            <button onClick={() => loginWithRedirect()} className="auth0-btn">
              <span>Login</span>
            </button>
          ) : (
            <>
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="auth0-btn">
                <span>Log Out</span>
              </button>
              <div className="profile">
                {isLoading ? (
                  <div>Loading ...</div>
                ) : (
                  <>
                    <img src={user.picture} alt={user.name} className="profile-img" />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
