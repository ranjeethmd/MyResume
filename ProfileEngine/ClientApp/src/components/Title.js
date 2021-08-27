import React, { Component } from 'react';

export class Title extends Component {

    render() {
        return (
            <>
                <div className="title">
                    <div className="banner"></div>
                    <h1>Ranjeeth M D</h1>
                    <h3>&#x25C0; Design | Build &#x25BA;</h3>
                    <div className="img">
                        <img src="./profile.png" />
                    </div>
                </div>
                <ul>
                    <li>
                        <button className="surface-normal square-large circular"><i className="fab fa-github-alt"></i></button>
                    </li>                   
                    <li>
                        <button className="surface-normal square-large circular"><i className="fab fa-linkedin-in"></i></button>
                    </li>
                    <li>
                        <button className="surface-normal square-large circular"><i className="fab fa-bitbucket"></i></button>
                    </li>
                    
                   
                   
                </ul>
            </>

        );
    }
}
