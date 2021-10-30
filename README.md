# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

-added images to `public/images`
-linked images in the `server/modules/data.js` giving them unique ids and decriptions

-installed nodemon
-used npm install, npm run server to start server side
-used npm run client to start client side

-sketched out the project 
    -gallery items live in gallery list, which live in App.
    -gallery list is like the body

-copied the _template to create Gallery_List
-sourced Gallery_List into App.jsx
-added props to Gallery_List

-drew some more pictures!
    -gallery items live on the server side so:
        -added use effect so i could run functions on page load
        -added axios get call to app.js to get data from app.jsx, learned this has to be in the function app or you get Hook errors
        -console.log(response.data) confirming it gets back the array of images. 
        -set them on page usign const [galleryImages, setgalleryImages] = useState( [] );
    -set up props to send down a level
        -<Gallery_List galleryImages={galleryImages}/>
    
-in Galley List level
    -use <p>{ JSON.stringify(props)}</p> */} to see the data
    -map through the array and send images down to eh gallery item level with props
        - {props.galleryImages.map( image =>(<GalleryItems image={image}/>)) }

-in gallery items






Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

