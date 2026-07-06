
import  Sidebar  from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import React, { useContext } from 'react'
import DisplayHome from './components/DisplayHome'
import Navbar from './components/Navbar'
import AlbumItem from './components/AlbumItem'
import { PlayerContext } from './context/PlayerContext'



function App() {

  const {audioRef,track} = useContext(PlayerContext);
  return (
    <div className='h-screen bg-black'>
     <div className='h-[90%] flex'>
      <Sidebar/>
       <Display/>

     </div>
     <Player/>
      {/*<DisplayHome/>*/}
     {/*<Navbar/>*/}
     <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
    
  )
}

export default App
