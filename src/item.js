import React from 'react'

const Item = ({ task, number }) => {
    return (
        <div>
            <h2>{task}</h2>
            <p> {number}</p>
        </div>
    );
}


export default Item;
