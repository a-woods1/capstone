/* eslint camelcase: 0, no-underscore-dangle: 0 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/auth';
import { validateEmail } from '../utils/misc';
import { Grid, Row, Col, FormControl, Button } from 'react-bootstrap';

import logo from '../images/photos/placeholder.png';

function mapStateToProps(state) {
    return {
        isAuthenticating: state.auth.isAuthenticating,
        statusText: state.auth.statusText,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginView extends React.Component {

    constructor(props) {
        super(props);
        const redirectRoute = '/login';
        this.state = {
            email: '',
            password: '',
            email_error_text: null,
            password_error_text: null,
            redirectTo: redirectRoute,
            disabled: true,
        };
    }

    isDisabled() {
        let email_is_valid = false;
        let password_is_valid = false;

        if (this.state.email === '') {
            this.setState({
                email_error_text: null,
            });
        } else if (validateEmail(this.state.email)) {
            email_is_valid = true;
            this.setState({
                email_error_text: null,
            });

        } else {
            this.setState({
                email_error_text: 'Sorry, this is not a valid email',
            });
        }

        if (this.state.password === '' || !this.state.password) {
            this.setState({
                password_error_text: null,
            });
        } else if (this.state.password.length >= 6) {
            password_is_valid = true;
            this.setState({
                password_error_text: null,
            });
        } else {
            this.setState({
                password_error_text: 'Your password must be at least 6 characters',
            });

        }

        if (email_is_valid && password_is_valid) {
            this.setState({
                disabled: false,
            });
        }

    }

    changeValue(e, type) {
        const value = e.target.value;
        const next_state = {};
        next_state[type] = value;
        this.setState(next_state, () => {
            this.isDisabled();
        });
    }

    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            if (!this.state.disabled) {
                this.login(e);
            }
        }
    }

    login(e) {
        e.preventDefault();
        this.props.loginUser(this.state.email, this.state.password, this.state.redirectTo);
    }

    render() {
        return (
          <Grid>
            <Row>
              <Col xs={4} md={4} onKeyPress={(e) => this._handleKeyPress(e)}>
              <form role="form">
              <div className="text-center">
                <img width="50px" height="50px" className="logo" src={logo} alt="Immersive view"/>
              </div>
                <div>
                    {
                      this.props.statusText &&
                      <div className="alert alert-info">{this.props.statusText}</div>
                    }
                    <div className="col-md-12">
                      <label htmlFor="email">Email</label>
                      <FormControl
                        id="email"
                        type="email"
                        //errorText={this.state.email_error_text}
                        onChange={(e) => this.changeValue(e, 'email')}
                      />
                   </div>
                   <div className="col-md-12">
                     <label htmlFor="password">Password</label>
                     <FormControl
                       id="password"
                       type="password"
                       //errorText={this.state.password_error_text}
                       onChange={(e) => this.changeValue(e, 'password')}
                      />
                   </div>
                   <div className="col-md-12">
                   <Button bsStyle="primary" bsSize="large" block
                     disabled={this.state.disabled}
                     style={{ marginTop: 50 }}
                     label="Login"
                     onClick={(e) => this.login(e)}
                    >Login</Button>
                    </div>
                    <div className="text-center">
                    <p>Forgot username or password?</p>
                    </div>
                    </div>
                </form>
              </Col>
              <Col xs={8} md={8}>
              <div className="text-center">
                <img width="400px" height="400px" className="logo" src={logo} alt="Immersive view"/>
              </div>
              </Col>
            </Row>
          </Grid>
        );

    }
}

LoginView.propTypes = {
    loginUser: React.PropTypes.func,
    statusText: React.PropTypes.string,
};
