import React,{useState} from "react";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand
} from "reactstrap";
import { Link } from "react-scroll";
import Toggle from "./Toggle/Toggle";
import { useSelector, useDispatch } from "react-redux";
import { trans } from "../Redux/transSlice";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { BsFillHouseDoorFill,BsInfoCircle,BsCardChecklist,BsCardText,BsHeadphones } from "react-icons/bs";


function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const dispatch = useDispatch();
  const traChk = useSelector((state) => state.translate.value);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(trans());
  };
  // Collapse isOpen State
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div id="navbar" className="mb-5 pb-5">
      <Navbar className="mb-5" fixed="top" color="light" light expand="md">
        <NavbarBrand className="row justify-between">
          <div className="col-4 fw-bold fs-3 text-danger "> kaRem </div>
          <div className="col-3 mt-2 ">
            <Toggle />
          </div>
          <div className="col-5 mt-1">
            
          <Dropdown isOpen={dropdownOpen} toggle={toggle} >
      <DropdownToggle caret className='text-white' size="sm" color='warning'>
      {traChk ?  "Francais":"English" }
      </DropdownToggle>
      <DropdownMenu className="bg-light">
        <DropdownItem className="border-bottom" onClick={traChk?  ((e)=>handleClick(e)):((e)=>e.preventDefault(e)) } >{traChk? 'Anglais':'English'}</DropdownItem>
        <DropdownItem onClick={traChk? ((e)=>e.preventDefault(e)) : ((e)=>handleClick(e))}>{traChk? 'Francais':'French'}</DropdownItem>
      </DropdownMenu>
    </Dropdown>

          </div>
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="ms-auto" navbar>
            <NavItem className="mt-1 ">
              <NavLink href="#">
                <Link activeClass="active" to="navbar" spy={true} smooth={true} onClick={() => setIsOpen(false)}>
                  <BsFillHouseDoorFill className='mb-2'/>{traChk? 'Accueil' :'Home' }
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="mt-1">
              <NavLink href="#">
                <Link to="services" spy={true} smooth={true} onClick={() => setIsOpen(false)}>
                <BsCardChecklist className='mb-1 mx-1'/>Services
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="mt-1">
              <NavLink href="#">
                <Link to="skills" spy={true} smooth={true} onClick={() => setIsOpen(false)}>
                <BsCardText className='mb-1 mx-1'/>{traChk?'Compétences':'Skills'}
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="mt-1">
              <NavLink href="#">
                <Link to="about" spy={true} smooth={true} onClick={() => setIsOpen(false)}>
                  <BsInfoCircle className='mb-1 mx-1'/>{traChk?'À propos':'About'}
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                
                <Link
                  to="contact"
                  className="btn btn1 text-white bg-warning p-1 pl-2 rounded-pill"
                  spy={true}
                  smooth={true}
                  onClick={() => setIsOpen(false)}
                >
                  <BsHeadphones className='mb-1 mx-1'/>
                 {traChk? 'Contactez' :'Contact' }
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
