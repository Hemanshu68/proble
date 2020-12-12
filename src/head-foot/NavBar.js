import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";
import logo from "../assets/logo-black.png";
import "./Navbar.css";

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    goto(e) {
        console.log(e);
    }
    render() {
        return (
            <Navbar expand='md' className='nav_bar'>
                <NavbarBrand href='/'>
                    <img src={logo} alt='Probe' className='logo_img' />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle}>
                    <FontAwesomeIcon
                        icon={!this.state.isOpen ? faBars : faTimes}
                        className='toggle-ico'
                    />
                </NavbarToggler>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className='drptitle'>
                                Campus
                            </DropdownToggle>
                            <DropdownMenu className='ddd'>
                                <Link to='/category/insti'>
                                    <DropdownItem>Insti</DropdownItem>
                                </Link>

                                <Link to='/category/hostel'>
                                    <DropdownItem>Hostel</DropdownItem>
                                </Link>

                                <Link to='/category/clubs'>
                                    <DropdownItem>Clubs</DropdownItem>
                                </Link>

                                <Link to='/category/technical'>
                                    <DropdownItem>Technical</DropdownItem>
                                </Link>

                                <Link to='/category/cultural'>
                                    <DropdownItem>Cultural</DropdownItem>
                                </Link>

                                <Link to='/category/studentscouncil'>
                                    <DropdownItem>
                                        Students Council
                                    </DropdownItem>
                                </Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className='drptitle'>
                                Growing Minds
                            </DropdownToggle>
                            <DropdownMenu className='ddd'>
                                <Link to='/category/achievements'>
                                    <DropdownItem>Achievements</DropdownItem>
                                </Link>
                                <Link to='/category/alumni'>
                                    <DropdownItem>Alumni</DropdownItem>
                                </Link>
                                <Link to='/category/crackJackers'>
                                    <DropdownItem>CrackJackers</DropdownItem>
                                </Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem
                            className='nav_item'
                            href='/category/futuristic'
                        >
                            Futuristic
                        </NavItem>
                        <NavItem className='nav_item' href='/contact'>
                            Contact
                        </NavItem>
                        <NavItem className='nav_item' href='/team'>
                            Team
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
