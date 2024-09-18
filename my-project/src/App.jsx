import { useState } from 'react'
import Header from './components/Header';
import Post from './components/Post';
import Timeline from './components/Timeline';
import 'flowbite';

function App() {

  return (
    <>
     <Header />
     <main className='pt-28'>
      <Post />
      <Timeline />
      </main>
    </>
  )
}

export default App
