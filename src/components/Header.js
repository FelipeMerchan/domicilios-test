import React, { useState } from 'react'

import { BurgerButtonIcon } from './BurgerButtonIcon'
import { CloseIcon } from './CloseIcon'
import '../assets/styles/components/Header.scss'

export const Header = ({ user }) => {
  const [open, setOpen] = useState(false)

  const Icon = open ? CloseIcon : BurgerButtonIcon

  return (
    <header className="Header">
      <span className="Header__brand">Domilicios Test</span>
      <button
        type="button"
        className="Header__burger-button"
        onClick={() => setOpen(!open)}
      >
        <Icon />
      </button>
      <div className={`Header__user ${open ? 'active' : ''}`}>
        <span>Hola! {user}</span>
      </div>
    </header>
  )
}
