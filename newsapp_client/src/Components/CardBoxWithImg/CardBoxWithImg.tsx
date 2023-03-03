import React, { useEffect, useState } from 'react'
import { H3Center, HighlightBox, H2Center, ListBox } from '../../Css/styledComponents'
import Carousel from 'nuka-carousel/lib/carousel'
import Card from '../../Components/Card/Card'
import CardWithImg from '../CardWithImg/CardWithImg'
import axios from 'axios'

function CardBoxWithImg(props: any) {
  // var data: any;
  const [data, setData] = useState(Object)
  const [loading, setLoading] = useState(true)

  var apiKey = window.localStorage.getItem('apiKey');
  var country = window.localStorage.getItem('country');
  useEffect(() => {
    getData()
  }, [])
  // async function getData() {
  //   await axios.get(`https://newsapi.org/v2/top-headlines?category=${props.title}&country=${country}&apiKey=${apiKey}`).then((res: any) => {
  //     console.log(res,"dasdasd sakdmnanskd")  
  //     return res.data

  //     }).then(datas => data = datas).catch(err=>console.log(err))
  // }
  async function getData() {
    console.log("dasasd")
    axios.get(`https://newsapi.org/v2/top-headlines?category=${props.title}&country=${country}&apiKey=${apiKey}`).then((res: any) => {
      console.log("res", res.data)
      setData(res.data)
      setLoading(false)
      return res.data
    })
    .then((datas: any) => console.log(data))
  }
  return (
    <HighlightBox>
      {
        loading == true ? <p>loading....</p>
          :
          <span>
            <H3Center>{props.title}</H3Center>
            <Carousel adaptiveHeight={true} renderBottomCenterControls={null} wrapAround={true} slidesToShow={3} >
              {
                data.articles.map((article: any, index: any) => {
                  return (
                    <CardWithImg article={article} imgSrc={props.imgSrc}/>
                  )
                })
              }
            </Carousel>
          </span>
      }
    </HighlightBox>
  )
}

export default CardBoxWithImg