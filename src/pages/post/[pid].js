import { useRouter } from 'next/router'

// export async function getStaticProps() {
//   const result = await db.collection('feeds').orderBy('updated_at', 'desc').get();
//   const newFeeds = result.docs.map( doc =>{
//     const docData = doc.data();
//     docData.uid = doc.id;
//     docData.created_at = moment(docData.created_at).format('LT L');
//     return docData;
//   });

//   return {
//     props : {
//       feeds: newFeeds
//     }
//   };
// }

const Post = (props) => {
  const router = useRouter()
  const { pid } = router.query

return <p>Post: {pid}</p>
}

export default Post