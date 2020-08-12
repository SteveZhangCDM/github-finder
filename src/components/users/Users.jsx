import React, { Component } from 'react';
import UserItem from '../users/UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

export default class Users extends Component {
  render() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <div style={userStyle}>
          {this.props.users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      );
    }
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '2rem',
};
