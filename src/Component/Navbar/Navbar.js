import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoginIcon from '@mui/icons-material/Login';
import "./Navbar.css"
function Navbar() {
  return<>
  <section className='navbar-container'>
<div className='logo-container load1'>Mode UI</div>
<div className='nav-list'>
    <ul className='list-items'>
        <li className="dropdown" >
         <Link className='list load2'><span>Card access</span>< KeyboardArrowDownIcon/></Link>
         <ul className='sub-list'>
                  <li>
                    <Link >Demo1 Link</Link>
                  </li>
                  <li>
                    <Link className='gap-top'>Demo2 Link</Link>
                  </li>
                </ul>
        </li>
        <li>
        <Link className='list load3'>Banking</Link>
        </li>
        <li>
        <Link className='list load4'>Processing</Link>
        </li>
        <li>
        <Link className='list load5'>About</Link>
        </li>
        <li>
        <Link className='list load6'>Carrier</Link>
        </li>
        <li>
        <Link className='list load7'>Contact</Link>
        </li>

    </ul>
  
</div>
  <div className='login-container load8'>
      <span>Login</span><LoginIcon/>
    </div>

  </section>
  </>
}

export default Navbar