import {useState} from "react";

function GalleryItems(props){
    //const [name, setName]= useState(null)

    const [showImage, setShowImage]= useState(true);
    // variable= show image, function to run= setShowimage, useState= initial value

    const [likes, setlikes]= useState( 0 );
    //creates a counter

    const [anylikes, setanylikes]= useState(false);
    //set the status of anylikes

    const toggleImage = ()=>{
        console.log( 'in toggle image');
        setShowImage(!showImage);
    }
    //function to toggle images

    const addlikes= ()=>{
        console.log('in setlikes', likes+1)
        setlikes( likes + 1)
        if(likes>=0){setanylikes(true)}
    }
    //function to switch between likes options on DOM


    return(
        <div>
            {/* <p> GalleryItems</p> */}
            {/* <p>{ JSON.stringify(props)}</p> */}
            
            {//toggle image true/false options
                showImage ?
                <img src={props.image.path} alt={props.image.description} onClick={ toggleImage }/>://true
                <h2 onClick={ toggleImage}>{props.image.description}</h2> //false
            }

        
        <div>
            <button onClick={addlikes}>Like</button> 
            {//shows the number of likes for each image
                anylikes ?
                <p> {likes} likes </p>: //true
                <p> No one likes this image yet! </p> //false     
            }
        </div>
            


        </div>
    )
}

export default GalleryItems