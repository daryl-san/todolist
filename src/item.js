import React from 'react'

const Item = ({ task, number }) => {
    return (
        <div>
            <p>{number}: {task}</p>
            {/* <h2>{task}</h2> */}
        </div>
    );
}


export default Item;
