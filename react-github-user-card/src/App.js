import React, { Component } from 'react';
import './App.css';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class App extends Component {

  constructor() {
    super();

    this.state = {
      gitUser: {},
      gitFollowers: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/evansibok')
      .then(response => response.json())
      .then(user => this.setState({ gitUser: user }))

    fetch('https://api.github.com/users/evansibok/followers')
      .then(response => response.json())
      .then(user => this.setState({ gitFollowers: user }))
  }


  // id
  // avatar_url
  // name
  // login
  // bio
  // following
  // followers
  // html_url

  render() {
    return (
      <div className="App">
        <h1>Github User Card!</h1>
        <div key={this.state.gitUser.id}>
          <img src={this.state.gitUser.avatar_url} alt="headshot" />
          <h3>Name: {this.state.gitUser.name}</h3>
          <p>Username: {this.state.gitUser.login}</p>
          <p>Bio: {this.state.gitUser.bio}</p>
          <p>Following: {this.state.gitUser.following}</p>
          <p>Followers: {this.state.gitUser.followers}</p>
          <p>Profile: <a href={this.state.gitUser.html_url}>{this.state.gitUser.html_url}</a>
          </p>
          
              {
                this.state.gitFollowers.map(user => (
                  <div>
                    
                  </div>
                  ))
              }
        </div>
      </div>
    )
  }
}

export default App;