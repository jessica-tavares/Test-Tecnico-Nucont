import React from 'react';
import { ReactComponent as MarkTopic } from '../assets/Ellipse47.svg'

function Topics({text}) {
  return (
    <div className="topics">
      <MarkTopic />
      <p className="topic-text">{text}</p>
    </div>
  )
}

export default Topics
