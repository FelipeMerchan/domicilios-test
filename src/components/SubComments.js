import React from 'react'

import { Commentary } from './Commentary'
import '../assets/styles/components/SubComments.scss'

export const SubComments = () => {
  return (
    <div className="SubComments">
      <div>
        <Commentary />
        <Commentary />
        <Commentary />
      </div>
      <form>
        <label htmlFor="commentary">
          <input className="SubComments__input" type="text" placeholder="Escribe un comentario" id="commentary" name="commentary" required />
        </label>
      </form>
    </div>
  )
}