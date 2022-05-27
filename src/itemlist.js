import React from 'react'
import Item from './item'

const itemlist = ({ item }) => {
    return (
        <div>
            {
                // Item.map((user, i) => {
                //     return <item
                //         <h1>task={item[i].task}</h1>
                //         <h2>number={item[i].number}</h2>
                //         />
                // })
                item.map((user, i) => {
                    return (<Item
                        number={item[i].number}
                        task={item[i].task}
                    />)
                })
            }
        </div>
    );
}


export default itemlist;