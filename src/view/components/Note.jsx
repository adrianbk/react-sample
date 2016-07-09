import React from 'react';

export default ({children, ...props}) => (
    // Spread - the properties of the object that you pass in are copied onto the component's props.
    <div {...props}>
        {children}
    </div>
);
