import React from 'react';

export const Content = ({ hidden, children, scrollX }) => {

   
    return (
        <div className={hidden ? 'hide' : scrollX ? "content-x":"content-y"}>
            {children}
        </div>
    );
        
}