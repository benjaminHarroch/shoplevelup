import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import "../filescss/carousela.css"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function Caroussela() {

  return (

    <div className='caroussela-container'>

       <AutoPlaySwipeableViews> 

         <div className='caroussela-navbar'><img style={{'height':'20em','padding':'2em'}} src='https://media.terminalx.com/pub/media/catalog/product/cache/92af6b9c945798a7e3b64d91033084b3/z/4/z402156084-11674129292.jpg' alt="products"></img></div>
         <div className='caroussela-navbar'><img style={{'height':'20em', 'padding':'2em'}} src='https://media.terminalx.com/pub/media/catalog/product/cache/92af6b9c945798a7e3b64d91033084b3/z/4/z402156084-11674129292.jpg' alt="products"></img></div>
         <div className='caroussela-navbar'><img style={{'height':'20em','padding':'2em'}} src='https://media.terminalx.com/pub/media/catalog/product/cache/92af6b9c945798a7e3b64d91033084b3/z/4/z402156084-11674129292.jpg' alt="products"></img></div>

       </AutoPlaySwipeableViews>


    </div>
  )
}

export default Caroussela