'use client'
import React, { useState } from 'react'
import styles from './Button.module.css'

const Button = ({ label }: { label: string }) => {
  const [clickCount, setClickCount] = useState(0)
  return (
    <button
      onClick={() => setClickCount((clickCount) => ++clickCount)}
      className={styles.Button}
    >
      {label} clicked: {clickCount}
    </button>
  )
}

export default Button
