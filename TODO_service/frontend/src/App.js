import logo from './logo.svg';
import './App.css';
import React from "react";
import UserList from "./components/User";
import axios from "axios";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import ProjectList from "./components/Project";
import TodoList from "./components/TODO";
import UserTODOList from "./components/UserTODO";
import {BrowserRouter, Route, Link, Switch, Redirect, HashRouter, Routes} from 'react-router-dom'



class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          'users': [],
          'projects': [],
          'notes': [],

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
        axios.get('http://127.0.0.1:8000/api/projects')
            .then(response => {
                const projects = response.data
                this.setState(
                {
                    'projects': projects
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/notes')
            .then(response => {
                const notes = response.data
                this.setState(
                {
                    'notes': notes
                    }
                )
            }).catch(error => console.log(error))
    }

  render() {
      return (
          <div className="App">
              <BrowserRouter>
                  <nav>
                    <ul>
                        <li>
                            <Link to='/'>Users</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li><li>
                            <Link to='/notes'>TODO</Link>
                        </li>
                    </ul>
                  </nav>
                  {/*<Switch>*/}
                  <Routes>
                      <Route path='/' exact element={ <UserList users={this.state.users} /> }>

                      </Route>
                      <Route path='/projects' exact element={ <ProjectList projects={this.state.projects} /> }>

                      </Route>
                      <Route path='/notes' exact element={ <TodoList notes={this.state.notes} /> }>

                      </Route>
                      <Route path='/users/:id' exact element={<UserTODOList notes={this.state.notes} /> }>

                      </Route>

                  </Routes>

                    {/*<Route component={NotFound404} />*/}
                  {/*</Switch>*/}



              </BrowserRouter>
          </div>
      )
    }
}

export default App;

              {/*<Menu/>*/}
              {/*<UserList users={this.state.users} />*/}
              {/*<br/>*/}
              {/*<br/>*/}
              {/*<ProjectList projects={this.state.projects} />*/}
              {/*<br/>*/}
              {/*<TodoList notes={this.state.notes} />*/}
              {/*<Footer/>*/}


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
