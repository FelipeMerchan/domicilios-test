import React from 'react'

import '../assets/styles/components/CommentsDetails.scss'

export const CommentsDetails = ({ likes, comments }) => {
  return (
    <div className="CommentsDetails">
      <div>
        <figure className="CommentsDetails__avatarContainer">
          <img className="CommentsDetails__avatar" src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1615184289/Domicilios%20Test/cristina_z63io6.jpg" width="25" alt="Imagen de perfil de Cristina" />
        </figure>
        <figure className="CommentsDetails__avatarContainer">
          <img className="CommentsDetails__avatar" src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1615184289/Domicilios%20Test/cristina_z63io6.jpg" width="25" alt="Imagen de perfil de Cristina" />
        </figure>
        <figure className="CommentsDetails__avatarContainer">
          <img className="CommentsDetails__avatar" src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1615184289/Domicilios%20Test/cristina_z63io6.jpg" width="25" alt="Imagen de perfil de Cristina" />
        </figure>
        <span>{likes}</span>
      </div>
      <span>{comments.length} comentarios</span>
    </div>
  )
}