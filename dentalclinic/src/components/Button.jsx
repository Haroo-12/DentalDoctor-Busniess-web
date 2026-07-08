import React from 'react'

const Button = ({className , text}) => {
  return (
    <div>
                <button className={`text-[var(--background)] box-shadow: 0 10px 30px rgba(0,0,0,0.08) lg:py-4 lg:font-bold lg:px-9 py-2 px-10 cursor-pointer  rounded-2xl  ${className}`}>{text}</button>
      
    </div>
  )
}

export default Button
