import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.currentUserData.isAuth
});

export const withAuthRedirect = ( Component ) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to={'/login'} />
      }
      return <Component {...this.props} />
    }
  }
  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
  return ConnectedAuthRedirectComponent;
};

