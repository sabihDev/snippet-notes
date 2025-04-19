// AuthPage.jsx
import React, { useState } from 'react';
// import './global.css';
type SignupProps = {
  isSignup: boolean;
};

const Signup: React.FC<SignupProps> = ({ isSignup }) => {
  const [isSignedup, setIsSignedup] = useState(false);

  const toggleMode = () => setIsSignedup(!isSignedup);

  return (
    <div className={`auth-wrapper ${isSignedup ? 'slide-signup' : 'slide-login'}`}>
      <div className="auth-card">
        <div className="auth-illustration">
          <h2>{isSignedup ? 'Welcome!' : 'Welcome Back!'}</h2>
          <p>{isSignedup ? 'Create your coding snippets without any hassle. Make your life easier. Start coding now.' : 'Your coding journey continues here. Now you can login to your account and start coding.'}</p>
        </div>
        <div className="auth-form-wrapper">
          <h1>{isSignedup ? 'Sign Up' : 'Login'}</h1>
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            {isSignup && <input type="text" placeholder="Full Name" required />}
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
          </form>
          <div className="auth-toggle" onClick={toggleMode}>
            {isSignedup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;