import React, { Component } from 'react';
import { connect } from 'react-redux';

import Posts from './posts';

class ResultsPosts extends Component {
    renderPosts() {
        const resultsPosts = this.props.resultsPosts.map((post, index) => {
            return <Posts type="result" {...post} key={index} />
        })

        return resultsPosts;
    }

    render() {
        return (
            <div className="results-posts">
                <div className="results-posts-wrapper">
                    <ul className="results-posts-posts">
                        {this.renderPosts()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        resultsPosts: state.posts.resultsPosts
    }
}

export default connect(mapStateToProps)(ResultsPosts);