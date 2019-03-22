import styled from 'styled-components';

const TreeLayoutVerticalLine = styled.div`
  height: 20px;
  position: relative;
  flex: 1;
  :after {
      content:"";
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 50%;
      border-left: 2px solid #000;
      transform: translate(-50%);
  }
`;

TreeLayoutVerticalLine.displayName = 'TreeLayoutVerticalLine';

export default TreeLayoutVerticalLine;
