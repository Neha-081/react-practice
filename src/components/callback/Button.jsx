import React from 'react'

function Button({handleClick,children}) {
    console.log(`rendering button - ${children}`);
    return (
        <button onClick={handleClick}>
            {/* children is text inside bvuttons in parentcomponent like increment age or salary */}
            {children}  
        </button>
    )
}

export default React.memo(Button)
