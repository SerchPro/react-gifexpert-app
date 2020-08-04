import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { GifGriditem } from './GifGriditem'
import { useFetchGifs } from '../hooks/useFetchGifs'



export const GifGrid = ({category}) => {


    const {data:images, loading} = useFetchGifs(category);

    return (

        <>
        <h3> {category}</h3>
        {loading && <p> loading</p>}
        <div className="card-grid">
            
            {
                images.map(img =>(
                    <GifGriditem  
                        key = {img.id}
                        {...img}

                    />
                ))
            }
        </div>
        </>
    )
}


GifGrid.prototype = {
    Category : PropTypes.string.isRequired
}