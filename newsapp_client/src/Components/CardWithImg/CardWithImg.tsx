import React from 'react'
import {Cards,CardImgContainer,CardImg,CardTags,CardTag,CardBody,CardTitle,OutlineBtn,SolidBtn, CardBtnWrapper, SourceName, PublisedTime} from '../../Css/styledComponents'

function CardWithImg(props:any) {
    const {source,author,title,description,publishedAt} = props.article
    var d = new Date(publishedAt)
  return (
    <div>
    <Cards
      className="cards"
      data-aos="slide-left"
      data-aos-delay="200"
    >
      <CardImgContainer className="card__img-container">
        <CardImg
          // className="card__img"
          src={props.imgSrc}
          alt={props.imgSrc}
        />
        <CardTags className="card__tags">
          <CardTag className="card__tag" >
            tag
          </CardTag>
        </CardTags>
      </CardImgContainer>
      <CardBody className="card__body">
        <CardTitle className="card__title">{title}</CardTitle>
        <CardBtnWrapper className="btn-wrapper">
          <SourceName>{author}</SourceName>
          <PublisedTime>{String(d.getDate()).padStart(2, '0')}/{String(d.getMonth()+1).padStart(2, '0')}-{d.getHours()}:{d.getMinutes()}</PublisedTime>
          {/* <OutlineBtn
            className="outline btn"
            onClick={() => console.log("sda")}
          >
            Source
          </OutlineBtn>
          <SolidBtn
            className="solid btn"
            onClick={() => console.log("sda")}
          >
            Live Demo
          </SolidBtn> */}

        </CardBtnWrapper>
      </CardBody>
    </Cards>
  </div>
  )
}

export default CardWithImg