import React from "react"
import ReactPlayer from "react-player"
import './MusicPlayer.css'


//biggest thing I feel I need feedback on is the dimesions of the video player. I made it take up the whole width of the website
//The default is 640px for the height and 360 for the width. So it looks more like a little screen which the purple background of the website visible

//The other thing I need is the url for the soundcloud playlist with the space junk music
function MusicPlayer() {
  return (
    <div class = "player">
      
      <ReactPlayer width = '100%' height = '640px'url="https://soundcloud.com/electromum/sets/scifi"/>
    </div>
  )
}

export default MusicPlayer