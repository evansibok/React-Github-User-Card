import React, { Component } from "react";
import "./App.css";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";

class App extends Component {
  constructor() {
    super();

    this.state = {
      gitUser: {},
      gitFollowers: [],
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  componentDidMount() {
    fetch("https://api.github.com/users/evansibok")
      .then(response => response.json())
      .then(user => this.setState({ gitUser: user }));

    fetch("https://api.github.com/users/evansibok/followers")
      .then(response => response.json())
      .then(user => this.setState({ gitFollowers: user }));
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card!</h1>
        <div>
          <Card>
            <CardBody>
              <CardTitle>Name: {this.state.gitUser.name}</CardTitle>
              <CardSubtitle>Username: {this.state.gitUser.login}</CardSubtitle>
            </CardBody>
            <img
              width="100%"
              src={this.state.gitUser.avatar_url}
              alt="headshot"
            />
            <CardBody>
              <CardText>Bio: {this.state.gitUser.bio}</CardText>
              <CardText>Following: {this.state.gitUser.following}</CardText>
              <CardText>Followers: {this.state.gitUser.followers}</CardText>
              <CardLink href={this.state.gitUser.html_url}>
                {this.state.gitUser.html_url}
              </CardLink>
            </CardBody>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>Followers List</DropdownToggle>
              <DropdownMenu>
                {this.state.gitFollowers.map(user => (
                  <DropdownItem key={user.id}>
                    <a href={user.html_url}>{user.login}</a>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
