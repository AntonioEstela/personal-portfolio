import React from 'react';

import './ChatBubble.css'

export default function ChatBubble (props) {
    let text;

    if (props.isTitle) {
        text = <p style={{fontWeight: "bold"}}>{props.text}</p>
    } else {
        text = <p>{props.text}</p>
    }

    return (
        <div className="ChatBubble" style={props.styles}>
            {text}
        </div>
    );
}