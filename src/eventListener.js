import { useState } from "react";

// eventListener = () => {

//     const onItemCheck = (event) => {
//         console.log(event.value);
//     }

//     const onItemAdd = (event) => {
//         console.log(document.getElementById("textfield").value);
//     }
// }

export const onItemAdd = (event) => {
    this.setState({ value: event.target.value });
};


// export default onItemAdd;

// export default EventListener;