import React from 'react'
import Herocard from './Herocard';


function Trademarkhero(props) {
  const {image}=props

  return (
    <div
    style={{
      backgroundImage:`url(${image.src})`,
    }}
    className="div w-full h-[600px] md:h-[800px] lg:h-[600px] 3xl:h-[700px] bg-cover bg-no-repeat flex items-center justify-center md:justify-start"
  >
   <Herocard
   title='  Best efficient and ensured trademark registration services'
   desc='  Keep our brand safeonline with Filer.me.Get started for just'
   buttontitle='Register my Trademark for $45*'
   width='600'
   heigth='450'
   
   />
  </div>
  )
}

export default Trademarkhero;