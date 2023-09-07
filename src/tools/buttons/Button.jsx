import React from 'react';

function Button({children, className, onClick}) {
    return (
        <button onClick={()=> onClick} type={"button"} className={className}>{children}</button>
    );
}

export default Button;