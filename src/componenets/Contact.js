import React from 'react'

const Contact = ({ elm }) => {
    return (
        <div>
            <h2>{elm.id}</h2>
            <h2>{elm.name}</h2>
            <h2>{elm.phoneNumber}</h2>
            <h2>{elm.address}</h2>
            <h2>{elm.email}</h2>
            <img src={elm.posturl} alt="cc" />
        </div>
    )
}

export default Contact