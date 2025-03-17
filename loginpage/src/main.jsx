import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import LoginPage from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-xob5q2qx8z60cn13.us.auth0.com"
      clientId="TorvOF9ld8WDmVy4fev0gcof4PTUmJ4E"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <LoginPage />
    </Auth0Provider>
  </React.StrictMode>,
)