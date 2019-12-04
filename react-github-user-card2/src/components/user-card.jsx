import React, { Component } from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em 0;
  font-size: 0.9rem;

  .cardCon {
    display: flex;
    flex-direction: column;
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 1em;
    justify-content: center;

    .cardTitle {
      margin-left: 1em;
      margin-right: 1em;
    }

    .imageDiv {
      width: inherit;

      img {
        width: 100%;
      }
    }

    .bottomSection {
      margin-left: 1em;
      margin-right: 1em;

      .followSection {
        display: flex;
        justify-content: space-between;
      }
    }

    .extra {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2em;
    }

    .tb {
      font-weight: 500;
      font-size: 1rem;
    }
  }
`;

export default class UserCard extends Component {
  render() {
    return (
      <Container>
        <div className="cardCon">
          <div className="cardTitle">
            <h3>{this.props.user.name}</h3>
            <p className="tb">{this.props.user.login}</p>
          </div>

          <div className="imageDiv">
            <img
              src={this.props.user.avatar_url}
              alt={`${this.props.user.name}'s headshot`}
            />
          </div>
          <div className="bottomSection">
            <p>
              <span className="tb">Bio:</span>
              {` `}
              {this.props.user.bio}
            </p>

            <div className="followSection">
              <p>
                <span className="tb">Followers:</span>
                {` `} {this.props.user.followers}
              </p>
              <p>
                <span className="tb">Following:</span>
                {` `} {this.props.user.following}
              </p>
            </div>

            <div className="extra">
              <a href={this.props.user.html_url}>Visit Profile</a>
              <div>
                <div>Followers</div>
                <ul>
                  {this.props.followers
                    ? this.props.followers.map(f => (
                        <a
                          href={f.html_url}
                          key={f.id}
                          alt={`${f.login}'s profile link`}
                        >
                          <li>{f.login}</li>
                        </a>
                      ))
                    : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
