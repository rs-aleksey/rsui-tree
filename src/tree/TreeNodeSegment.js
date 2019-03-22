import React, { Component } from 'react';
import TreeNodes from './TreeNodes';
import TreeLayoutNodeCard from './layout/TreeLayoutNodeCard';
import TreeLayoutNodeContainer from './layout/TreeLayoutNodeContainer';
import TreeLayoutVerticalLine from './layout/TreeLayoutVerticalLine';
import TreeLayoutNodeSegmentSplitHeader from './layout/TreeLayoutNodeSegmentSplitHeader';
import TreeLayoutNodeSegmentSplitFooter from './layout/TreeLayoutNodeSegmentSplitFooter';
import {
  NODE_TYPE_SEGMENT_CLOSED,
  NODE_TYPE_SEGMENT_OPENED,
} from './constants';
import TreeLayoutNodeExit from './layout/TreeLayoutNodeExit';

export default class TreeNodeSegment extends Component {
  get shouldRenderChildren() {
    const { node: { type } } = this.props;

    if (type === NODE_TYPE_SEGMENT_OPENED) {
      return true;
    }

    return this.hasChildren;
  }

  get hasChildren() {
    const { node: { children } } = this.props;

    if (children && (children[0] || children[1])) {
      return true;
    }

    return false;
  }

  get shouldRenderFooter() {
    return this.props.node.type === NODE_TYPE_SEGMENT_CLOSED;
  }

  get shouldRenderExit() {
    const {
      node: { type },
      exitRendered,
      delegatedExitRender,
    } = this.props;

    if (exitRendered || delegatedExitRender) {
      return false;
    }

    if (type === NODE_TYPE_SEGMENT_OPENED) {
      return false;
    }

    if (this.hasThirdChild) {
      return false;
    }

    return true;
  }

  get hasThirdChild() {
    const {
      node: {
        type,
        children,
      },
    } = this.props;

    if (type === NODE_TYPE_SEGMENT_OPENED) {
      return false;
    }

    if (!children || !children[2]) {
      return false;
    }

    return true;
  }

  get hasThirdChild() {
    return !!this.thirdChild;
  }

  get thirdChild() {
    const {
      node: { children },
    } = this.props;
    return children && children[2];
  }

  render() {
    const {
      node,
      node: { children },
      exitRendered,
      delegatedExitRender,
    } = this.props;

    return (
      <TreeLayoutNodeContainer>
        <TreeLayoutNodeCard backgroundColor="#AFA">segment</TreeLayoutNodeCard>
        <TreeLayoutVerticalLine />
        <TreeLayoutNodeSegmentSplitHeader />
        {this.shouldRenderChildren && (
          <TreeNodes
            parentNode={node}
            childrenNodes={children}
            parentSegment={node}
            exitRendered={exitRendered || this.shouldRenderExit}
            delegatedExitRender={delegatedExitRender || this.hasThirdChild}
          />
        )}
        {this.shouldRenderFooter && (
          <TreeLayoutNodeSegmentSplitFooter />
        )}
        {this.hasThirdChild && (
          <TreeNodes
            parentNode={node}
            childrenNodes={[this.thirdChild]}
            parentSegment={node}
            exitRendered={exitRendered || this.shouldRenderExit}
            delegatedExitRender={delegatedExitRender}
          />
        )}
        {this.shouldRenderExit && (
          <TreeLayoutNodeExit />
        )}
      </TreeLayoutNodeContainer>
    );
  }
}
