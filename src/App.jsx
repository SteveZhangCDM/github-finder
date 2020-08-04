import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}
