import React, { Component } from 'react';
import {
  NODE_TYPE_EMAIL,
  NODE_TYPE_SEGMENT_OPENED,
  NODE_TYPE_SEGMENT_CLOSED,
  NODE_TYPE_TIMING,
} from './constants';
import TreeNodeSegment from './TreeNodeSegment';
import TreeNodeEmail from './TreeNodeEmail';
import TreeNodeTiming from './TreeNodeTiming';
import TreeLayoutNodeTwoColumnsContainer from './layout/TreeLayoutNodeTwoColumnsContainer';
import TreeLayoutNodeTwoColumnsColumn from './layout/TreeLayoutNodeTwoColumnsColumn';
import TreeLayoutNodeSingleColumn from './layout/TreeLayoutNodeSingleColumn';
import TreeLayoutNodeExit from './layout/TreeLayoutNodeExit';

export default class TreeNodes extends Component {
  get isOneColumn() {
    const { childrenNodes } = this.props;

    return childrenNodes && childrenNodes.length === 1;
  }

  get isTwoColumns() {
    const { childrenNodes } = this.props;

    return childrenNodes && childrenNodes.length >= 2;
  }

  get shouldRenderExit() {
    const {
      exitRendered,
      delegatedExitRender,
    } = this.props;

    if (
      exitRendered || delegatedExitRender
    ) {
      return false;
    }

    return true;
  }

  renderChildren() {
    const {
      parentNode,
      parentSegment,
      exitRendered,
      delegatedExitRender,
    } = this.props;

    return this.props.childrenNodes.map((child, i) => {
      if (i >= 2) {
        return null;
      }

      if (!child) {
        if (this.isOneColumn) {
          return (
            <TreeLayoutNodeExit />
          );
        }

        if (this.isTwoColumns) {
          return (
            <TreeLayoutNodeTwoColumnsColumn>
              <TreeLayoutNodeExit />
            </TreeLayoutNodeTwoColumnsColumn>
          );
        }

        return null;
      }

      const props = {
        node: child,
        parentNode,
        parentSegment,
        exitRendered,
        delegatedExitRender,
        key: i,
      };
      const { type } = child;

      if (this.isOneColumn) {
        return this.renderChild(type, props);
      }

      if (this.isTwoColumns) {
        return (
          <TreeLayoutNodeTwoColumnsColumn>
            {this.renderChild(type, props)}
          </TreeLayoutNodeTwoColumnsColumn>
        );
      }

      return null;
    });
  }

  renderChild(type, props) {
    switch (type) {
      case NODE_TYPE_SEGMENT_OPENED:
      case NODE_TYPE_SEGMENT_CLOSED:
        return (
          <TreeNodeSegment {...props} />
        );
      case NODE_TYPE_EMAIL:
        return (
          <TreeNodeEmail {...props} />
        );
      case NODE_TYPE_TIMING:
        return (
          <TreeNodeTiming {...props} />
        );
      default:
        throw new Error('Unknown node type');
    }
  }

  render() {
    if (this.isOneColumn) {
      return (
        <TreeLayoutNodeSingleColumn>
          {this.renderChildren()}
        </TreeLayoutNodeSingleColumn>
      );
    }

    if (this.isTwoColumns) {
      return (
        <TreeLayoutNodeTwoColumnsContainer>
          {this.renderChildren()}
        </TreeLayoutNodeTwoColumnsContainer>
      );
    }

    if (this.shouldRenderExit) {
      return (
        <TreeLayoutNodeTwoColumnsColumn>
          <TreeLayoutNodeExit />
        </TreeLayoutNodeTwoColumnsColumn>
      );
    }

    return null;
  }
}
