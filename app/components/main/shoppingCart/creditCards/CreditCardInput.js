import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components';

import { calendar, colors, images } from '../../../../config';
import { Image, Text } from '../../../../styles';

const { CDCARD_WIDTH, CDCARD_HEIGHT } = calendar;
const plusBoxWidth = CDCARD_WIDTH * 0.75;
const plusBoxHeight = CDCARD_HEIGHT * 0.7;

const CreditCardInput = ({ card, primary, onAddCard, onChangeCard }) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    if (!card) () => onAddCard();

    () => onChangeCard();
    setSelected((prev) => !prev);
  };

  return (
    <Container>
      <Pressable style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })} onPress={handlePress}>
        {card && (
          <Box {...{ primary, selected }}>
            <Image
              logo
              {...{ primary }}
              resizeMode={primary ? 'contain' : 'cover'}
              source={primary ? images[9] : images[10]}
            />

            <InfoWrapper {...{ primary }}>
              <Info mtp mbt title3 {...{ primary }}>
                **** {card.last4Digits}
              </Info>
              <Info caption opacity={0.7} {...{ primary }}>
                Expiration
              </Info>
              <Info opacity={0.9} {...{ primary }}>
                {card.expiration}
              </Info>
            </InfoWrapper>
          </Box>
        )}
        {!card && (
          <PlusBox>
            <Feather name="plus" size={36} color={colors.white} />
          </PlusBox>
        )}
      </Pressable>
      {selected && card && <Dot {...{ primary }} />}
    </Container>
  );
};

const Container = styled.View`
  align-items: center;

  ${({ theme: { space } }) => ({
    marginRight: space.m2,
  })}
`;

const PlusBox = styled.View`
  width: ${plusBoxWidth}px;
  height: ${plusBoxHeight}px;
  justify-content: center;
  align-items: center;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.white2,
    borderRadius: radii.s2,
  })}
`;

const Box = styled.View`
  width: ${CDCARD_WIDTH}px;
  height: ${CDCARD_HEIGHT}px;

  ${({ primary, selected, theme: { colors, radii, space } }) => ({
    backgroundColor: primary ? colors.primary : colors.white,
    borderRadius: radii.s2,
    padding: space.m1,
    opacity: selected ? 1 : 0.5,
  })}
`;

const Dot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;

  ${({ primary, theme: { colors, space } }) => ({
    backgroundColor: primary ? colors.primary : colors.white,
    marginVertical: space.m1,
  })}
`;

const InfoWrapper = styled.View`
  ${({ primary, theme: { space } }) => ({
    marginLeft: space.m1,
    marginTop: primary ? space.s1 : space.n,
  })}
`;

const Info = styled(Text)`
  ${({ primary, theme: { colors } }) => ({
    color: primary ? colors.white : colors.text,
  })}
`;

export default CreditCardInput;
