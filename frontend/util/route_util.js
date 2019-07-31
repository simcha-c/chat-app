// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router';

// renders component if logged out, otherwise redirects to the root url
const Auth = ({ component: Component, path, loggedIn, exact }) => {
  debugger
  return (
    <Route path={path} exact={exact} render={(props) => {
      return (!loggedIn ? (
        <Component {...props} />
      ) : (
          <Redirect to="/chats" />
        ))
    }
    }
    />
  )
}

// renders component if logged in, otherwise redirects to the login page
const Protected = ({ component: Component, path, loggedIn, exact }) => {
  debugger
  return <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/" />
      )
  )} />
};

// access the Redux state to check if the user is logged in
const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id),
  };
}

export const AuthRoute = connect(mapStateToProps)(Auth);

export const ProtectedRoute = connect(mapStateToProps)(Protected);
