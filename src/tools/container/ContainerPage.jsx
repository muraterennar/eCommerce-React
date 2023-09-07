import React from 'react';

function ContainerPage({children}) {
    return (
        <div className={"w-10/12 mx-auto p-2"}>
            {children}
        </div>
    );
}

export default ContainerPage;