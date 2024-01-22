    import React from 'react';
    import { useParams } from 'react-router-dom';
    import {topics} from '../../Pages/Blog.js'

    export default function Topic({ selectedTopic, posts }) {
      const { topic } = useParams();    
      const topicData = topics.find(topic => topic.id === topic);

      return (
        <div>
          {topicData && (
            <div id={topicData.id}>
              <h3>{topicData.name}</h3>
              <ul>
                {posts
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
      );
    }
  
