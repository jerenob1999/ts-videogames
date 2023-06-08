import React from 'react'

type Props = {
  description:string
   }
function Description({description} : Props) {
  return (
    <div dangerouslySetInnerHTML={{__html: description }} ></div>
  )
}

export default Description