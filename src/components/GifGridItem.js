import React from 'react'

function GifGridItem({ id, title, url }) {

    return (
        <div className='card animate__animated animate__fadeInUp' >
            <img key={id} src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
