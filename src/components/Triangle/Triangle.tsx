import React from 'react';
import './index.css'


const Triangle = () => {
   
    return (
        <div className='triangle'>
            <div className='triangle__text a'>A</div>
            <div className='triangle__text b'>B</div>
            <div className='triangle__text c'>C</div>
            <svg width="350" height="250">
                <polygon 
                    points="10,240 115,10 240,240"
                    fill="#E7FFE8" 
                    stroke="black"
                    strokeWidth="5"
                />
            </svg>
        </div>  
    );
};

export default Triangle;