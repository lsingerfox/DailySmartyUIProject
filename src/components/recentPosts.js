import React, { Component } from 'react';

class RecentPosts extends Component {
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

export default RecentPosts;