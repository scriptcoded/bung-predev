export type CardSubSet = {
  ace: string
  two: string
  three: string
  four: string
  five: string
  six: string
  seven: string
  eight: string
  nine: string
  ten: string
  jack: string
  queen: string
  king: string
}

export type CardSet = {
  clubs: CardSubSet
  hearts: CardSubSet
  diamonds: CardSubSet
  spades: CardSubSet
  jokerRed: string
  jokerBlack: string
  jokerNeutral: string
}

export const cardMap: CardSet = {
  clubs: {
    ace: 'ace_of_clubs.png',
    two: '2_of_clubs.png',
    three: '3_of_clubs.png',
    four: '4_of_clubs.png',
    five: '5_of_clubs.png',
    six: '6_of_clubs.png',
    seven: '7_of_clubs.png',
    eight: '8_of_clubs.png',
    nine: '9_of_clubs.png',
    ten: '10_of_clubs.png',
    jack: 'jack_of_clubs.png',
    queen: 'queen_of_clubs.png',
    king: 'king_of_clubs.png'
  },
  hearts: {
    ace: 'ace_of_hearts.png',
    two: '2_of_hearts.png',
    three: '3_of_hearts.png',
    four: '4_of_hearts.png',
    five: '5_of_hearts.png',
    six: '6_of_hearts.png',
    seven: '7_of_hearts.png',
    eight: '8_of_hearts.png',
    nine: '9_of_hearts.png',
    ten: '10_of_hearts.png',
    jack: 'jack_of_hearts.png',
    queen: 'queen_of_hearts.png',
    king: 'king_of_hearts.png'
  },
  diamonds: {
    ace: 'ace_of_diamonds.png',
    two: '2_of_diamonds.png',
    three: '3_of_diamonds.png',
    four: '4_of_diamonds.png',
    five: '5_of_diamonds.png',
    six: '6_of_diamonds.png',
    seven: '7_of_diamonds.png',
    eight: '8_of_diamonds.png',
    nine: '9_of_diamonds.png',
    ten: '10_of_diamonds.png',
    jack: 'jack_of_diamonds.png',
    queen: 'queen_of_diamonds.png',
    king: 'king_of_diamonds.png'
  },
  spades: {
    ace: 'ace_of_spades.png',
    two: '2_of_spades.png',
    three: '3_of_spades.png',
    four: '4_of_spades.png',
    five: '5_of_spades.png',
    six: '6_of_spades.png',
    seven: '7_of_spades.png',
    eight: '8_of_spades.png',
    nine: '9_of_spades.png',
    ten: '10_of_spades.png',
    jack: 'jack_of_spades.png',
    queen: 'queen_of_spades.png',
    king: 'king_of_spades.png'
  },
  jokerRed: 'red_joker.png',
  jokerBlack: 'black_joker.png',
  jokerNeutral: 'neutral_joker.png'
}
