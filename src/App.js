import React, { Component } from "react";
import UserContext from "./Context";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: null,
      user: null
    };
  }

  logIn = (user) => {
    this.setState({
      loggedIn: true,
      user
    });
  };

  logOut = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    this.setState({
      loggedIn: false,
      user: null
    });
  };

  render() {
    const { loggedIn, user } = this.state;

    if (loggedIn === null) {
      return <div>Loading...</div>;
    }

    return (
      <UserContext.Provider
        value={{
          loggedIn,
          user,
          logIn: this.logIn,
          logOut: this.logOut
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default App;
