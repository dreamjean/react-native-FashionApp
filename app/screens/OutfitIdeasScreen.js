import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDerivedValue } from 'react-native-reanimated';
import { useTiming } from 'react-native-redash';
import styled from 'styled-components';

import { BackgroundStyled, Card, CategoryBar, HeaderBar } from '../components/main';
import cards from '../data/cards';
import { View } from '../styles';

const step = 1 / (cards.length - 1);

const OutfitIdeasScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTiming(currentIndex);

  return (
    <View container>
      <HeaderBar
        title="Outfit Ideas"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping', onPress: () => true }}
      />

      <CategoryBar />
      <Box>
        <BackgroundStyled />
        {cards.map(({ image, index }) => {
          const position = useDerivedValue(() => index * step - aIndex.value);

          return (
            currentIndex < index * step + step && (
              <Card
                key={index}
                position={position}
                image={image}
                step={step}
                onSwipe={() => setCurrentIndex((prev) => prev + step)}
              />
            )
          );
        })}
      </Box>
      <StatusBar style="dark" />
    </View>
  );
};

const Box = styled.View`
  flex: 1;
`;

export default OutfitIdeasScreen;
