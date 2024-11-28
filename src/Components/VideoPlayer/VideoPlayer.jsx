import React, {useRef} from 'react'
import './VideoPlayer.css'

const VideoPlayer = ({ playState, setPlayState }) => {

  const player = useRef(null)
  const closePlayer =(e)=>{
    if(e.target === player.current){
      setPlayState(false);
    }}
  
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player}
    onClick={closePlayer}>
      <iframe
        src="https://www.youtube.com/embed/1cu-tv2rJ-U?si=JaVy55bfgcWohAtm"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
