import { useEffect, useState } from "react"
import Card from "./components/Card"
import { Howl } from 'howler'
import { Transition, motion } from 'framer-motion'

import cardUpWav from './assets/sounds/Kort-Upp-BUNG.wav'
import cardDownWav from './assets/sounds/Kort-Ner-BUNG.wav'

const cardAnimation = (down: boolean): Transition => ({
  type: 'spring',
  duration: 0.6,
  mass: down ? 0.4 : 0.1,
  stiffness: 120
})

type Sounds = {
  cardUp: Howl
  cardDown: Howl
}

type Card = {
  id: string
}

function App() {
  const [cards, setCards] = useState([
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' }
  ])

  const [player1Cards, setPlayer1Cards] = useState(['1', '2', '3'])

  const [pickedCard, setPickedCard] = useState<string | null>(null)

  const [flip, setFlip] = useState(false)

  const [sounds, setSounds] = useState<Sounds>(null as any)

  const loadSounds = () => {
    setSounds({
      cardUp: new Howl({ src: [cardUpWav] }),
      cardDown: new Howl({ src: [cardDownWav] })
    })
  }

  const doTheMove = () => {
    if (pickedCard) {
      sounds.cardDown.play()
      setFlip(false)
    } else {
      sounds.cardUp.play()
    }
  }

  const doTheFlip = () => {
    setFlip(true)
  }

  const pickCard = (cardId: string) => {
    sounds.cardUp.play()
    setPickedCard(cardId)
  }

  const clearPickedCard = () => {
    sounds.cardDown.play()
    setPickedCard(null)
    setFlip(false)
  }

  useEffect(() => {
    loadSounds()
  }, [])

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute top-1/2 w-full h-64 flex justify-center z-10">
        <div className="flex object-contain justify-center transform-style-3d">
          {pickedCard && (
            <Card
              onClick={clearPickedCard}
              motion={{
                layoutId: `card_${pickedCard}`,
                layout: true,
                transition: cardAnimation(true),
                animate: {
                  rotateY: flip ? 180 : 0
                },
                onLayoutAnimationComplete: () => {
                  doTheFlip()
                }
              }}
            />
          )}
        </div>
      </div>

      <div className="w-full h-full grid grid-rows-3 grid-cols-3">
        <div className="bg-red-100 row-start-2 col-start-2 grid grid-rows-1 grid-cols-2 p-4 gap-4">
          <motion.div layoutId="card5" layout transition={cardAnimation(false)} className="flex flex-col object-contain justify-center">
            <Card />
          </motion.div>
          <motion.div layoutId="card6" layout transition={cardAnimation(false)} className="flex flex-col object-contain justify-center">
            <Card />
          </motion.div>
        </div>

        <div className="row-start-1 col-start-1">
          {/* <button onClick={doTheMove}>
            {move ? 'Unmove' : 'Move'}
          </button>
          <br />
          <button onClick={doTheFlip}>
            {flip ? 'Unflip' : 'Flip'}
          </button> */}
        </div>
      
        <div className="bg-violet-400 row-start-1 col-start-2 grid grid-rows-2 grid-cols-2 p-4 gap-4">
          {player1Cards.map(cardId => (
            <div
              key={`card_${cardId}`}
              className="flex object-contain justify-center transform-style-3d"
            >
              {pickedCard !== cardId && (
                <Card
                  onClick={() => pickCard(cardId)}
                  motion={{
                    layoutId: `card_${cardId}`,
                    layout: true,
                    transition: cardAnimation(false),
                    style: {
                      rotateY: 0
                    }
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="bg-rose-400 row-start-2 col-start-1">

        </div>

        <div className="bg-emerald-400 row-start-2 col-start-3">

        </div>

        <div className="bg-sky-400 row-start-3 col-start-2">

        </div>
      </div>
    </div>
    
    // <div className="p-12">
    //   <button onClick={() => setMove(!move)}>
    //     {move ? 'Move' : 'Back'}
    //   </button>

    //   <div className="grid grid-rows-3 grid-cols-3 w-screen h-screen">
    //     <div className="bg-violet-400 row-start-1 col-star-2">

    //     </div>
    //   </div>
      
    //   <PlayArea>
    //     <div>
    //       <div className="bg-red-400 w-96 h-96 flex justify-center items-center">
    //         {!move && (
    //           <motion.div layoutId="card" layout transition={cardAnimation} className="w-40">
    //             <Card />
    //           </motion.div>
    //         )}
    //       </div>

    //       <div className="bg-blue-400 w-96 h-96 flex justify-center items-center">
    //         {move && (
    //           <motion.div layoutId="card" layout transition={cardAnimation} className="w-64">
    //             <Card />
    //           </motion.div>
    //         )}
    //       </div>
    //     </div>
    //   </PlayArea>
    // </div>
  )
}

export default App
