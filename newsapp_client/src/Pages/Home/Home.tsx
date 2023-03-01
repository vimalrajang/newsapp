import Carousel from 'nuka-carousel/lib/carousel'
import React from 'react'

import Card from '../../Components/Card/Card'
import {HighlightBoxHeader,HighlightBox} from '../../Css/styledComponents'


function Home() {

  return (
    <div>
      <HighlightBox>
        <HighlightBoxHeader>News Highlight</HighlightBoxHeader>
        <Carousel adaptiveHeight={true} renderBottomCenterControls={null} wrapAround={true} slidesToShow={3} >
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </Carousel>
      </HighlightBox>

    </div>
  )
}

export default Home