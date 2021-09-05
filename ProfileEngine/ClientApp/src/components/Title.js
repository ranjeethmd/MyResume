import React, { Component } from 'react';

export class Title extends Component {

    render() {
        return (
            <div className="title">
                <div className="banner"></div>
                <h2>Ranjeeth M D</h2>                
                <span>Design | Build</span>
                <br />
                <br />
                <div className="img">
                    <img src="./profile.png" />
                </div>
            </div>
        );
    }
}
