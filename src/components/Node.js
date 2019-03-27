import React from 'react';

import {
  getNodeById,
  NODE_TYPE_SEGMENT_CLOSED,
  NODE_TYPE_SEGMENT_OPENED
} from '../store';
import Segment from './Segment';
import Card from './Card';


const Node = ({ nodeId, nestingLvl = 0 }) => {
  console.log(nodeId, nestingLvl);
  const node = getNodeById(nodeId);

  if (!node) {
    return null;
  }
  const isSegment = [
    NODE_TYPE_SEGMENT_CLOSED,
    NODE_TYPE_SEGMENT_OPENED
  ].includes(node.type);

  return (
    <React.Fragment>
      <Card {...node} />
      {isSegment ?
        <Segment
          nodeId={nodeId}
          nestingLvl={nestingLvl + 1}
        /> :
        <Node
          nodeId={node.children[0]}
          nestingLvl={nestingLvl}
        />
      }
      {
        node.type === NODE_TYPE_SEGMENT_CLOSED &&
        node.children[2] &&
        <Node
          nodeId={node.children[2]}
          nestingLvl={nestingLvl}
        />
      }
    </React.Fragment>
  );
};


export default Node;

