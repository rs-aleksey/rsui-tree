import styled from 'styled-components';

const TreeLayoutNodeCard =  styled.div`
  border: 2px solid #000;
  padding: 20px;
  background-color: #FFF;
  align-self: center;
  ${props => props.backgroundColor ? `
  background-color: ${props.backgroundColor};
  ` : ''}
`;

TreeLayoutNodeCard.displayName = 'TreeLayoutNodeCard';

export default TreeLayoutNodeCard;
