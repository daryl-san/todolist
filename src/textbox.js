import React from 'react'
// import { onItemAdd } from "./eventListener"

const TextBox = ({ onSubmit, txtFieldHandler }) => {
    return (
        <form
            onSubmit={onSubmit}>
            <input
                name="textfield"
                type="text"
                placeholder="Enter new task"
                onChange={txtFieldHandler}
            />
            <input type="submit" value="add task" />
        </form>
    );
}

export default TextBox;
