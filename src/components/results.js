import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Logo from './logo';
import SearchBar from './searchBar';

class Results extends Component {
    handleSearchBarSubmit(query) {
        this.props.fetchPostsViaQuery(query);
    }

    render() {
        return (
            <div>
                <Logo size={50} />
                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
            </div>
        )
    }
}

export default connect(null, actions)(Results);