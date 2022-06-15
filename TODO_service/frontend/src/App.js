import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";
import Cookies from 'universal-cookie';

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import UserList from "./components/User";
import ProjectList from "./components/Project";
import TodoList from "./components/TODO";
import UserTODOList from "./components/UserTODO";
import LoginForm from "./components/Auth";
import {BrowserRouter, Route, Link, Switch, Redirect, HashRouter, Routes} from 'react-router-dom';

const NotFound404 = ({ location }) => {
    return (
        <div>
            <h1>Страница по адресу: '{location.pathname}' не найдена</h1>
        </div>
    )
}


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          'users': [],
          'projects': [],
          'notes': [],
          'token': '',

      }
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token})
    }

    is_authenticated() {
        return this.state.token !== ''
    }

    logout() {
        this.set_token('')
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token':token})
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username,
            password: password})
            .then(response => {
                console.log(response.data)
        }).catch(error => alert('Неверный логин или пароль'))
}

    load_data() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                // const users = response.data
                this.setState(
                {users: response.data
                    }
                )
            }).catch(error => console.log(error))
        axios.get('http://127.0.0.1:8000/api/projects/')
            .then(response => {
                const projects = response.data
                this.setState(
                {
                    'projects': projects
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/notes/')
            .then(response => {
                const notes = response.data
                this.setState(
                {
                    'notes': notes
                    }
                )
            }).catch(error => console.log(error))
    }

    componentDidMount() {
        this.get_token_from_storage()
        this.load_data()
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
                        </li>
                        <li>
                            <Link to='/notes'>TODO</Link>
                        </li>
                        <li>
                            {this.is_authenticated() ? <button onClick={()=>this.logout()}>Logout
                            </button> : <Link to='/login'>Login</Link>}
                        </li>
                    </ul>
                  </nav>

                  <Routes>
                      <Route path='/' exact element={ <UserList users={this.state.users} /> }>

                      </Route>
                      <Route path='/projects' exact element={ <ProjectList projects={this.state.projects} /> }>

                      </Route>
                      <Route path='/notes' exact element={ <TodoList notes={this.state.notes} /> }>

                      </Route>

                      <Route path='/login' exact element={ <LoginForm get_token={(username, password) =>
                          this.get_token(username, password)} /> }>
                      </Route>

                      <Route path='/users/:id' exact element={<UserTODOList notes={this.state.notes} /> }>

                      </Route>

                      {/*<Route exact element={NotFound404}> </Route>*/}
                  </Routes>
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
