import React, { Component } from 'react';
import TreeLayoutNodeContainer from './TreeLayoutNodeContainer';
import TreeLayoutNodeCard from './TreeLayoutNodeCard';
import TreeLayoutVerticalLine from './TreeLayoutVerticalLine';
import styled from 'styled-components';

const TreeLayoutNodeContainerStyled = styled(TreeLayoutNodeContainer)`
  flex: auto;
`;

export default class TreeLayoutNodeExit extends Component {
  render() {
    return (
      <TreeLayoutNodeContainerStyled>
        <TreeLayoutVerticalLine />
        <TreeLayoutNodeCard backgroundColor="#CCC">exit</TreeLayoutNodeCard>
      </TreeLayoutNodeContainerStyled>
    );
  }
}
