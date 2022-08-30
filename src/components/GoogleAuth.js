import React from "react";
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1054744401067-6huu069803v93cqbin2r7umrrps73g9a.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: "streamy"
      }).then(() => { // returns a promise when library is initialized
        this.auth = window.gapi.auth2.getAuthInstance();

        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    };
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null ) {
      return <button onClick={this.onSignInClick} className="ui red google button">
      <i className="google icon" />
      Login with Google
    </button>;
    } else if (this.props.isSignedIn) {
      return <button onClick={this.onSignOutClick} className="ui red google button">
        <i className="google icon" />
        Sign Out
      </button>
    } else {
      return <button onClick={this.onSignInClick} className="ui red google button">
      <i className="google icon" />
      Login with Google
    </button>;
    }
  }

  render () {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
    { signIn, signOut }
  )(GoogleAuth);
