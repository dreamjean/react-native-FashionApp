import React from 'react';
import styled from 'styled-components';

import { calendar } from '../../../config';
import Text from '../../styles/Text';

const { width, SLIDE_HEIGHT, CELL_NUM } = calendar;

const containerHeight = SLIDE_HEIGHT + CELL_NUM;

const SlideHeading = ({ header, right }) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ];

  return (
    <Container>
      <Header style={{ transform }}>
        <Text heading>{header}</Text>
      </Header>
    </Container>
  );
};

const Container = styled.View`
  width: ${width}px;
  /* height: ${containerHeight}px; */
`;

const Header = styled.View`
  height: 100px;
  align-items: center;
  justify-content: center;
`;

export default SlideHeading;
