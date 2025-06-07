import React from 'react'
interface paragraph{
  paragraphText?: string,
  className?:string,
}

const Paragraph = ({paragraphText,className}:paragraph) => {
  return (
    <p className={`max-w-[374px] text-center mx-auto text-dark-blue pt-2 ${className}`}>
        {paragraphText}
        </p>
  )
}

export default Paragraph
