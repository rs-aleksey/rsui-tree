import React, { Component } from 'react';
import TreeNodes from './TreeNodes';
import TreeLayoutNodeCard from './layout/TreeLayoutNodeCard';
import TreeLayoutNodeContainer from './layout/TreeLayoutNodeContainer';
import TreeLayoutVerticalLine from './layout/TreeLayoutVerticalLine';
import styled from 'styled-components';

const TreeLayoutNodeCardStyled = styled(TreeLayoutNodeCard)`
`;

export default class TreeNodeEmail extends Component {
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
        <TreeLayoutNodeCardStyled backgroundColor="#FAA">email</TreeLayoutNodeCardStyled>
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
