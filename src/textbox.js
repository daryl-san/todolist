import React from 'react'

const TextBox = (onItemAdd) => {
    return (
        <>
            <input
                name="textfield"
                type="text"
                placeholder="Enter new task"
            // onChange={() => itemAdd}
            />
            <input type="button" value="add task" onClick={onItemAdd} />
        </>
    );
}

export default TextBox;
