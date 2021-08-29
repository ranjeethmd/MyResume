import React from 'react';

export const Error = ({ code, message, onClick, children }) => {    

   
    return (
        <>
            <div className={code ? "": "hide"}>
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
                    <p className={message ? "error-msg" : "hide"}>{message}</p>
                    <div className="home">
                        <button className="relative square-normal surface-proj round" onClick={ onClick }><i className="fas fa-undo-alt"></i></button>
                    </div>
                </div>
            </div>
            {code ? <React.Fragment/> : children }
        </>

    );
}