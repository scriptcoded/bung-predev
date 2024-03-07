import cardImage from '../assets/cards/lvl1/queen_of_diamonds.png'
import backImage from '../assets/cards/lvl1/back.png'
import { MotionProps, motion } from "framer-motion"
import { twMerge } from "tailwind-merge"

export type Props = {
  motion?: MotionProps
  className?: string
  onClick?: () => void
}

export default function Card (props: Props) {
  return (
    <motion.div
      className={twMerge(
        'realtive aspect-card transform-style-3d shadow rounded-xl',
        props.className
      )}
      onClick={props.onClick}
      {...props.motion}
    >
      <img
        src={backImage}
        className="pointer-events-none aspect-card absolute inset-0 backface-hidden"
      />
      <img
        src={cardImage}
        className="pointer-events-none aspect-card absolute inset-0 rotate-x-180 backface-hidden"
      />
    </motion.div>
  )
}
