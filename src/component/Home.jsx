import { useState } from "react"
import { Link } from "react-router-dom"

const styles_Login1 = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: 'orange'
}
const styles_default = {

  background: 'yellow',
  minHeight: '100vh'
}



const Home = () => {



  // const[color , changeColor] = useState(styles_default)
    const [color, changeColor] = useState("#fff");
 
  return (
    // <div style={color} id="main">
    <div style={{ background: color }} id="main">
      <nav>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login1" onClick={()=> changeColor("#9c27b0")}>Login_1</Link>
          </li>
          <li>
            <Link to="/Login2">Login_2</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}
export default Home