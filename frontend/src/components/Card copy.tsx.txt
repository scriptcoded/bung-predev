import React from 'react'

import cardImage from '../assets/cards/lvl1/queen_of_diamonds.png'
import backImage from '../assets/cards/lvl1/back.png'

export type Props = {
}

export default function Card (props: Props) {
  
  return (
    <div className="relative aspect-card perspective-750 group">
      <div className="relative pointer-events-none aspect-card group-hover:-rotate-x-180 transition-all duration-300 transform-style-3d shadow rounded-xl">
        <img
          src={backImage}
          className="aspect-card absolute inset-0 backface-hidden"
        />
        <img
          src={cardImage}
          className="aspect-card absolute inset-0 rotate-x-180 backface-hidden"
        />
      </div>
    </div>
  )
}
