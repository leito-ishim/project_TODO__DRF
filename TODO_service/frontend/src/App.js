import logo from './logo.svg';
import './App.css';
import React from "react";
import UserList from "./components/User";
import axios from "axios";
import Menu from "./components/Menu";
import Footer from "./components/Footer";



class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        'users': []
      }
    }

    componentDidMount() {
      axios.get('http://127.0.0.1:8000/api/users')
          .then(response => {
              const users = response.data
              this.setState(
                  {
                      'users': users
                  }
                )
          }).catch(error => console.log(error))
    }

  render() {
      return (
          <div>
              <Menu/>
            <UserList users={this.state.users} />
              <Footer/>
          </div>
      )
    }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
