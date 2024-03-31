import React from 'react'

interface Props {
    postId: string;
}

const page = (getData: Props) => {
    return (
        <>
            {getData.postId}
        </>
    )
}

export default page