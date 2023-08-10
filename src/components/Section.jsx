import React from 'react'

export default function Section({children,className}) {
  return (
    <section className={className&&className}>
        {children}
    </section>
  )
}
