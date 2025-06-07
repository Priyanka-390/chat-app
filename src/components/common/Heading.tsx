import React from 'react'
interface headingProps{
  headingText?: string,
  className?:string,
}

const Heading = ({headingText,className}:headingProps) => {
  return (
    <h2 className={`text-dark-blue text-3xl max-lg:text-3xl max-md:text-2xl text-center font-bold leading-120 ${className}`}>{headingText}</h2>
  )
}

export default Heading
