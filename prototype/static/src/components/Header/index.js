import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import LeftNav from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import { Navbar, Nav, NavItem, NavDropdown, Glyphicon} from 'react-bootstrap';


import * as actionCreators from '../../actions/auth';
import brand_logo from '../../images/photos/placeholder.png';

function mapStateToProps(state) {
    return {
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated,
        stages: state.auth.stages,
        steps: state.auth.steps,
        categories: state.auth.categories,
        products: state.auth.products,
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
          display: "none",
          cart_quantity: 0,
          cart_items: [],
        };

        this.initializeCart = this.initializeCart.bind(this);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    renderEntry(){
        var num_stages = this.props.stages.length
        //console.log(num_stages)
        return Object.entries(this.props.stages).map(([key, value], i) => {
          //console.log("i " + i)
          var obj = this.props.stages[i]
          var stage_id = obj.stage_id
          var stage_title = obj.stage_title
          return (
            <NavItem href="">
            <div>
            {num_stages-1 === i ?
              <span className="ordinal_stage">Current Stage</span>
              :
              <span className="ordinal_stage">Stage {stage_id}</span>
            }
            <br/>

            <span className="stage_title">{stage_title}</span>
            </div>
            </NavItem>
         )
       })
  }

    initializeCart() {
        //set item quantity
        var previous_quantity = localStorage.getItem("cart_quantity");

        if (previous_quantity == null) {
            previous_quantity = 0;
        }
        else {
            previous_quantity = parseInt(previous_quantity, 10);
        }
        this.setState({cart_quantity: previous_quantity})

        //set content
        var items = localStorage.getItem("cart_items");

        if (items == null) {
            items = [];
        }
        else {
            items = JSON.parse(items);
        }
        this.setState({cart_items: items})
    }


    mouseEnter() {
        this.setState({display: "block"})
        console.log("mouseEnter")
    }


    mouseLeave() {
        this.setState({display: "none"})
        console.log("mouseLeave")

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
      var icon = (
        <span class="logo">

            <img width="120px" height="33px" className="brand_logo" src={brand_logo} alt="logo"/>

        </span>
      );

      return (
       !this.props.isAuthenticated ?
        <header>
        </header>
      :
      <header>
      <header>
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><img src={brand_logo} width="20" height="20"/></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {this.renderEntry()}
          </Nav>
          <Nav pullRight>
            <NavItem title="My Requests" onClick={() => this.dispatchNewRoute('/requests')}>
              Requests
            </NavItem>
            <NavDropdown title={<span><Glyphicon glyph="user" /><span>Hi, {this.props.userName}!</span></span>
              } id="basic-nav-dropdown">
              <NavItem>
                <MenuItem onClick={(e) => this.logout(e)}>
                  Logout
                </MenuItem>
              </NavItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Navbar>
          <Nav>
            <NavItem>
              <FlatButton label={this.props.steps[0].step_title} onClick={() => this.dispatchNewRoute('/main')}/>
            </NavItem>
            <NavItem>
              <FlatButton label={this.props.steps[1].step_title} onClick={() => this.dispatchNewRoute('/main')}/>
            </NavItem>
            <NavItem>
              <FlatButton label={this.props.steps[2].step_title} onClick={() => this.dispatchNewRoute('/main')}/>
            </NavItem>
            <NavItem>
              <FlatButton label={this.props.steps[3].step_title} onClick={() => this.dispatchNewRoute('/main')}/>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    </header>
      </header>
        );
    }
}

Header.propTypes = {
    logoutAndRedirect: React.PropTypes.func,
    isAuthenticated: React.PropTypes.bool,
};
