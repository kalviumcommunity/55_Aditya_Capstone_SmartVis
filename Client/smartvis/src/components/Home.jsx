import './Home.css'
import {Link} from "react-router-dom";
function Home() {


  return (
    <>
    <nav>
        <div className="navlogo">
            <h1 className='logo'><span className='smart'>Smart</span><span className='vis'>Vis</span></h1>
        </div>

        <div className="nav-items">
          <h2 className='about'>About</h2>
          <Link to="/login"><button className='btn'>Login</button></Link>
          <Link to="/signup"><button className='btn'>Signup</button></Link>
        </div>

    </nav>
        <div className="introduction">
          <div className="theory">
            <p>Welcome to SmartVis Visitor Management System, your gateway to effortless security and seamless experiences. Our platform streamlines visitor registration and check-in processes, enhancing security measures and providing a smooth journey for all guests. A visitor management system efficiently handles visitor data, tracks visitor movements, issues badges, and notifies hosts upon arrival. It ensures compliance,improves efficiency, and enhances overall safety within your premises.</p>
          </div>
          <div className="img">
            <img src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height="400px"></img>
          </div>
        </div>

        <div className="start">
          <Link to="signup"><button className='s'>Get Started</button></Link>
        </div>
        <br />
        <br />

        <div className="stats">
          <div className="visitors">
            <h1>10M+</h1><br></br>
            <h3>Visitors</h3>
          </div>

          <div className="install">
            <h1>500+</h1><br />
            <h3>Happy Installations</h3>
          </div>

          <div className="products">
            <h1>7</h1><br />
            <h3>Products Launched</h3>
          </div>

        </div>
    </>
  )
}

export default Home
