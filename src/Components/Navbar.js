import React from 'react'

const Navbar = ({filterItems,carList}) => {
    return (
        <>
            <nav className="navbar">
            <div className="btn-group">
            {
                carList.map((curElee)=>{
                    return<button className="btn-group__item" onClick={()=> filterItems(curElee)}>{curElee}</button>
                })
            }
                
 
            </div>
        </nav>
        </>
    )
}

export default Navbar
