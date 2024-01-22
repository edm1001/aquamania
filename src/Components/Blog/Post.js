import React from 'react'

export default function Post() {
  const post = [
    {}
  ]
  return(
    <div>
      post component
    </div>
  )
}
// const { topic } = useParams();    
// const topicData = topics.find(topic => topic.id === topic);

// <div>
//   {topicData && (
//     <div id={topicData.id}>
//       <h3>{topicData.name}</h3>
//       <ul>
//         {posts
//           .filter(post => post.topic === topicData.id)
//           .map(filteredPost => (
//             <li key={filteredPost.id}>
//               <a href={`/topic/${filteredPost.topic}/${encodeURIComponent(filteredPost.id)}`}>
//                 {filteredPost.title}
//               </a>
//             </li>
//           ))}
//       </ul>
//     </div>
//   )}
// </div>