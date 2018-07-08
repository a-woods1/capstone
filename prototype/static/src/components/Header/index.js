import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import LeftNav from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';


import * as actionCreators from '../../actions/auth';


function mapStateToProps(state) {
    return {
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

    }

    dispatchNewRoute(route) {
        browserHistory.push(route);
        this.setState({
            open: false,
        });

    }


    handleClickOutside() {
        this.setState({
            open: false,
        });
    }


    logout(e) {
        e.preventDefault();
        this.props.logoutAndRedirect();
        this.setState({
            open: false,
        });
    }

    openNav() {
        this.setState({
            open: true,
        });
    }




    render() {
        return (
            <header>

                <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">logo</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
    </Nav>
    <Nav pullRight>
      <NavDropdown title="My Account" id="basic-nav-dropdown">{
      !this.props.isAuthenticated ?
          <NavItem>
              <MenuItem onClick={() => this.dispatchNewRoute('/login')}>
                  Login
              </MenuItem>
              <MenuItem onClick={() => this.dispatchNewRoute('/register')}>
                  Register
              </MenuItem>
          </NavItem>
          :
          <NavItem>
              <MenuItem onClick={() => this.dispatchNewRoute('/requests')}>
                  Requests
              </MenuItem>
              <Divider />

              <MenuItem onClick={(e) => this.logout(e)}>
                  Logout
              </MenuItem>
          </NavItem>
        }
      </NavDropdown>

    </Nav>
  </Navbar.Collapse>
</Navbar>
                <div>
                <Navbar>
                <Nav>
                <NavItem>
                  <FlatButton label="Overview" onClick={() => this.dispatchNewRoute('/overview')} />
                </NavItem>
                <NavItem>
                  <FlatButton label="Arrival" onClick={() => this.dispatchNewRoute('/arrival')} />
                </NavItem>
                <NavItem>
                  <FlatButton label="Interview" onClick={() => this.dispatchNewRoute('/interview')} />
                </NavItem>

                </Nav>
                </Navbar>;
                </div>
            </header>


        );
    }
}

Header.propTypes = {
    logoutAndRedirect: React.PropTypes.func,
    isAuthenticated: React.PropTypes.bool,
};
