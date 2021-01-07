import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import styled from 'styled-components';

const FooterStyle = styled.div`
  margin-top : 20px;
  padding:10px;
  border-top : 1px solid #ddd;
  text-align:center;
  line-height:1.8;
`
const GithubBtn = styled.a`
  display : inline-block;
  background : #000;
  border-radius:5px;
  padding:10px;
  color:#fff;
  line-height:1;
  &>svg{
    margin-right:3px;
    vertical-align:text-top;
  }
`
const ResumeBtn = styled.a`
  display : inline-block;
  background : #ddd;
  border-radius:5px;
  margin-left:10px;
  padding:10px;
  line-height:1;
  &>svg{
    margin-right:3px;
    vertical-align:text-top;
  }
`
const Footer = () =>{

  return(
    <FooterStyle>
    <div className="container">
    Look for hidden interesting.<br/>
      <GithubBtn href="https://github.com/chancesu">
        <AiOutlineGithub/> Github
      </GithubBtn>
      <ResumeBtn href="https://docs.google.com/document/d/1ZRKK7GKFuE09pXeDWDlrGTCLcryqWeCdiM5H7lBPguM/edit?usp=sharing">
        <CgFileDocument/>Resume
      </ResumeBtn>
    </div>
    </FooterStyle>
  )
}

export default Footer;