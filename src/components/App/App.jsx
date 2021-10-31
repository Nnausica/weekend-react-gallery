import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Gallery_List from './Gallery_List/Gallery_List'
import axios from "axios";


function App() {

  useEffect(()=>{
    console.log('component loaded');
    getGalleryItems()
  }, []);
  //new onReady function, 
  
  const [galleryImages, setgalleryImages] = useState( [] );

//get the image data from the server side
//use the '/gallery route
//data comes back as response, but we want to use response.data aka. just the good stuff
  const getGalleryItems=()=>{
      axios.get('/gallery').then( (response)=>{
          console.log(response.data);
          setgalleryImages( response.data );
  
      }).catch((err)=>{
          alert('nope');
          console.log(err);
      })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <Gallery_List galleryImages={galleryImages}/>
      </div>
    );
}

export default App;
