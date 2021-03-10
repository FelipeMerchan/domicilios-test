import React from 'react'

export const FavButton = ({ liked, onClick}) => {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {liked ? 'Ya no me gusta' : 'Reaccionar'}
    </button>
  )
}