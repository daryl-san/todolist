import React from 'react'
import { onItemAdd } from "./eventListener"

const TextBox = () => {
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
