import React, { Component } from 'react';
import TreeLayoutVerticalLine from './TreeLayoutVerticalLine';
import TreeLayoutHalfHorizontalLine from './TreeLayoutHalfHorizontalLine';
import TreeLayoutNodeSingleColumn from './TreeLayoutNodeSingleColumn';
import styled from 'styled-components';

const TreeLayoutNodeSingleColumnStyled = styled(TreeLayoutNodeSingleColumn)`
  flex: 1;
`;

export default class TreeLayoutNodeSegmentSplitFooter extends Component {
  render() {
    return (
      <TreeLayoutNodeSingleColumnStyled>
        <TreeLayoutHalfHorizontalLine />
        <TreeLayoutVerticalLine />
      </TreeLayoutNodeSingleColumnStyled>
    );
  }
}
