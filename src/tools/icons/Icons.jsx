import React from 'react';

function Icons({children, className}) {
    return (
        <div className={className}>
            <div className={"w-8 h-8 cursor-pointer duration-200 hover:scale-[1.10]"}>
                {children}
            </div>
            {
                className && (
                    <div className={"absolute -top-1 right-0 w-4 h-4 bg-red-500 rounded-full flex justify-center items-center text-[10px] text-white"}>1</div>
                )
            }
        </div>
    );
}

export default Icons;