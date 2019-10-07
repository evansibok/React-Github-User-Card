import React, { Component } from "react";

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


import styled from "styled-components";

const StyledCon = styled.div`
  margin: 0 auto;
  height: auto;
  max-width: 300px;
  font-size: 1.3rem;

  .cardTitle {
    font-size: 1.7rem;
    font-weight: 500;

    .cardSub {
      font-size: 1.3rem;
      font-weight: 400;
    }
  }

  .bio {
    font-size: 1.5rem;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }
`;

const StyledFollow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;

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
      <StyledCon>
        <h1>Github User Card!</h1>
        <Card>
          <CardBody className="cardTitle">
            <CardTitle>{this.state.gitUser.name}</CardTitle>
            <CardSubtitle className="cardSub">
              {this.state.gitUser.login}
            </CardSubtitle>
          </CardBody>
          <img
            width="100%"
            src={this.state.gitUser.avatar_url}
            alt="headshot"
          />
          <CardBody>
            <CardText className="bio">{this.state.gitUser.bio}</CardText>
            <StyledFollow>
              <CardText>Following: {this.state.gitUser.following}</CardText>
              <CardText>Followers: {this.state.gitUser.followers}</CardText>
            </StyledFollow>

            <StyledFollow>
              <CardLink href={this.state.gitUser.html_url}>
                {this.state.gitUser.html_url}
              </CardLink>

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
            </StyledFollow>
          </CardBody>
        </Card>
      </StyledCon>
    );
  }
}

export default App;
