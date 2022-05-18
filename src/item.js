import React from 'react'

const Item = ({ task, number }) => {
    return (
        <div>
            <h2>{task}</h2>
            <p> {number}</p>
            {/* <h2>Task name here</h2>
            <p>Task count here</p> */}
        </div>
    );
}


export default Item;
