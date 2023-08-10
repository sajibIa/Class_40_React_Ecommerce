import React from 'react'

export default function List({text,className}) {
  return (
    <li className={`text-sm text-licolor2 font-dm font-normal list-none cursor-pointer hover:text-licolor hover:font-bold ${className&&className}`}>{text}</li>
  )
}
