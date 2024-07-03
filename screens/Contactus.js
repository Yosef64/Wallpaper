import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ImageBackground } from 'react-native';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !comment) {
      Alert.alert('Error', 'Please fill all the fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your backend endpoint
      const response = await fetch('https://your-backend-endpoint.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, comment }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();

      Alert.alert('Success', 'Your message has been sent.');
      setName('');
      setEmail('');
      setComment('');
    } catch (error) {
      Alert.alert('Error', 'There was a problem sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ImageBackground source={require("../assets/black_gold.jpeg")} style={styles.back}>
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.textArea}
        placeholder="Comment"
        value={comment}
        onChangeText={setComment}
        multiline={true}
        numberOfLines={4}
      />
      <Button
        title={isSubmitting ? 'Sending...' : 'Submit'}
        onPress={handleSubmit}
        disabled={isSubmitting}
      />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  back:{
         flex:1,
  },
  
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor:"white",
    borderRadius:10
  },
  textArea: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor:"white",
    borderRadius:10
  },
});

export default ContactUs;
