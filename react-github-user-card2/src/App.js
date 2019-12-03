import React, { Component } from 'react'

import data from './data'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [
        data,
      ],
    }
  }



  render() {
    console.log(data)
    return (
      <div>
        <h1>Evans Ibok's Github Card</h1>
        {
          this.state.users.map(user => (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h3>{user.login}</h3>
              <div>
                <img src={user.avatar_url} alt={`${user.name}'s headshot`} />
              </div>
              <p>Bio: {user.bio}</p>
              <p>Followers: {user.followers}</p>
              <p>Following: {user.following}</p>
              <p>Profile Link: {user.url}</p>

            </div>
          ))
        }

      </div>
    )
  }
}
