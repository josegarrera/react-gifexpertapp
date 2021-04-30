import React from 'react';
import PropTypes from 'prop-types';

function GifGridItem({ id, title, url }) {

    return (
        <div className='card animate__animated animate__fadeInUp' >
            <img key={id} src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};

GifGridItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

export default GifGridItem
