import React from 'react'

const Category = () => {
    let location = window.location.href;
    let locationArr = location.split('/');
    console.log(locationArr[locationArr.length - 1]);
    return (
        <div style={{margin:'100px',display:'flex', justifyContent:'center', alignItems:'center'}}>
            Coming Soon 
        </div>
    )
}

export default Category
