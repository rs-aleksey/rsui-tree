import React from 'react';

import {
  CardWrapper,
  StyledCard,
  VerticalLine
} from './styled';

const Card = ({ id, type, name, lvl }) => (
  <CardWrapper>
    <VerticalLine />
    <StyledCard type={type}>
      <span>{id}</span>
      <span>{name}</span>
      <strong>{lvl}</strong>
    </StyledCard>
    <VerticalLine />
  </CardWrapper>
);

export default Card;
