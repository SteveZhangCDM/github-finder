import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };

  onChangeText = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmitForm}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChangeText}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
