import React from 'react'

export type Props = {
  children?: React.ReactNode
}

export default function PlayArea (props: Props) {
  const {
    children
  } = props

  return (
    <>
      {children}
    </>
  )
}
