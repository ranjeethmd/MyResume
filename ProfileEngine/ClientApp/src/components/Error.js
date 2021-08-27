import React from 'react'

export const Error = ({ code, message, onClick }) => {

    return (

        <div>            
            <div className="error round">
                <div className="error-inner round">
                </div>
                <div className="error-hand round">
                    <section>
                        <span><i className="fas fa-kiwi-bird"></i></span>
                        <h1>{code}</h1>                        
                    </section>
                </div>
            </div>                       
            <span className={message ? "error-msg" : "hide"}>{message}</span>
            <div className="home">
                <button className="relative square-normal surface-proj round" onClick={() => onClick()}><i className="fas fa-undo-alt"></i></button>
            </div>
        </div>

    );
}