import { twMerge } from "tailwind-merge"
import { CardData } from "../cards/cartSet"
import backImage from '../assets/cards/lvl1/back.png'

export type Props = {
  className?: string
  cards: CardData[]
}

export default function CardStack (props: Props) {
  const {
    className,
    cards
  } = props

  return (
    <div
      className={twMerge(
        'aspect-card relative',
        className
      )}
    >
      {cards.map((card, index) => (
        <img
          key={card.id}
          src={backImage}
          className="absolute aspect-card shadow rounded"
          style={{
            top: index * 3,
            left: index * 3
          }}
        />
      ))}
    </div>
  )
}
