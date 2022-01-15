import React from 'react'

function Title() {
    console.log('rendering title');
    return (
        <div>
            <h2>
                Use callback hook
            </h2>
        </div>
    )
}

export default React.memo(Title)   //react.memo prevents for not changing if particular state or props is not changing
