import React from 'react';
import { Container, Row} from 'react-bootstrap';
import Topic from '../Components/Blog/Topic.js';
import Post from '../Components/Blog/Post.js';
// import { Link } from 'react-router-dom';

export default function Blog() {

  return (
    <Container>
      <Topic/>
          {/* Row will have Posts */}
          <Row> 
            <Post/>
          </Row>
      </Container>
  );
}
/* make another row to have the topic and comments under it 
   the post will have comment and likes functionality 
   the 
*/