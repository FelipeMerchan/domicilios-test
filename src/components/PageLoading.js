import React from 'react'

import { Loader } from './Loader'
import '../assets/styles/components/PageLoading.scss'

export const PageLoading = () => {
  return (
    <div className="PageLoading">
      <Loader />
    </div>
  )
}
