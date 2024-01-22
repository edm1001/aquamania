import { Row, Col } from 'react-bootstrap';
import React, {useState} from 'react';

const topics = [
  { id: 'tank', name: 'Tank Maintenance' },
  { id: 'care', name: 'Fish Care' },
  { id: 'freshwater', name: 'Freshwater' },
  { id: 'saltwater', name: 'Saltwater' },
];

const posts = [
  { id: 1, topic: 'tank', title: 'Water Changes' },
  { id: 1, topic: 'tank', title: 'Tips for Clean Tanks' },
  { id: 2, topic: 'care', title: 'Feeding Fish' },
  { id: 2, topic: 'care', title: 'Common Diseases'},
  { id: 3, topic: 'freshwater', title: 'Basic Care for Plants' },
  { id: 4, topic: 'saltwater', title: 'Basic Guide to start Saltwater' },
  { id: 4, topic: 'saltwater', title: 'Coral'},
];


export default function Topic() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topicId) => {
    setSelectedTopic(prevSelectedTopic => (prevSelectedTopic === topicId ? null : topicId));
  };
      return (
        <>
              <Row>
        <Col as='div' className='w-100'>
          <h3>Topics:</h3>
          <ul className='subject-list'>
            {topics.map(topic => (
              <li key={topic.id}>
                <a href={`#${topic.id}`} onClick={() => handleTopicClick(topic.id)}>
                  {topic.name}
                </a>
              </li>
            ))}
          </ul>
        </Col>

        <Col as='div'>
          {/* Render posts based on selected topic */}
          {selectedTopic && (
            <div id={selectedTopic}>
              <h3>{topics.find(topic => topic.id === selectedTopic)?.name}</h3>
              <ul>
                {posts
                  .filter(post => post.topic === selectedTopic)
                  .map(filteredPost  => (
                    // fix
                    <li key={filteredPost.id}>
                      <a href={`/topic/${filteredPost.topic}/${encodeURIComponent(filteredPost.id)}`}>
                        {filteredPost.title}
                      </a>  
                    </li> 
                    ))}
              </ul>
            </div>
          )}
        </Col>
      </Row>
        </>
      );
    }
  
