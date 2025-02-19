import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function GamesScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Games</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f6f6f6',
  },
});