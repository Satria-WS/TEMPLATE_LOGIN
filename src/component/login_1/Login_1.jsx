const Login_1 = () => {
  return (
    <>
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required></input>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required></input>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox"></input>
              Remember me
            </label>
            <a href="#"> Forgot password</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="register-link">
            <p className="register-link">
              <p>Don't have an account? <a href="#">Register</a></p>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login_1;
