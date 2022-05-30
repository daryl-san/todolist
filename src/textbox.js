import React from 'react'

const TextBox = (useRef) => {
    return (
        <>
            <input
                type="text"
                placeholder="Enter new task"
            />
            <input type="button" value="add task" />
        </>
    );
}

export default TextBox;
