import React from 'react'
import styled from 'styled-components'
import {Cards,CardImgContainer,CardImg,CardTags,CardTag,CardBody,CardTitle,OutlineBtn,SolidBtn, CardBtnWrapper, SourceName, PublisedTime} from '../../Css/styledComponents'


function Card(props:any) {
  const {source,author,title,description,publishedAt} = props.article
  var d = new Date(publishedAt)
  return (
    <div>
          <Cards
            className="cards"
            data-aos="slide-left"
            data-aos-delay="200"
          >
            {/* <CardImgContainer className="card__img-container">
              <CardImg
                // className="card__img"
                src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="unsplash random"
              />
              <CardTags className="card__tags">
                <CardTag className="card__tag" >
                  tag
                </CardTag>
              </CardTags>
            </CardImgContainer> */}
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

export default Card