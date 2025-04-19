'use client'
import React, { useState } from 'react'

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="auth-wrapper">
      <div className={`auth-card ${isLogin ? 'slide-login' : 'slide-signup'}`}>
        {/* Illustration Panel */}
        <div className="auth-illustration">
          
          <h2>{isLogin ? 'Welcome Back!' : 'Join Us'}</h2>
          <p>{isLogin ? 'Login to continue.' : 'Signup to get started.'}</p>
        </div>

        {/* Form Panel */}
        <div className="auth-form-wrapper">
          <h1>{isLogin ? 'Login' : 'Signup'}</h1>
          <form className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" />
            </div>
            <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
            <p>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <span className="auth-toggle" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Signup' : 'Login'}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
