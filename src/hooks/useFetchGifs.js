import { useState, useEffect } from "react"
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category)=>{
    

    const [state, setstate] = useState({
        data : [],
        loading: true
    });

    useEffect(() => { // Solo se dispara cuando cambia la categoria
        getGifs(category).then( imgs => setstate({
            data: imgs,
            loading: false
        }))

    }, [category])
    return state 
}