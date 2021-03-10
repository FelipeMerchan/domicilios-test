import React from 'react'

import { CommentsDetails } from './CommentsDetails'
import { FavButton } from './FavButton'
import { SubComments } from './SubComments'
import { useLocalStorage } from '../hooks/useLocalStorage'
import '../assets/styles/components/Post.scss'

export const Post = ({ id, user, summary, likes, avatarUrl, comments }) => {
  const key = `like-${id}`

  const [liked, setLiked] = useLocalStorage(key, false)

  const handleFavClick = () => setLiked(!liked)

  return (
    <article className="Post">
      <div>
        <figure className="Post__avatarContainer">
          <img className="Post__avatar" src={avatarUrl} width="40" title={`Imagen de perfil de ${user}`} alt={`Imagen de perfil de ${user}`} />
        </figure>
        <div>
          <span className="Post__user">{ user }</span>
          <span className="Post__time">hace 40 minutos</span>
          <p className="Post__text">{summary}</p>
        </div>
      </div>
      <CommentsDetails likes={likes} comments={comments} />
      <div className="Post__actions">
        <FavButton liked={liked} onClick={handleFavClick}/>
        <button type="button">Comentar</button>
      </div>
      {comments.length === 0 ? '' : <SubComments />}
    </article>
  )
}