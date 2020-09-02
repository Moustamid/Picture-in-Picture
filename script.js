const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to Select media stream , pass to video element , then play


async function selectMediaStream() {

  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
       videoElement.play();
    }

  } catch(err) {
    console.error("Error: " + err);
  }
}

button.addEventListener( 'click' , async () => {
    //   Disable Button 
    button.disabled = true;
    // start Picture in Picture 
    await videoElement.requestPictureInPicture();
    // Reset Button 
    button.disabled = false;
});

// On load : 

selectMediaStream()