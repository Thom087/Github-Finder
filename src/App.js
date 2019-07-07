import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';
class App extends Component {
  state = {
    users: [],
    loading: false
  }
  //liefcycle methods, as soon as the component is mounted, this will be fired
  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
    console.log(res.data);
  }
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Users loading={this.state.loading}
            users={this.state.users} />
        </div>
      </div>
    );
  }
}
export default App;

