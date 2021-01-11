import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class RecentPosts extends Component {
    componentDidMount() {
        this.props.fetchRecentPosts();
    }

    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts-wrapper">
                    <div className="recent-posts-heading">
                        <p>Recent Posts</p>
                        <ul className="recent-posts-posts">
                            <li>KingMaker</li>
                            <li>RuneLords</li>
                            <li>Strange Æons</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(RecentPosts);