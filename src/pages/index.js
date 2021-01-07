import React, { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import { useStoreAction } from '@store'
import { useObserver } from 'mobx-react-lite'
import MainLayout from '@components/layout/MainLayout'
import Hello from '@components/Hello'

const Index = (props) => {
  const ThemeModule = useStoreAction('Blog');
  return useObserver(() => {
   return (
     <MainLayout>
      <div className="container">
        <Hello></Hello>
      </div>
     </MainLayout>
   )
  })
}

export default Index ;