import React from 'react'
// import { onItemAdd } from "./eventListener"

const TextBox = ({ onItemAdd }) => {
    const

    return (
        <form onSubmit={onItemAdd}>
            <input
                name="textfield"
                type="text"
                placeholder="Enter new task"
            // onChange={() => itemAdd}
            />
            <input type="submit" value="add task" />
        </form>
    );
}

export default TextBox;
