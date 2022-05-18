import React from 'react'
import Item from './item'

const itemlist = ({ item }) => {
    return (
        <div>
            {
                Item.map((user, i) => {
                    return <item
                        <h1>task={item[i].task}</h1>
                        <h2>number={item[i].number}</h2>
                        />
                })
                // <h1>Task name here</h1>
                // <h2>Task count here</h2>
            }
        </div>
    );
}


export default itemlist;
