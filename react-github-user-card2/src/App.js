import React, { Component } from 'react'

import data from './data'
import CardList from './components/card-list';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [
        data,
      ],
    }
  }

  componentDidMount() {

    fetch(``)
      .then()
      .then()
  }



  render() {
    console.log(data)
    return (
      <div>
        <h1>Evans Ibok's Github Card</h1>
        <CardList users={this.state.users} />

      </div>
    )
  }
}
