import React, { Component } from 'react';
import TreeNodes from './TreeNodes';
import TreeLayoutNodeCard from './layout/TreeLayoutNodeCard';
import TreeLayoutNodeContainer from './layout/TreeLayoutNodeContainer';
import TreeLayoutVerticalLine from './layout/TreeLayoutVerticalLine';

export default class TreeNodeTiming extends Component {
  render() {
    const {
      node,
      node: { children },
      parentSegment,
      exitRendered,
      delegatedExitRender,
    } = this.props;

    return (
      <TreeLayoutNodeContainer>
        <TreeLayoutNodeCard backgroundColor="#AAF">timing</TreeLayoutNodeCard>
        <TreeLayoutVerticalLine />
        <TreeNodes
          parentNode={node}
          childrenNodes={children}
          parentSegment={parentSegment}
          exitRendered={exitRendered}
          delegatedExitRender={delegatedExitRender}
        />
      </TreeLayoutNodeContainer>
    );
  }
}
