import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentPosts";

export default class App extends Component {
  handleFormSubmit(query) {
    console.log('Handle submit for query', query)
    this.props.history.push('/results');
}

  render() {
    return (
      <div className='home'>
        <Logo/>
        <SearchBar onSubmit={ (query) => this.handleFormSubmit(query) }/>
        <RecentPosts/>
      </div>
    );
  }
}
