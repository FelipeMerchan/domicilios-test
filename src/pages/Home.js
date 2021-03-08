import React from 'react'

import { FormEditor } from '../components/FormEditor'
import { Post } from '../components/Post'
import '../assets/styles/pages/Home.scss'

export const Home = () => {
  return (
    <>
      <main className="Home">
        <div className="wrapper">
          <div className="Home-content">
            <FormEditor />
            <Post />
            <Post />
          </div>
        </div>
      </main>
    </>
  )
}