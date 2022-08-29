import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1054744401067-6huu069803v93cqbin2r7umrrps73g9a.apps.googleusercontent.com'
      });
    });
  }

  render () {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
