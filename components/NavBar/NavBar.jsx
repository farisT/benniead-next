import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Link from 'next/link';
import bennieLogo from '../../static/images/logo.jpeg';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/"><img className="img-fluid logo" src={bennieLogo} alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link href="/about">About</Link>
              </NavItem>
              <NavItem>
                
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

