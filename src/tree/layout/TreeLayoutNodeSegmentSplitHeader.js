import React, {
  Component,
  Fragment,
} from 'react';
import TreeLayoutNodeTwoColumnsContainer from './TreeLayoutNodeTwoColumnsContainer';
import TreeLayoutNodeTwoColumnsColumn from './TreeLayoutNodeTwoColumnsColumn';
import TreeLayoutVerticalLine from './TreeLayoutVerticalLine';
import TreeLayoutNodeCard from './TreeLayoutNodeCard';
import TreeLayoutNodeContainer from './TreeLayoutNodeContainer';
import TreeLayoutHalfHorizontalLine from './TreeLayoutHalfHorizontalLine';

export default class TreeLayoutNodeSegmentSplitHeader extends Component {
  render() {
    return (
      <Fragment>
        <TreeLayoutHalfHorizontalLine />
        <TreeLayoutNodeTwoColumnsContainer>
          <TreeLayoutNodeTwoColumnsColumn>
            <TreeLayoutNodeContainer>
              <TreeLayoutVerticalLine />
              <TreeLayoutNodeCard backgroundColor="#CCC">yes</TreeLayoutNodeCard>
              <TreeLayoutVerticalLine />
            </TreeLayoutNodeContainer>
          </TreeLayoutNodeTwoColumnsColumn>
          <TreeLayoutNodeTwoColumnsColumn>
            <TreeLayoutNodeContainer>
              <TreeLayoutVerticalLine />
              <TreeLayoutNodeCard backgroundColor="#CCC">no</TreeLayoutNodeCard>
              <TreeLayoutVerticalLine />
            </TreeLayoutNodeContainer>
          </TreeLayoutNodeTwoColumnsColumn>
        </TreeLayoutNodeTwoColumnsContainer>
      </Fragment>
    );
  }
}
