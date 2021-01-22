import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentPosts";

class App extends Component {
  handleFormSubmit(query) {
    this.props.fetchPostsViaQuery(query, () => {
      this.props.history.push('/results');
    });
  }

  render() {
    return (
      <div className='home'>
        <Logo/>
        <SearchBar page="home" onSubmit={ (query) => this.handleFormSubmit(query) }/>
        <RecentPosts/>
      </div>
    );
  }
}

export default connect(null, actions)(App);