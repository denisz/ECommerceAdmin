import React, { Component } from 'react';
import AuthActions from 'flux/AuthActions';
import './Logout.css';

export default class Logout extends Component {
  async componentWillMount() {
    await this.performLogout();
  }

  async performLogout() {
    try {
      await AuthActions.logout();
    } catch ({ message }) {
      this.setState({ error: message });
    }
  }

  render() {
    const { error } = this.state;
    return (
      <div className="Logout">
        <div className="container-fluid">
          <h1 className="text-center">You are now logged out.</h1>
          { error && <p className="text-danger">{error}</p> }
          <p className="text-center">Go to <a href="/login">Login Page</a></p>
        </div>
      </div>
    );
  }
}

Logout.propTypes = {};
Logout.defaultProps = {};
