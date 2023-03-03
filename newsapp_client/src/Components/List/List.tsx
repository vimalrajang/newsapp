import React from 'react'
import { ListHeader, ListImg, ListWrapper, ListImgContainer, ListIconsWrapper, ListIconWrapper, ListBox, ListDescription, ListContentWrapper } from '../../Css/styledComponents'
import { BiBookmark } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

function List(props:any) {
  const {source,author,title,description,publishedAt,url,urlToImage} = props.article

  return (
    <ListBox>
      <ListIconsWrapper>
        <ListIconWrapper>
          <BiBookmark size={20} />
        </ListIconWrapper>
        {/* <ListIconWrapper>
          <AiOutlineHeart size={20} />
        </ListIconWrapper> */}
      </ListIconsWrapper>
      <ListWrapper>
        <ListContentWrapper>
          <ListHeader>{title}</ListHeader>
          <ListDescription>{description}</ListDescription>
        </ListContentWrapper>
        <div>
          <ListImgContainer>

            <ListImg 
            src={urlToImage}
              alt="news Image" />
          </ListImgContainer>

        </div>
      </ListWrapper>
    </ListBox>
  )
}

export default List