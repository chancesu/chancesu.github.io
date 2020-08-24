import React, { useState, useEffect, useMemo } from 'react'
import { useStoreAction } from '@store'
import { useObserver , observerBatching } from 'mobx-react-lite'
import styled , { css } from 'styled-components'
import LoginBtn from '@components/LoginBtn'

const SiteLogo = styled.h1`
  font-family : 'Raleway', sans-serif;
  font-weight:200;
`

const HeaderStyle = styled.div`
  position:relative;
  height:40px;
  margin-bottom : 20px;
  padding:10px 20px;
  border-bottom : 1px solid #ddd;
`

const UtilStyle = styled.div`
  position:absolute;
  top:0px;
  right:20px;
  text-align:right;
  & > p{
    padding-right:40px;
    line-height:40px;
  }
`

const ProfileStyle = styled.img`
  position:absolute;
  top:5px;
  right:0;
  overflow:hidden;
  width:30px;
  height:30px;
  box-shadow:0 1px 2px rgba(0,0,0,0.8);
  border-radius:50%;
  margin-left:10px;
  & > img{
    width:30px;
    height:30px;
    background:#ddd;
  }
`

const Header = () =>{
  const BlogModule = useStoreAction('Blog');
  const [userName, setUserName] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const ActiveUser = () => {
    return userInfo;
  }

  useEffect(()=>{
    if(!!BlogModule.state.auth.uid){
      setUserName(BlogModule.state.auth.displayName)
      setUserProfile(BlogModule.state.auth.photoURL)
    }
  },[BlogModule.state.autnDrawKey]);

  return useObserver(() => {
    return(
      <HeaderStyle>
        <div className="container">
          <SiteLogo>Chancesu</SiteLogo>
          <UtilStyle>
            { !userName ?  <LoginBtn/> : null }
            { !!userName && (
              <>
                <p>{userName} 님 안녕하세요.</p>
                <ProfileStyle src={userProfile}/>
              </>
            )}
          </UtilStyle>

        </div>
      </HeaderStyle>
    )
  })
}

export default Header;