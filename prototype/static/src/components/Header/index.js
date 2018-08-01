import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Glyphicon} from 'react-bootstrap';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'

import ContactRecruiter from '../Modal/ContactRecruiter.js';
import * as actionCreators from '../../actions/auth';
import brand_logo from '../../images/photos/placeholder.png';
import profile_img from '../../images/profile-img.png';
import contact_white from '../../images/contact-white.png';

configureAnchors({offset: -135})

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
        lgShow: false,
      }
    }

    componentDidMount() {

    }

    // TODO: Maybe write a function to overwrite the ARIA settings on
    // all of the Bootstrap navigation elements
    overwriteBootstrapAria() {

      // Select the header items

      setTimeout(function(){

        var topNav = document.getElementById('top-nav');
        var elements = topNav.getElementsByTagName("*");
        console.log('elements');
        console.log(elements);

        // strip bad aria
        for(var i = 0; i < elements.length; i++) {
          // console.log(elements[i]);

          elements[i].removeAttribute('aria-label');
          elements[i].removeAttribute('aria-labelledby');          
          elements[i].removeAttribute('role');

        }

        // assign good aria
        topNav.getElementsByClassName('brand-logo')[0].setAttribute('aria-label','B Ready Logo');

      }, 500);

    }

    renderFirstEntry(){
      var num_stages = this.props.stages.length
      //console.log(num_stages)
      var stages = this.props.stages.slice(-1)
      return Object.entries(stages).map(([key, value], i) => {
        //console.log("i " + i)
        var obj = stages[i]
        var stage_id = obj.stage_id
        var stage_title = obj.stage_title
        return (
          <span>
            <span className="ordinal_stage">Current Stage</span>
            <span className="stage_title">{stage_title}</span>
          </span>
       )
     })
    }


    renderEntry(){
        var num_stages = this.props.stages.length
        //console.log(num_stages)
        var stages = this.props.stages.slice(1, this.props.stages.length)
        return Object.entries(stages).map(([key, value], i) => {
          //console.log("i " + i)
          var obj = this.props.stages[i]
          var stage_id = obj.stage_id
          var stage_title = obj.stage_title
          return (
            <NavItem className={num_stages-1 === i ? "current-stage" : ""} href="">
            <MenuItem>
            {num_stages-1 === i ?
              <span className="ordinal_stage">Current Stage</span>
              :
              <span className="ordinal_stage">Stage {stage_id}</span>
            }
            <span className="stage_title">{stage_title}</span>
            </MenuItem>
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

    skipToContent() {
      setTimeout(function(){
        document.getElementsByClassName('date')[0].focus();
      }, 10);
    }

    skipToSection(i) {
      setTimeout(function(){
        document.getElementsByClassName('section_title')[i].focus();
      }, 200);
    }    

    render() {
      let lgClose = () => this.setState({ lgShow: false });
      var icon = (
        <span class="logo">

            <img width="120px" height="33px" className="brand_logo" src={brand_logo} alt="logo"/>

        </span>
      );

      this.overwriteBootstrapAria();

      return (
       !this.props.isAuthenticated ?
        <header>
        </header>
      :
      <header id="both-nav">
        <a className="skip-main" href="#" onClick={this.skipToContent}>Skip to main content</a>
        <Navbar aria-label="Main Navigation" inverse collapseOnSelect id="top-nav">
        <Navbar.Header>
          <Navbar.Brand className="brand-logo">
            <a href="/"><span aria-label="B Ready Logo">B</span></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav id="top-nav-left">
            <NavItem className="" href="">
              <div>
                <span className="selected_position_label">Position</span>
                <span className="selected_position_title">Software Engineer</span>
              </div>
            </NavItem>
            <NavDropdown className="candidate_stages" title={<span>{this.renderFirstEntry()}</span>} id="basic-nav-dropdown">
              {this.renderEntry()}
            </NavDropdown>
          </Nav>
          <Nav pullRight id="top-nav-right-nav">
          <NavItem className="contact-recruiter" title="Contact Recruiter" onClick={() => this.setState({ lgShow: true })}>
            <img role="presentation" src={contact_white} />
            Contact Recruiter
            <ContactRecruiter show={this.state.lgShow} onHide={lgClose} />
          </NavItem>
            <NavItem className="my-requests" title="My Requests" onClick={() => this.dispatchNewRoute('/requests')}>
              My Requests
            </NavItem>
            <NavDropdown className="top-nav-user-menu" title={<span><span aria-hidden="true" id="profile_img">{this.props.userName.charAt(0).toUpperCase()}</span>Hi, {this.props.userName}!</span>} id="basic-nav-dropdown">
              <NavItem>
                <MenuItem onClick={(e) => this.logout(e)}>
                  Log Out
                </MenuItem>
              </NavItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <Navbar
        aria-label="Interview Stages Navigation"
        inverse
        collapseOnSelect
        id="sub-nav"
      >
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem href='#section1' onClick={() => this.skipToSection(0)}>{this.props.steps[0].step_title}
          </NavItem>
          <NavItem href='#section2' onClick={() => this.skipToSection(1)}>{this.props.steps[1].step_title}
          </NavItem>
          <NavItem href='#section3' onClick={() => this.skipToSection(2)}>{this.props.steps[2].step_title}
          </NavItem>
          <NavItem href='#section4' onClick={() => this.skipToSection(3)}>{this.props.steps[3].step_title}
          </NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      </header>

        );

    }
}

Header.propTypes = {
    logoutAndRedirect: React.PropTypes.func,
    isAuthenticated: React.PropTypes.bool,
};
