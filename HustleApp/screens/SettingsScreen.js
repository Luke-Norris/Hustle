import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text >Settings Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SettingsScreen;