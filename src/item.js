import React from 'react'
import itemlist from './itemlist';

const Item = ({ task, number, complete }) => {
    return (
        <div>
            <input type="checkbox" checked={complete} />
            {number}: {task}
            {/* <h2>{task}</h2> */}
        </div>
    );
}


export default Item;
