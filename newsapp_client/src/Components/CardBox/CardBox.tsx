import React, { useEffect, useState } from 'react'
import { H3Center, HighlightBox, H2Center, ListBox } from '../../Css/styledComponents'
import Carousel from 'nuka-carousel/lib/carousel'
import Card from '../../Components/Card/Card'

function CardBox(props:any) {
  console.log(props.data)
  return (
    <HighlightBox>
        <H3Center>{props.title}</H3Center>
        <Carousel adaptiveHeight={true} renderBottomCenterControls={null} wrapAround={true} slidesToShow={3} >
          {
            props.data.articles.map((article:any,index:any)=>{
              return(
                <Card article={article}/>
              )
            })
          }
        </Carousel>
    </HighlightBox>
  )
}

export default CardBox