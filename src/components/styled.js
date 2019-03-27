import styled from 'styled-components';

import {
  NODE_TYPE_EMAIL,
  NODE_TYPE_TIMING,
  NODE_TYPE_SEGMENT_CLOSED,
  NODE_TYPE_SEGMENT_OPENED,
} from '../store';


export const StyledPathBuilder = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  background-color: azure;
`;

export const Path = styled.div`
  border: 1px dotted blue;
  display: block;
`;

export const VerticalLine = styled.div`
  height: 20px;
  width: 0;
  position: relative;
  flex: 1;
  border: 1px solid black;
`;

export const StyledSegment = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
  background-color: rgba(255,5,0,0.18);
`;

export const Branch = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;  
  width: 50%;
`;

export const HorizontalLine = styled.div`
    width: calc(50% + 2px);
    height: 2px;
    background-color: #000;
    margin-left: calc(${({left}) => left ? '50%' : '0%'} - 1px);
`;

export const NestingInfo = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 8px;
`;

export const VerticalLineContainerStreatchable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const VerticalLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

const mapTypeToBGColor = {
  [NODE_TYPE_EMAIL]: 'aqua',
  [NODE_TYPE_SEGMENT_OPENED]: 'green',
  [NODE_TYPE_SEGMENT_CLOSED]: 'red',
  [NODE_TYPE_TIMING]: 'yellow',
};

export const StyledCard = styled.div`
  min-width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({type}) => mapTypeToBGColor[type]}
  padding: 10px;
`;
