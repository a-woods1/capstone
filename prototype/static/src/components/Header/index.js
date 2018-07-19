import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Glyphicon} from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor'


import * as actionCreators from '../../actions/auth';
import brand_logo from '../../images/photos/placeholder.png';
import profile_img from '../../images/profile-img.png';

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
            <NavItem className={num_stages-1 === i ? "current-stage" : ""} href="">
            <div>
            {num_stages-1 === i ?
              <span className="ordinal_stage">Current Stage</span>
              :
              <span className="ordinal_stage">Stage {stage_id}</span>
            }
            <span className="stage_title">{stage_title}</span>
            </div>
            </NavItem>
         )
       })
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
      <header id="both-nav">
        <Navbar inverse collapseOnSelect id="top-nav">
        <Navbar.Header>
          <Navbar.Brand className="brand-logo">
            <a href="/"><span>B</span></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav id="top-nav-stages">
            {this.renderEntry()}
          </Nav>
          <Nav pullRight id="top-nav-right-nav">
            <NavItem className="my-requests" title="My Requests" onClick={() => this.dispatchNewRoute('/requests')}>
              My Requests
            </NavItem>
            <NavDropdown className="top-nav-user-menu" title={<span><img id="profile_img" src={profile_img} />Hi, {this.props.userName}!</span>} id="basic-nav-dropdown">
              <NavItem>
                <MenuItem onClick={(e) => this.logout(e)}>
                  Log Out
                </MenuItem>
              </NavItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar id="sub-nav">
        <Nav>
          <NavItem href='#section1'>{this.props.steps[0].step_title}
          </NavItem>
          <NavItem href='#section2'>{this.props.steps[1].step_title}<div className="caret-right"></div>
          </NavItem>
          <NavItem href='#section3'>{this.props.steps[2].step_title}<div className="caret-right"></div>
          </NavItem>
          <NavItem href='#section4'>{this.props.steps[3].step_title}<div className="caret-right"></div>
          </NavItem>
        </Nav>
      </Navbar>
      </header>
        );
    }
}

Header.propTypes = {
    logoutAndRedirect: React.PropTypes.func,
    isAuthenticated: React.PropTypes.bool,
};
