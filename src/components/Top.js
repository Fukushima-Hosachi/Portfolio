<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y2WZH1K8KT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y2WZH1K8KT');
</script>

import React from 'react'
import Card from './Card';

import CarouselFadeExample from "./CarouselFadeExample";

function home() {
  return (
    <div>
        <div>
            <CarouselFadeExample  />  
           
          
            {/* <div className="Body02">
              
              <Card />
            </div>  */}

      </div>
      
    </div>

  )
}

export default home
