import React, { Component } from 'react';

export default class UserItem extends Component {
  constructor() {
    super();
  }

  render() {
    const { login, id, avatar_url, html_url } = this.props.user;
    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>

        <div>
          <a href='' className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}
