import React from 'react'
// import { onItemAdd } from "./eventListener"

const TextBox = ({ onItemAdd, onSubmit }) => {
    return (
        <form
            onSubmit={onSubmit}
        >
            <input
                name="textfield"
                type="text"
                placeholder="Enter new task"
            // value={stateHolder.textfield}
            />
            <input type="submit" value="add task" />
        </form>
    );
}

export default TextBox;
