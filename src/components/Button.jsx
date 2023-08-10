import React from 'react'

export default function Button({text,className}) {
  return (
    <button className={`py-4 px-16 bg-licolor text-white text-sm font-dm font-bold border-solid border border-licolor hover:bg-white hover:text-black duration-500  ${className&&className}`}>{text}</button>
  )
}
