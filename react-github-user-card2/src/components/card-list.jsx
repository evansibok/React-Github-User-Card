import React, { Component } from "react";

import UserCard from "./user-card";

export default class CardList extends Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
