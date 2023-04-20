import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Form from '../components/Form';

const JobPostingScreen = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <View>
      <Text>Job Posting Screen</Text>
      <Button title="Create Job" onPress={() => setShowForm(true)} />
      <Form isVisible={showForm} onClose={() => setShowForm(false)} />
    </View>
  );
};

export default JobPostingScreen;