import React from 'react';
import './Link.css';

function Link(props) {
    return (<a href={props.url} className="Link" disabled={props.disabled}>
        {props.children}
    </a>);
}

Link.defaultProps = {
    disabled: false,
    url: ""
}

export default Link;