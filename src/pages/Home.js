import React from 'react'

import { FormEditor } from '../components/FormEditor'
import '../assets/styles/pages/Home.scss'

export const Home = () => {
  return (
    <>
      <main className="Home">
        <div className="wrapper">
          <div className="Home-content">
            <FormEditor />
          </div>
        </div>
      </main>
    </>
  )
}