import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomePage = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    if (username.trim()) {
      navigation.navigate('HomePage', { username });
    } else {
      alert('Please enter your username!');
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            <Text style={styles.titlePrefix}>Sum</Text>
            Trans
        </Text>

      {/* Input View */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Submit Text */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 40,
    marginBottom: 8,
    fontFamily: 'Charm-Bold', // Apply Solitreo font
  },
  titlePrefix: {
    color: '#1791c8',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    fontSize: 12,
    backgroundColor: '#fff',
    fontFamily: 'Helvetica'
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#1791c8',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomePage;
