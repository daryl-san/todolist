import React from 'react'
import Item from './item'

const itemlist = ({ item }) => {
    return (
        <div>
            {
                Item.map((user, i) => {
                    return <item
                        task={item[i].task}
                        number={item[i].number}
                    />
                })
            }
        </div>
    );
}


export default itemlist;
