import PersonIcon from "@mui/icons-material/Person";
import LockIcon from '@mui/icons-material/Lock';
import "./style.css"
const Login_1 = () => {
  return (
    <>
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i><PersonIcon fontSize="small" /></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i><LockIcon fontSize="small"/></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox"/>
              Remember me
            </label>
            <a href="#"> Forgot password</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="register-link">
            <p className="register-link">
              <p>
                Don't have an account? <a href="#">Register</a>
              </p>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login_1;
