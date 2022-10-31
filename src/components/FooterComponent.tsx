import React from 'react'
import StyledFooterComponent from '../styles/FooterComponent.styled'

const FooterComponent = () => {
  return (
    <StyledFooterComponent>
      <div className='row'>
        <div className='col-sm-6'>
          <img src='/img/CatwikiLogoWhite.svg' alt='Cat Wiki Logo'/>
        </div>
        <div className='col-sm-6 mt-2'>
          <p>&copy; created by Adeoluwa Adeboye - devChallenge.io</p>
        </div>
      </div>
    </StyledFooterComponent>
  )
}

export default FooterComponent