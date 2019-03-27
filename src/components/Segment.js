import React from 'react';

import {
  NODE_TYPE_SEGMENT_CLOSED,
  getNodeById,
} from '../store';
import Node from './Node';

import {
  Branch,
  HorizontalLine,
  StyledSegment,
  NestingInfo,
  VerticalLine,
  VerticalLineContainer,
  VerticalLineContainerStreatchable
} from './styled';

const SegmentBranch = ({nodeId, parentNodeType, nestingLvl, isLeft}) => {
  console.log(nodeId, parentNodeType, nestingLvl, isLeft);
  return (
    <Branch>
      <HorizontalLine left={isLeft}/>
      {nodeId ?
        <Node
          nodeId={nodeId}
          nestingLvl={nestingLvl}
        /> :
        <VerticalLineContainerStreatchable>
          <VerticalLine/>
        </VerticalLineContainerStreatchable>
      }
      {parentNodeType === NODE_TYPE_SEGMENT_CLOSED && <HorizontalLine left={isLeft}/>}
    </Branch>
  );
};

const Segment = ({nodeId, nestingLvl}) => {
  console.log('SEGMENT', nodeId, nestingLvl);

  const node = getNodeById(nodeId);

  return (
    <React.Fragment>
      <StyledSegment>
        <NestingInfo>
          Nested lvl: {nestingLvl}
        </NestingInfo>
        <SegmentBranch
          isLeft={true}
          nestingLvl={nestingLvl}
          nodeId={node.children[0]}
          parentNodeType={node.type}
        />
        <SegmentBranch
          isLeft={false}
          nestingLvl={nestingLvl}
          nodeId={node.children[1]}
          parentNodeType={node.type}
        />
      </StyledSegment>
      {node.type === NODE_TYPE_SEGMENT_CLOSED &&
      <VerticalLineContainer>
        <VerticalLine/>
      </VerticalLineContainer>
      }
    </React.Fragment>
  );
};

export default Segment;