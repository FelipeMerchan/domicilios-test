import React from 'react'

import '../assets/styles/components/Commentary.scss'

export const Commentary = () => {
  return (
    <div className="Commentary">
      <figure className="Commentary__avatarContainer">
        <img className="Commentary__avatarContainer" src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1615185845/Domicilios%20Test/elena_g6c0y6.jpg" width="35" alt="Imagen de perfil de Elena" />
      </figure>
      <div>
        <span className="Commentary__user">Elena</span>
        <span className="Commentary__text">Lorem ipsum dolor sit amet, consectetuer</span>
        <span className="Commentary__time">Hace 2 días</span>
      </div>
    </div>
  )
}