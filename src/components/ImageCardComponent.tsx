import React from 'react'
import StyledImageCardComponent from '../styles/ImageCardComponent.styled'

const ImageCardComponent: React.FC<{image_link: string, bg_effect: boolean, img_height: number}> = ({image_link, bg_effect, img_height}) => {
  return (
    <StyledImageCardComponent img_height={img_height}>
      <img src={image_link} alt="Cat breed" className='img-fluid' />
      {bg_effect && <div className='special-bg-effect'></div>}
    </StyledImageCardComponent>
  )
}

export default ImageCardComponent