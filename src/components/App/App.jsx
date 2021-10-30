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
  

  const getGalleryItems=()=>{
      axios.get('/gallery').then( (response)=>{
          console.log(response.data);
          
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
        <Gallery_List/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
