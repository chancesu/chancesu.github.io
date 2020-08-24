import React from 'react';
import styled , { keyframes } from 'styled-components'

const HelloArea = styled.div`
  box-sizing: border-box;
  width:500px;
  height:500px;
  margin:0 auto;
  padding:20px;
  border:15px solid #000;
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 15s infinite linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23000000' /%3E%3Cstop offset='25%25' stop-color='%23000000' /%3E%3Cstop offset='50%25' stop-color='%23000000' /%3E%3Cstop offset='100%25' stop-color='%23000000' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388'/%3E %3C/svg%3E") 1;
  font-size:30px;
  font-weight: 800;
  line-height:1.6;
  p{
    margin-bottom:12px;
    .last-text{
     /* line-height:60px; */
   }
  }
`

const NameLabel = styled.strong`
  font-size:40px;
  &:after{
    content : '';
    width:0%;
    height:20px;
    background : #ffcc33;
    transition : all .2s ease;
    transform : rotate(-3deg);  
  }
  &.live,
  &:hover{
    display : inline-block;
    position: relative;
    &:after{
      overflow:hidden;
      display : block;
      position: absolute;
      bottom:10%;
      z-index: -1;
      left:-5%;
      width:120%;
    }
  }
`

const MainSkill = styled.span`
  display:block;
  /* background: linear-gradient(to right, #ff842a, #ffcc33);
  -webkit-background-clip: text;
  color:transparent; */
`
const interestingMotion = keyframes`
  20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}
  40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}
  60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}
  80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}
  to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}
`
const InterestingText = styled.span`
  display:inline-block;
  /* transition : all .2s ease; */
  &.live,
  &:hover{
   animation: ${interestingMotion} 1s ease 0.0s 3;
  }
`

const eyeAnimation = keyframes`
  from{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg)}
  to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}
`
const AwesomeCode = styled.span`
  overflow:hidden;
  position:relative;
  padding-bottom:20px;
  span{
    display:inline-block;
    position:relative;
    transition : all .2s ease;
    line-height:70px;
    &:before,
    &:after{
      content:'';
      position:absolute;
      top:-20px;
      display:block;
      width:5px;
      height:5px;
      border-radius:50%;
      background:transparent;
      animation: ${eyeAnimation} 1.2s ease 0.0s infinite;
    }
  }
  &:after{
    content:'';
    display:none;
    position:absolute;
    bottom:29px;
    left:-200px;
    width:10px;
    height:3px;
    border-radius:0 0 50% 50%;
    border:2px solid #000;
  }
  &.live,
  &:hover{
    &:after{
      display:block;
      left:31px;
    }
    span{
      position:relative;
      top:9px;
      left:1px;
      font-family:'Raleway', sans-serif;
      font-size:0;
      width:30px;
      height:30px;
      border-radius:50%;
      border:4px solid #000;
      &:before,
      &:after{
        top:10px;
        background:#000;
      }
      &:before{
        left:10px;
      }
      &:after{
        left:20px;
      }
    }
  }
`

const Hello = ()=>{
  return(
    <HelloArea>
      <p>I'm <NameLabel>Sujin</NameLabel>, a front-end developer located in Korea.</p>
      <p>I mainly develop web applications with <MainSkill>HTML CSS JAVASCRIPT.</MainSkill></p>
      <p>I have it <InterestingText >interesting</InterestingText> to make a awesome web applications and <span className="last-text">styling with <AwesomeCode>c<span>o</span>ding.</AwesomeCode></span></p>
    </HelloArea>
  )
}

export default Hello;