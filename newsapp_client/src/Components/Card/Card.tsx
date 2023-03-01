import React from 'react'
import styled from 'styled-components'
import {Cards,CardImgContainer,CardImg,CardTags,CardTag,CardBody,CardTitle,OutlineBtn,SolidBtn} from '../../Css/styledComponents'


function Card() {
  return (
    <div>
          <Cards
            className="cards"
            data-aos="slide-left"
            data-aos-delay="200"
          >
            <CardImgContainer className="card__img-container">
              <CardImg
                className="card__img"
                src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="unsplash random"
              />
              <CardTags className="card__tags">
                <CardTag className="card__tag" >
                  tag
                </CardTag>
              </CardTags>
            </CardImgContainer>
            <CardBody className="card__body">
              <CardTitle className="card__title">name</CardTitle>
              <div className="btn-wrapper d-flex justify-content-around m-3">

                <OutlineBtn
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
                </SolidBtn>
              </div>
            </CardBody>
          </Cards>
        </div>
  )
}

export default Card