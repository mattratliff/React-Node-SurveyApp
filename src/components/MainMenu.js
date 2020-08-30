import React, { Component } from "react";
import { render } from "react-dom";
import NavBar from './NavBar'
import Bottom from './Bottom'

class MainMenu extends Component {
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
        <div>
            <NavBar />
            blah
            <Bottom />
        </div>
    //     <ul>
    //     {this.state.data.map(template => {
    //       return (
    //         <li key={template.id}>
    //           {template.question}
    //         </li>
    //       );
    //     })}
    //   </ul>
    );
  }
}

export default MainMenu;