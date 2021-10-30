import {useState} from "react";

function GalleryItems(props){
    //const [name, setName]= useState(null)

    const [image, setimage]= useState()

    return(
        <div>
            <p> GalleryItems</p>
            <p>{ JSON.stringify(props)}</p>
            <img src={props.image.path} alt="stuff" />
        </div>
    )
}

export default GalleryItems