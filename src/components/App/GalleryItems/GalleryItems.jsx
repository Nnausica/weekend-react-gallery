import {useState} from "react";

function GalleryItems(props){
    //const [name, setName]= useState(null)

    const [showImage, setShowImage]= useState(true);
    // variable= show image, function to run= setShowimage, useState= initial value

    const toggleImage = ()=>{
        console.log( 'in toggle image');
        setShowImage(!showImage);
    }
    //function to toggle images

    return(
        <div>
            {/* <p> GalleryItems</p> */}
            {/* <p>{ JSON.stringify(props)}</p> */}
            
            {//toggle image true/false options
                showImage ?
                <img src={props.image.path} alt={props.image.description} onClick={ toggleImage }/>://true
                <h2 onClick={ toggleImage}>{props.image.description}</h2> //false
            }


        </div>
    )
}

export default GalleryItems