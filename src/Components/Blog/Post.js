import React from 'react';
import { useParams } from 'react-router-dom';


const postList = [
  { topic: 'tank', title: 'Water Changes' },
  { topic: 'tank', title: 'Tips for Clean Tanks' },
  { topic: 'care', title: 'Feeding Fish' },
  { topic: 'care', title: 'Common Diseases'},
  { topic: 'freshwater', title: 'Basic Care for Plants' },
  { topic: 'saltwater', title: 'Basic Guide to start Saltwater' },
  { topic: 'saltwater', title: 'Coral'},
];
// create db for post and comments
// have to create add comment modal
// 



export default function Post() {
  const { topic } = useParams();    
  const topicData = postList.find(post => post.title === topic);
  
  return(
    // this will be a big card with post as leader; comments as child
      <div>
        {topicData && (
          <div id={topicData.id}>
            {/* render post title */}
            <h3>{topicData.name}</h3> 
            <ul>
              {/* render the comments */}
              {postList
                .filter(post => post.topic === topicData.id)
                .map(filteredPost => (
                  
                  <li key={filteredPost.id}>
                    <a href={`/topic/${filteredPost.topic}/${encodeURIComponent(filteredPost.id)}`}>
                      {filteredPost.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
  )
}
