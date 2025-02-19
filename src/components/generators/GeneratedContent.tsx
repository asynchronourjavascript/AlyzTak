import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card, IconButton, useTheme } from 'react-native-paper';
import * as Clipboard from 'expo-clipboard';

interface GeneratedContentProps {
  content: string;
  onRegenerate: () => void;
  onFavorite: () => void;
  isFavorite: boolean;
}

export function GeneratedContent({ 
  content, 
  onRegenerate, 
  onFavorite,
  isFavorite 
}: GeneratedContentProps) {
  const theme = useTheme();

  const handleCopy = async () => {
    await Clipboard.setStringAsync(content);
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="bodyLarge" style={styles.content}>
          {content}
        </Text>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <IconButton
          icon={isFavorite ? 'heart' : 'heart-outline'}
          size={24}
          onPress={onFavorite}
          iconColor={isFavorite ? theme.colors.error : theme.colors.primary}
        />
        <IconButton
          icon="content-copy"
          size={24}
          onPress={handleCopy}
        />
        <Button 
          mode="contained-tonal" 
          onPress={onRegenerate}
          style={styles.regenerateButton}
        >
          Regenerate
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 16,
  },
  content: {
    lineHeight: 24,
  },
  actions: {
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
  },
  regenerateButton: {
    marginLeft: 8,
  },
});