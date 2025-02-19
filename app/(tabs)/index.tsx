import { View, StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Welcome to AlyzTak
      </Text>
      <Text variant="bodyLarge" style={styles.subtitle}>
        Your Social Interaction Assistant
      </Text>

      <View style={styles.cardsContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Chat with AI</Text>
            <Text variant="bodyMedium">Get real-time conversation advice</Text>
          </Card.Content>
          <Card.Actions>
            <Link href="/chat" asChild>
              <Button mode="contained">Start Chat</Button>
            </Link>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Generate Ideas</Text>
            <Text variant="bodyMedium">Conversation starters & pick-up lines</Text>
          </Card.Content>
          <Card.Actions>
            <Link href="/generators" asChild>
              <Button mode="contained">Generate</Button>
            </Link>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Play Games</Text>
            <Text variant="bodyMedium">Fun icebreakers & scenario training</Text>
          </Card.Content>
          <Card.Actions>
            <Link href="/games" asChild>
              <Button mode="contained">Play Now</Button>
            </Link>
          </Card.Actions>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f6f6f6',
  },
  title: {
    textAlign: 'center',
    marginTop: 48,
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 32,
    opacity: 0.7,
  },
  cardsContainer: {
    gap: 16,
  },
  card: {
    marginBottom: 16,
  },
});