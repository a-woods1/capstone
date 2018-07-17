import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/auth';


function mapStateToProps(state) {
    return {
        token: state.auth.token,
        userName: state.auth.userName,
        stages: state.auth.stages,
        steps: state.auth.steps,
        categories: state.auth.categories,
        products: state.auth.products,
        isAuthenticated: state.auth.isAuthenticated,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
class NotFound extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="col-md-8">
                <h1>Not Found</h1>
            </div>
        );
    }
}

export default NotFound;
