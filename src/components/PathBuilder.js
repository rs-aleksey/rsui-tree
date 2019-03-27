import React from 'react';

import Node from './Node';
import {
  Path,
  StyledPathBuilder,
} from './styled';
import {
  getFirstNodeForPath,
  getPathById,
} from '../store';

const PathBuilder = ({ pathId }) => {
  const path = getPathById(pathId);
  const firstNode = getFirstNodeForPath(pathId);
  return (
    <StyledPathBuilder>
      <h1>Path name: {path.name}</h1>
      <h2>Status: {path.status}</h2>
      <Path>
        <Node nodeId={firstNode.id} pathId={pathId} />
      </Path>
    </StyledPathBuilder>
  );
};

export default PathBuilder;
