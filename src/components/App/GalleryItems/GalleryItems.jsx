import {useState} from "react";
import axios from "axios";

function GalleryItems(props){
    //const [name, setName]= useState(null)

    const [showImage, setShowImage]= useState(true);
    // variable= show image, function to run= setShowimage, useState= initial value

    const [ image, setImage]= useState({
        id: props.image.id,
        path: props.image.path,
        description: props.image.description, 
        likes: props.image.likes
    })

    // const [anylikes, setanylikes]= useState(true);
    
    const togglelikes= ()=>{
        console.log('in togglelikes')
        let text=''
        if(image.likes > 0){
            text= 'likes ' + image.likes
            // setanylikes(true)
        }else {
            text='No one likes this image yet!'
        }
            console.log('in return text')
            return text
        }

    const toggleImage = ()=>{
        console.log( 'in toggle image');
        setShowImage(!showImage);
    }
    //function to toggle images

    const addlikes= ()=>{
        setImage({...image, likes: ++image.likes})
     
        axios.put(`/gallery/like/${image.id}`, image ).then( (response)=>{
            console.log('axios returndata:', response);
            // if(image.likes=0){setanylikes(false)};
        }).catch((err)=>{
            alert('nu-uh, err in put funciton');
            console.log(err);
        })
        console.log('props.image.likes:', props.image.likes);
       
    }
    //function to switch between likes options on DOM
  
    return(
        <div>
            {/* <p> GalleryItems</p> */}
            {/* <p>{ JSON.stringify(props)}</p> */}
            
            {//toggle image true/false options
                showImage ?
                <img class="image" src={props.image.path} alt={props.image.description} onClick={ toggleImage }/>://true
                <h2 onClick={ toggleImage}>{props.image.description}</h2> //false
            }

        <div>
            <button id="button" onClick={addlikes}>Like</button> 
            <p>{togglelikes()}</p>

        </div>
            
        </div>
    )
}

export default GalleryItems