import React from 'react'

import { CommentsDetails } from './CommentsDetails'
import { SubComments } from './SubComments'
import '../assets/styles/components/Post.scss'

export const Post = () => {
  return (
    <article className="Post">
      <div>
        <figure className="Post__avatarContainer">
          <img className="Post__avatar" src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1615181820/Domicilios%20Test/juan-rodriguez_bpd5jp.jpg" width="40" title="Imagen de perfil de Juan" alt="Imagen de perfil de Juan" />
        </figure>
        <div>
          <span className="Post__user">Juan Rodriguez</span>
          <span className="Post__time">hace 40 minutos</span>
          <p className="Post__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut </p>
        </div>
      </div>
      <CommentsDetails />
      <div className="Post__actions">
        <button type="button">Reaccionar</button>
        <button type="button">Comentar</button>
      </div>
      <SubComments />
    </article>
  )
}