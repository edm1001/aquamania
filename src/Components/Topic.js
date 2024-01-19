import React from 'react'
import { useParams } from 'react-router-dom';

export default function Topic() {
  const {topic} = useParams();
  const selectedTopic = topics.find(t => t.id === topic); 

  return (
    <div>Topic</div>
  )
}
