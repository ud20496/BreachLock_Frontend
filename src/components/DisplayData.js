import React from 'react';

//Render data which comes from database
const DisplayData = (props) => {
    let data =localStorage.getItem('items');
    
    return(
    <div><h1>TABLE</h1>
    <div>{data}</div></div>
    )
}
export default DisplayData;