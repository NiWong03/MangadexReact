import React from 'react'
import kawhi from '../image404/kawhi.jpg'

function Card({ manga }) {
  return (
    <div className="manga-card">
      {manga.coverFileName && (
        <img 
          src={`https://uploads.mangadex.org/covers/${manga.id}/${manga.coverFileName}.128.jpg`}
          alt={'404'}
       />
      )}
      <h3>{manga.attributes.title.en}</h3>
    </div>
  )
}

export default Card