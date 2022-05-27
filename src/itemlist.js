import React from 'react'
import Item from './item'

const itemlist = ({ item }) => {
    return (
        <div>
            {

                // item.map((user, i) => {
                //     return (<Item
                //         number={item[i].number}
                //         task={item[i].task}
                //     />)
                // })

                item.map((item) => {
                    return (
                        <Item
                            key={item.number}
                            number={item.number}
                            task={item.task}
                        />)
                })
            }
        </div>
    );
}


export default itemlist;