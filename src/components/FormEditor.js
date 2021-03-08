import React, { useRef, useState } from 'react'

import { Button } from './Button'
import '../assets/styles/components/FormEditor.scss'

export const FormEditor = () => {
  const input = useRef(null)
  const [open, setOpen] = useState(false)

  return (
    <div className="FormEditor">
      <form>
        <label htmlFor="status">
          <input className="FormEditor__input" onClick={() => setOpen(true)} type="text" placeholder="Escribe aquí tu estado" id="status" name="status" required />
        </label>
        <div className={`FormEditor__footer ${open ? 'active' : ''}`}>
          <Button />
        </div>
      </form>
    </div>
  )
}