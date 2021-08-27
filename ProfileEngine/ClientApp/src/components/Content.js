import React, { useRef, useEffect, useState } from 'react';

export const Content = ({ hidden, children }) => {

    const content = useRef(null);

    const [contentHeight, setContentHeight] = useState(0);

    const updateContentLayout = () => {

        const element = content.current;

        const defaultHeight = window.innerHeight * 0.2;

        const calucluated = window.innerHeight - element.offsetTop;

        var contentHeight = Math.max(defaultHeight, calucluated);

        setContentHeight(contentHeight);
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