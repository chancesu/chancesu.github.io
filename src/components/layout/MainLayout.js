import React from 'react'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import styled from 'styled-components'
import '@style/global.scss'

const Wrap = styled.div`
  width:100%;
  height:100%;
`
const MainLayout = (props) =>{

  return(
    <>
      <Wrap>
        <Header></Header>
        <div className="container">
          {props.children}
          <Footer></Footer>
        </div>
      </Wrap>
    </>
  )
}

export default MainLayout;