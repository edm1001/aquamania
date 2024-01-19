import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Topic from '../Components/Topic';

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

export default function Blog() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topicId) => {
    setSelectedTopic(prevSelectedTopic => (prevSelectedTopic === topicId ? null : topicId));
  };

  return (
    <Container>
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
          {/* Row will have Posts */}
          <Row>
            <Topic/>
          </Row>
      </Container>
  );
}
/* make another row to have the topic and comments under it 
   the post will have comment and likes functionality 
   the 
*/