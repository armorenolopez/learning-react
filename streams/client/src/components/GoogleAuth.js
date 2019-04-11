import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '827582743032-krp27s6dhdm1v1v67s2sj5aqll0k0jfn.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  // HELPER METHODS

  // without REDUX
  // onAuthChange = () => {
  //   this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  // };

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    }
    else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  // END OF HELPER METHODS

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null
    }
    else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon"></i>
          Sign out
        </button>
      )
    }
    else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon"></i>
          Sign In with Google
        </button>
      )
    }
  }

  render() {
    return (
      <div className="item">{this.renderAuthButton()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn}
}


export default connect(
  mapStateToProps,
  {signIn, signOut}
)(GoogleAuth);