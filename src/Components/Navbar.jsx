import React from 'react'
import welcome from '../assets/welcome.png'
import css from "../Style/Navbar.module.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className={css.nav}>
<img src={welcome} />

<ul>
  <li>
    <Link to="/" className={css.link}>Home</Link>
  </li>

  <li>
    <Link to="/teamlist" className={css.link}>Team list</Link>
  </li>
</ul>
    </nav>
  )
}

export default Navbar
