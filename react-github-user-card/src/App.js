import React, { Component } from 'react';
import './App.css';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class App extends Component {

  constructor() {
    super();

    this.state = {
      gitUser: {},
      gitFollowers: [],
      dropdownOpen: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  componentDidMount() {
    fetch('https://api.github.com/users/evansibok')
      .then(response => response.json())
      .then(user => this.setState({ gitUser: user }))

    fetch('https://api.github.com/users/evansibok/followers')
      .then(response => response.json())
      .then(user => this.setState({ gitFollowers: user }))
  }

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
        </div>

        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Followers List
        </DropdownToggle>
          <DropdownMenu>
            {
              this.state.gitFollowers.map(user => (
                <DropdownItem key={user.id}><a href={user.html_url}>{user.login}</a></DropdownItem>
              ))
            }
          </DropdownMenu>
        </Dropdown>


      </div>
    )
  }
}

export default App;