import {useState} from "react";
import GalleryItems from "../GalleryItems/GalleryItems"


function Gallery_List(props){
    //const [name, setName]= useState(null)


    return(
        <div>
            {/* <p> Gallery_List</p> */}
            {/* <p>{ JSON.stringify(props)}</p> */} 
            {props.galleryImages.map( image =>(<GalleryItems image={image}/>)) }
        </div>
    )
}

export default Gallery_List