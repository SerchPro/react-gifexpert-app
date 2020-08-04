import React from 'react'

export const GifGriditem = ( img ) => {
    //console.log(img)
    return (
        <div className ="card animate_animated animated_fadeIn"> 
                
                <img src={img.url} alt={img.title}/>
                <p> {img.title}</p>
        </div>
    )
}
