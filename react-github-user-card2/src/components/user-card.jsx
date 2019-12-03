import React from "react";

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

    .tb {
      font-weight: 500;
      font-size: 1rem;
    }
  }
`;

function UserCard(props) {
  const { user } = props;
  return (
    <Container>
      <div className="cardCon">
        <div className="cardTitle">
          <h3>{user.name}</h3>
          <p className="tb">{user.login}</p>
        </div>

        <div className="imageDiv">
          <img src={user.avatar_url} alt={`${user.name}'s headshot`} />
        </div>
        <div className="bottomSection">
          <div>
            <p>
              <span className="tb">Bio:</span>
              {` `}
              {user.bio}
            </p>
            <a href={user.html_url}>Visit Profile</a>
          </div>

          <div className="followSection">
            <p>
              <span className="tb">Followers:</span>
              {` `} {user.followers}
            </p>
            <p>
              <span className="tb">Following:</span>
              {` `} {user.following}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default UserCard;
