import React from 'react'
import StyledImageCardComponent from '../styles/ImageCardComponent.styled'

const ImageCardComponent: React.FC<{image_link: string}> = ({image_link}) => {
  return (
    <StyledImageCardComponent>
      <img src={image_link} alt="Cat breed" className='img-fluid' />
    </StyledImageCardComponent>
  )
}

export default ImageCardComponent