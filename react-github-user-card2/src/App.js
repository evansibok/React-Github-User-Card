import React, { Component } from 'react'

import UserCard from './components/user-card';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gitUser: {},
      followersList: []
    }
  }

  componentDidMount() {

    fetch(`https://api.github.com/users/evansibok`)
      .then(res => res.json())
      .then(user => this.setState({ gitUser: user }))

    fetch(`https://api.github.com/users/evansibok/followers`)
      .then(res => res.json())
      .then(followers => this.setState({ followersList: followers }))
  }



  render() {
    return (
      <div>
        <h1>Evans Ibok's Github Card</h1>
        <UserCard user={this.state.gitUser} followers={this.state.followersList} />
      </div>
    )
  }
}
