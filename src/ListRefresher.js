import React from 'react'

const ListRefresher = ({ refreshEventHandler }) => {
    return (
        <form onSubmit={refreshEventHandler}>
            <input
                type="submit"
                value="Refresh List"
            />
        </form>
    );
}

export default ListRefresher;