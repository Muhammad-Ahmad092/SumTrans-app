import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const GEMINI_API_KEY = 'AIzaSyC4NHDtetwGPNwfMWMtg0eCnZc7sy41nY8';

const TranslatePage = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Urdu');
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    const prompt = `Translate the following text into ${selectedLanguage} only in natural-sounding translation on the required langauage answer:\n\n"${inputText}"`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,      
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const translation = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      setTranslatedText(translation || 'No translation found.');
    } catch (error) {
      console.error('Translation error:', error);
      setTranslatedText('Error during translation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Fancy Heading */}
        <Text style={styles.heading}>
          <Text style={styles.headingBlack}>Text </Text>
          <Text style={styles.headingColor}>Translator</Text>
        </Text>

        {/* Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter text to translate"
          multiline
          value={inputText}
          onChangeText={setInputText}
        />

        {/* Language Dropdown */}
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}>Select Language:</Text>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Urdu" value="Urdu" />
            <Picker.Item label="Arabic" value="Arabic" />
            <Picker.Item label="French" value="French" />
            <Picker.Item label="German" value="German" />
            <Picker.Item label="Spanish" value="Spanish" />
            <Picker.Item label="Hindi" value="Hindi" />
            <Picker.Item label="Chinese" value="Chinese" />
            <Picker.Item label="Russian" value="Russian" />
            <Picker.Item label="Japanese" value="Japanese" />
            <Picker.Item label="Korean" value="Korean" />
            <Picker.Item label="Bengali" value="Bengali" />
            <Picker.Item label="Bulgarian" value="Bulgarian" />
            <Picker.Item label="Croatian" value="Croatian" />
            <Picker.Item label="Czech" value="Czech" />
            <Picker.Item label="Danish" value="Danish" />
            <Picker.Item label="Dutch" value="Dutch" />
            <Picker.Item label="English" value="English" />
            <Picker.Item label="Estonian" value="Estonian" />
            <Picker.Item label="Finnish" value="Finnish" />
            <Picker.Item label="Greek" value="Greek" />
            <Picker.Item label="Hebrew" value="Hebrew" />
            <Picker.Item label="Hungarian" value="Hungarian" />
            <Picker.Item label="Indonesian" value="Indonesian" />
            <Picker.Item label="Italian" value="Italian" />
            <Picker.Item label="Latvian" value="Latvian" />
            <Picker.Item label="Lithuanian" value="Lithuanian" />
            <Picker.Item label="Norwegian" value="Norwegian" />
            <Picker.Item label="Polish" value="Polish" />
            <Picker.Item label="Portuguese" value="Portuguese" />
            <Picker.Item label="Romanian" value="Romanian" />
            <Picker.Item label="Serbian" value="Serbian" />
            <Picker.Item label="Slovak" value="Slovak" />
            <Picker.Item label="Slovenian" value="Slovenian" />
            <Picker.Item label="Swahili" value="Swahili" />
            <Picker.Item label="Swedish" value="Swedish" />
            <Picker.Item label="Thai" value="Thai" />
            <Picker.Item label="Turkish" value="Turkish" />
            <Picker.Item label="Ukrainian" value="Ukrainian" />
            <Picker.Item label="Vietnamese" value="Vietnamese" />
            <Picker.Item label="Welsh" value="Welsh" />
            <Picker.Item label="Filipino" value="Filipino" />
          </Picker>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleTranslate}>
          <Text style={styles.buttonText}>Translate</Text>
        </TouchableOpacity>

        {/* Output */}
        {loading ? (
          <ActivityIndicator size="large" color="#1791c8" style={{ marginTop: 20 }} />
        ) : translatedText ? (
          <View style={styles.outputContainer}>
            <Text style={styles.outputLabel}>Translated Text:</Text>
            <Text style={styles.outputText}>{translatedText}</Text>
          </View>
        ) : null}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    paddingTop: 60,
    fontFamily: 'Charm-Bold',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  headingBlack: {
    color: '#000',
  },
  headingColor: {
    color: '#1791c8',
  },
  input: {
    width: '100%',
    minHeight: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
  dropdownContainer: {
    width: '60%',
    marginTop: 15,
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  picker: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1791c8',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  outputContainer: {
    marginTop: 30,
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  outputLabel: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
    color: '#1791c8',
  },
  outputText: {
    fontSize: 16,
    color: '#333',
  },
});

export default TranslatePage;
