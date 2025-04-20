import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OpeningPage = () => {
  const navigation = useNavigation();
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Start fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000, // 2 seconds for fade-in
      useNativeDriver: true,
    }).start();

    // Navigate after 10 seconds
    const timer = setTimeout(() => {
      navigation.replace('WelcomePage');
    }, 6000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.paragraph}>
          Summarize your message and Content. Translate your message into 90 Languages.
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 200,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 250,
    fontFamily: 'Charm-Regular',
  },
});

export default OpeningPage;
