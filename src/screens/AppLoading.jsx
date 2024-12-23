import React, { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import styled from 'styled-components/native';

import LoadingImageAsset from '../../assets/images/loading.png';

export default function AppLoading() {
  const spinValue = useRef(new Animated.Value(0)).current;

  // animation config
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000, // 1 second
        easing: Easing.linear, // smooth & constant
        useNativeDriver: true, // native drivers for constance
      })
    ).start();
  }, [spinValue]);

  // turns values into rotation
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'], // from 0 to 360 deg
  });

  return (
    <AppLoadingWrapper>
      <AnimatedImage
        source={LoadingImageAsset}
        style={{ transform: [{ rotate: spin }] }}
        resizeMode="contain"
      />
    </AppLoadingWrapper>
  );
}

// styles
const AppLoadingWrapper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const AnimatedImage = styled(Animated.Image)`
  width: 55px;
  height: 55px;
`;