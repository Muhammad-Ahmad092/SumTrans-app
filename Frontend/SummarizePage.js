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

const GEMINI_API_KEY = 'AIzaSyC4NHDtetwGPNwfMWMtg0eCnZc7sy41nY8';


const SummarizePage = () => {
  const [inputText, setInputText] = useState('');
  const [summaryText, setSummaryText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    const prompt = `Summarize the following text:\n\n"${inputText}"`;

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
      const summary = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      setSummaryText(summary || 'No summary found.');
    } catch (error) {
      console.error('Summarization error:', error);
      setSummaryText('Error during summarization.');
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
        {/* Custom Styled Heading */}
        <Text style={styles.heading}>
          <Text style={styles.headingBlack}>Text </Text>
          <Text style={styles.headingColor}>Summarizer</Text>
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter text to summarize"
          multiline
          value={inputText}
          onChangeText={setInputText}
        />

        <TouchableOpacity style={styles.button} onPress={handleSummarize}>
          <Text style={styles.buttonText}>Summarize</Text>
        </TouchableOpacity>

        {loading ? (
          <ActivityIndicator size="large" color="#1791c8" style={{ marginTop: 20 }} />
        ) : summaryText ? (
          <View style={styles.outputContainer}>
            <Text style={styles.outputLabel}>Summary:</Text>
            <Text style={styles.outputText}>{summaryText}</Text>
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
    color: '#1791c8', // Choose your accent color here
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

export default SummarizePage;
