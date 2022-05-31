import React from 'react'
// import { onItemAdd } from "./eventListener"

const TextBox = ({ onSubmit, txtFieldValue, txtFieldHandler }) => {
    return (
        <form
            onSubmit={onSubmit}>
            <input
                name="textfield"
                type="text"
                placeholder="Enter new task"
                // value={txtFieldValue}
                onChange={txtFieldHandler}
            />
            <input type="submit" value="add task" />
        </form>
    );
}

export default TextBox;
