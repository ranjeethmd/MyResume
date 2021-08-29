import React, { useRef, useEffect, useState } from 'react';

export const Content = ({ hidden, children }) => {

    const content = useRef(null);

    const [contentHeight, setContentHeight] = useState(0);

    const updateContentLayout = () => {

        if (!content.current)
            return;

        const element = content.current;        

        const calucluated = window.innerHeight - element.offsetTop;

        setContentHeight(calucluated);
    }

    useEffect(() => {
        setTimeout(updateContentLayout,500)        
    }, [hidden]);

    return (
        <div ref={content} className={hidden ? 'hide' : "content"} style={{ 'height': `${contentHeight}px` }}>
            {children}
        </div>
    );
        
}