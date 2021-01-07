import React, { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import { useStoreAction } from '@store'
import { useObserver } from 'mobx-react-lite'
import db from '../common/db'
import moment from 'moment'
import Link from 'next/link';
import MainLayout from '@components/layout/MainLayout'
import Hello from '@components/Hello'

export async function getStaticProps() {
  const result = await db.collection('feeds').orderBy('updated_at', 'desc').get();
  const newFeeds = result.docs.map( doc =>{
    const docData = doc.data();
    docData.uid = doc.id;
    docData.created_at = moment(docData.created_at).format('LT L');
    return docData;
  });

  return {
    props : {
      feeds: newFeeds
    }
  };
}

const Index = (props) => {
  const ThemeModule = useStoreAction('Blog');
  const refFeedTextArea = useRef();
  const refFeedTitle = useRef();
  const refFeedSeoTitle = useRef();
  const [feedList, setFeedList] = useState([]);
  const setPost = () => {
    const feed = {
      // categroy : '',
      content : refFeedTextArea.current.value || '',
      title : refFeedTitle.current.value || '제목없음',
      // seoDescription : refFeedSeoTitle.current.value || '',
      // tags : [],
      created_at : +new Date(),
      updated_at : +new Date(),
      author : {
        authid : ThemeModule.state.auth.uid || '',
        displayName : ThemeModule.state.auth.displayName || '',
        email : ThemeModule.state.auth.email || '',
      }
    }

    db.collection('feeds')
      .add( feed )
      .then( res => {
        console.log('res',res);
        refFeedTextArea.focus()
      })
      .catch( e => console.log(e.message))
  }

  useEffect(()=>{
    setFeedList(props.feeds)
  },[props]);

  useEffect(()=>{
    db.collection('feeds')
    .orderBy('updated_at', 'desc')
    .onSnapshot(result => {
      const newFeeds = result.docs.map( doc =>{
        const docData = doc.data();
        docData.uid = doc.id;
        console.log(doc);
        docData.created_at = moment(docData.created_at).format('LT L');
        return docData;
      })
      setFeedList(newFeeds)
    })
  },[]);

  return useObserver(() => {
   return (
     <MainLayout>
      <div className="container">
        {/* { ThemeModule.state.auth.uid && ( */}
          <>
            <form className="form-area">
              제목 : <input type="text" ref={refFeedTitle} /><br/>
              내용 :<br/>
              <textarea ref={refFeedTextArea} row="3"></textarea>
              seo : <input type="text" ref={refFeedSeoTitle} />
              <br/>
              <button type="button" onClick={_ =>{setPost()}}>입력</button>
            </form>
          </>
        {/* )} */}
        <ul>
          {feedList && feedList.map( list => {
            return (
              <li key={list.uid}>
                <Link href='/post/[id]' as='/post/100'>
                  <a>{list.title}</a>
                </Link>
                <span className="created_at">{list.created_at}</span>
              </li>
            )
          })}
        </ul>
        <Hello></Hello>
      </div>
     </MainLayout>
   )
  })
}

export default Index ;