import React, { Component } from "react";
import { render } from "react-dom";
import ErrorBoundary from "./ErrorBoundary"
import Login from "./Login"
import MainMenu from "./MainMenu"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

//   componentDidMount() {
//     fetch("api/templatequestion")
//       .then(response => {
//         if (response.status > 400) {
//           return this.setState(() => {
//             return { placeholder: "Something went wrong!" };
//           });
//         }
//         return response.json();
//       })
//       .then(data => {
//         this.setState(() => {
//           return {
//             data,
//             loaded: true
//           };
//         });
//       });
//   }

  render() {
    return (
        <Router>
            <ErrorBoundary>
            <div>
                <Switch>
                    <Route path="/">
                        <Login />
                    </Route>
                    <Route path="/mainmenu">
                        <MainMenu />
                    </Route>
                </Switch>
            </div>
            </ErrorBoundary>
        </Router>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);