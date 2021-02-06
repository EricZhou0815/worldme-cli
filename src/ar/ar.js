{/* <a-scene
raycaster="objects: [gps-entity-place];"
vr-mode-ui="enabled: false"
embedded
arjs='trackingMethod: best; sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;'>    
<a-camera gps-camera rotation-reader></a-camera>
</a-scene> */}

const ARcreateTag = (tagName,attributesList) =>{
    const tag=document.createElement(tagName);
    console.log(tag)
  }


ARcreateTag('a-scence','raycaster:objects: [gps-entity-place]');