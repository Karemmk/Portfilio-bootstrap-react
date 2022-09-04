import React from "react";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
  Button
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { MDBSwitch } from "mdb-react-ui-kit";
import { nezla } from "../Redux/darkSlice";
import Toggle from "./Toggle/Toggle";

function NavBar() {
  // Collapse isOpen State
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div id="navbar" className="mb-5 pb-5">
      <Navbar className="mb-5" fixed="top" color="light" light expand="md">
        <NavbarBrand href="Home" className="row">
          <div className="col-7 fw-bold fs-3 text-danger"> kaRem </div>
          <div className="col-5 mt-2 ">
            <Toggle />
          </div>
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem className="mt-1 ">
              <NavLink href="#">
                <Link activeClass="active" to="navbar" spy={true} smooth={true}>
                  <span className="fa fa-home fa-lg"></span>Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="mt-1">
              <NavLink href="#">
                <Link to="services" spy={true} smooth={true}>
                  <span className="fa fa-list fa-lg"></span>Services
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="mt-1">
              <NavLink href="#">
                <Link to="skills" spy={true} smooth={true}>
                  <span className="fa fa-address-card fa-lg"></span>Skills
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="mt-1">
              <NavLink href="#">
                <Link to="about" spy={true} smooth={true}>
                  <span className="fa fa-info fa-lg"></span>About
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <Link
                  to="contact"
                  className="btn btn1 text-white bg-warning p-2 rounded-pill "
                  spy={true}
                  smooth={true}
                >
                  Contact
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
