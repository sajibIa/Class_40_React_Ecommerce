import React from 'react'

export default function SubHeading({text,className}) {
  return (
    <h2 className={`text-text39 text-licolor font-dm font-bold ${className&&className}`}>{text}</h2>
  )
}
