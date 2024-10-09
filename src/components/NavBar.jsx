import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ backgroundColor: 'darkslategrey' }}>
        <Container>
            <Navbar.Brand>Portfolio
              </Navbar.Brand>
                <Nav>
                <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/project">Project</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About Me</Link>
                </li>
              </ul>

                    {/* <Link>
                    </Link> */}
                </Nav>
        </Container>
    </Navbar>

    </>
  )
}

export default NavBar
