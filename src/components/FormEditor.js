import React, { useState } from 'react'

import { Button } from './Button'
import '../assets/styles/components/FormEditor.scss'

export const FormEditor = ({ onChange, onSubmit, formValues, error }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="FormEditor">
      <form onSubmit={onSubmit}>
        <label htmlFor="summary">
          <input
            className="FormEditor__input"
            onChange={onChange}
            onClick={() => setOpen(true)}
            type="text"
            placeholder="Escribe aquí tu estado"
            id="summary"
            name="summary"
            value={formValues.summary}
            required
          />
        </label>
        <div className={`FormEditor__footer ${open ? 'active' : ''}`}>
          {error && (
            <p className="text-danger">{error.message}</p>
          )}
          <Button />
        </div>
      </form>
    </div>
  )
}
