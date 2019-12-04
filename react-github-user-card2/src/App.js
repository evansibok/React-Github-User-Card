import React, { Component } from 'react'

import UserCard from './components/user-card';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gitUser: {},
      followersList: [],
      username: "",
    }
  }

  componentDidMount() {

    fetch(`https://api.github.com/users/evansibok`)
      .then(res => res.json())
      .then(user => this.setState({ gitUser: user }))
      .catch(error => console.log(error))

    fetch(`https://api.github.com/users/evansibok/followers`)
      .then(res => res.json())
      .then(followers => this.setState({ followersList: followers }))
      .catch(error => console.log(error))

  }


  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const currentUserName = this.state.username;
    console.log(this.state)

    fetch(`https://api.github.com/users/${currentUserName}`)
      .then(res => res.json())
      .then(newUser => {
        console.log(newUser)
        this.setState({ gitUser: newUser })
      })

    fetch(`https://api.github.com/users/${currentUserName}/followers`)
      .then(res => res.json())
      .then(newFollowers => {
        console.log(newFollowers)
        this.setState({ followersList: newFollowers })
      })
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.username) {
      this.handleSubmit();
    }

  }

  render() {
    console.log(this.state.followersList)
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>{`${this.state.gitUser.name}'s Github Profile`}</h1>

        <form>
          <input
            type="text"
            name="username"
            placeholder="Enter Name..."
            onChange={() => this.handleChange}
          />
          <button onClick={this.handleSubmit}>Search</button>
        </form>

        <UserCard user={this.state.gitUser} followers={this.state.followersList} />
      </div>
    )
  }
}
