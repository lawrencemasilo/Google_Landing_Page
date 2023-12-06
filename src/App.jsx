import { useState } from 'react'
import './App.css'
import pyramid from './background_images/drive.jpg'

function App() {
// <img src={pyramid} alt='background' />
  return (
    <div className='App-Cantainer'>
      <div className='extras'>
        <ul>
          <li className='links'><a href="">Gmail</a></li>
          <li className='links'><a href="">Images</a></li>
          <li><button><span class="material-symbols-outlined">experiment</span></button></li>
          <li><button><span class="material-symbols-outlined">apps</span></button></li>
        </ul>
      </div>
      
      <div className='searchBar'>
        <div className='logo'>
          <h1>Google</h1>
        </div>
        <div className='input'>
          <span class="material-symbols-outlined">search</span>
          <input type='text' placeholder='Search Google or type a URL'/>
        </div>
      </div>

      <div className='Add'>
        <div className='Add-icon'>
          <span class="material-symbols-outlined">add</span>
        </div>
        <div className='shortcut'>
          <h3>Add shortcut</h3>
        </div>
      </div>

      <div className='Credit'>
        <span class="material-symbols-outlined">link</span>
        <a href='https://unsplash.com/photos/aerial-photo-of-mountain-near-ocean-during-daytime-lHJZ2JTxSlI' target='_blank'>Photo by Pascal Debrunner</a>
      </div>
    </div>
  )
}

export default App
