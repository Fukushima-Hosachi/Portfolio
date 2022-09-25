import React from 'react'
import Card from './Card';

import CarouselFadeExample from "./CarouselFadeExample";

function home() {
  return (
    <div className='Body'>
      <div className='index'>
        <p>Home</p>
      </div>
      
      <div className='paragraph'>
      
        <p>
          サイトの詳細について
        </p>

        <div className='Frame01'>
          <p>
          Home→説明<br></br>
          About→自己紹介<br></br>
          Works→作品一覧<br></br>
         </p>
        </div>

      </div>
      
    </div>

  )
}

export default home