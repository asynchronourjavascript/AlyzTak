import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text, Button, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface GeneratorCardProps {
  title: string;
  description: string;
  icon: string;
  onPress: () => void;
}

export function GeneratorCard({ title, description, icon, onPress }: GeneratorCardProps) {
  const theme = useTheme();

  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Content style={styles.content}>
        <MaterialCommunityIcons 
          name={icon} 
          size={32} 
          color={theme.colors.primary}
          style={styles.icon}
        />
        <Text variant="titleLarge" style={styles.title}>{title}</Text>
        <Text variant="bodyMedium" style={styles.description}>{description}</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={onPress}>
          Generate
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    elevation: 2,
  },
  content: {
    paddingVertical: 16,
  },
  icon: {
    marginBottom: 12,
  },
  title: {
    marginBottom: 8,
  },
  description: {
    opacity: 0.7,
  },
});