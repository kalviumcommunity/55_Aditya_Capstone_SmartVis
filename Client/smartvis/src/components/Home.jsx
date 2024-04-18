import './Home.css'
import { Link } from "react-router-dom";
function Home() {


  return (
    <>
      <div className='homeNav'>
        <div className="navlogo">
          <h1 className='logo'><span className='smart-logo'>Smart</span><span className='vis'>Vis</span></h1>
        </div>

        <div className="nav-items">
          <h2 className='about'><Link to="/about" className='abt'>About</Link></h2>
          <Link to="/login"><button className='btn'>Login</button></Link>
          <Link to="/signup"><button className='btn'>Signup</button></Link>
        </div>

      </div>
      <div className="introduction">
       <div className="container">
          <div className="theory">
            <p>Welcome to SmartVis Visitor Management System, your gateway to effortless security and seamless experiences. Our platform streamlines visitor registration and check-in processes, enhancing security measures and providing a smooth journey for all guests. A visitor management system efficiently handles visitor data, tracks visitor movements, issues badges, and notifies hosts upon arrival. It ensures compliance,improves efficiency, and enhances overall safety within your premises.</p>
          </div>
          <div className="homeimage">
            <img src='https://img1.wsimg.com/isteam/ip/c62e634c-020a-4133-b25c-b8d6b108cf40/pexels-photo-518244.jpeg/:/rs=w:1280,h:853' height="400px" alt='visitors-in-company'></img>
          </div>
       </div> 
      <div className="start">
        <Link to="signup"><button className='s'>Get Started</button></Link>
      </div>
      </div>
      <br />
      <br />

      <div className="container2">
        <div className="content">
          <div className="services">
            <h3>Our Services & Solutions</h3>
            <h1 className='dark'>Upgrade Your Visitor Management And Gate Pass Management</h1>
            <h3 className='info'>Manage Visitors, Registers, Consumables, Couriers, Work Permits, Delivery Vehicles,<br />Employee Movement and Materials.</h3>
          </div>
        </div>
          <div className="intro">
            <div className="one">
              <div className="orange"><img src='https://happy-visitor.com/wp-content/uploads/2020/08/visitor_management_new-min.png' className='first'></img></div>
              <h2 className='v'>Visitor Management</h2>
              <p className='brief'>Track and manage the visitors by converting the manual paper-based system into a digital visitor management system.</p>
            </div>
            <div className="one">
              <div className="green"><img src="https://happy-visitor.com/wp-content/uploads/2020/08/material_new-min.png" alt=""  className='first'/></div>
              <h2 className='v'>Material Gate Pass Management</h2>
              <p className='brief'>Comprehensive material gate pass management system to track and record returnable and non-returnable materials.</p>
            </div>
            <div className="one">
              <div className="blue"><img src="https://happy-visitor.com/wp-content/uploads/2020/08/register_new-min.png" alt="" className='first' /></div>
              <h2 className='v'>Register Digitization</h2>
              <p className='brief'>No more use of manual paper-based registers. Digitize all of your registers to run smooth reception.</p>
            </div>
            <div className="one">
              <div className="pink"><img src="https://happy-visitor.com/wp-content/uploads/2020/08/inventory-management_new-min.png" alt="" className='first' /></div>
              <h2 className='v'>Consumables Inventory Management</h2>
              <p className='brief'>Gain real-time visibility and reduce losses from unaccounted items, increase accurate billing for daily inventory consumables.</p>
            </div>
          </div>
          <div className="book">
            <div className="appointment">
              <Link to="/book"><button className="book-now">Book Appointment</button></Link>
            </div>
          </div>
      </div>

      <footer className='Home-footer'>
        <div className="foot-container">
          <div className="tagline">
            <h1 className='logo'><span className='smart-logo'>Smart</span><span className='vis'>Vis</span></h1>
            <h3 className='arrival'>Where every arrival counts</h3>
          </div>
          <div className="Contact-us">
            <h1>Contact Us</h1><br />
            <h3>Mobile: 9172510711</h3>
            <h3>Email: Smartvis@gmail.com</h3>
          </div>
          <div className="Social">
            <h1> Social Accounts</h1>
            <img src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png" alt=""  height="50px" className='instagram'/><br />
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" height="50px" className='facebook' /><br />
            <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" height="50px" className='linkedin' />
          </div>
        </div>
        <div className="endline">
          <div>2024 SmartVis ESOLUTIONS PVT.LTD.All Rights Reserved</div>
        </div>
      </footer>


    </>
  )
}

export default Home
