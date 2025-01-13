import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomePage = ({ route, navigation }) => {
  const { username } = route.params; // Get username from previous page

  return (
    <View style={styles.container}>
      {/* Greeting with Username */}
      <Text style={styles.greeting}>Hi, {username}!</Text>

      {/* Title */}
      <Text style={styles.title}>Welcome to the Home Page</Text>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        {/* Translate Button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('TranslatePage')}
        >
          <Icon name="translate" size={40} color="#1791c8" style={styles.icon} />
          <Text style={styles.headline}>Translate</Text>
          <Text style={styles.paragraph}>
            Convert text into another language.
          </Text>
        </TouchableOpacity>

        {/* Summarize Button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('SummarizePage')}
        >
          <Icon name="short-text" size={40} color="#1791c8" style={styles.icon} />
          <Text style={styles.headline}>Summarize</Text>
          <Text style={styles.paragraph}>
            Get a concise summary of your text.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#1791c8',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    width: '45%',
    height: 150,
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  icon: {
    marginBottom: 10,
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#black',
  },
  paragraph: {
    fontSize: 12,
    color: '#1791c8',
    textAlign: 'center',
    marginTop: 5,
    maxWidth: 100,
  },
});

export default HomePage;
