import React, { Component } from 'react';

class Logo extends Component {
    render() {
        const size = {
            height: this.props.size ? this.props.size : 100,
            width: this.props.size ? this.props.size : 100
        }
        return (
            <div className="logo-main">
                <img style={size} alt="Daily Smarty Logo" src="/assets/ds_circle_logo.png"/>
            </div>
        )
    }
}

export default Logo;