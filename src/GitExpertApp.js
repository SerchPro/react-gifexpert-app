import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = () =>{
    const  [categories, setCategories] = useState(['Dragon Ball','Looney tunes'])
    return (
        <>
            <h2>Git expert app</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            <ol>
                {
                    categories.map(category =>(
                        <GifGrid 

                        key = {category}
                        category = {category}

                        />
                    ))

                }
            </ol>
        </>
    );
}


export default GitExpertApp