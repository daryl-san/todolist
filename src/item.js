import React from 'react'


const Item = ({ task, number, complete, onCheckItem }) => {
    return (
        <div>
            <form>
                <input type="checkbox" checked={complete} onChange={onCheckItem} />
                {number}: {task}
                {/* <h2>{task}</h2> */}
            </form>
        </div>
    );
}


export default Item;
