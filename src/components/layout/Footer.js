import React from 'react'

import styled from 'styled-components';

const FooterStyle = styled.div`
  margin-top : 20px;
  border-top : 1px solid #ddd;
`
const Footer = () =>{

  return(
    <FooterStyle>
    <div className="container">
      footer
    </div>
    </FooterStyle>
  )
}

export default Footer;