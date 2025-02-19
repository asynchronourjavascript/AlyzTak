import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatBubble({ message, isUser, timestamp }: ChatBubbleProps) {
  const theme = useTheme();

  return (
    <View style={[
      styles.container,
      isUser ? styles.userContainer : styles.aiContainer,
      { backgroundColor: isUser ? theme.colors.primary : theme.colors.surface }
    ]}>
      <Text style={[
        styles.message,
        { color: isUser ? 'white' : theme.colors.text }
      ]}>
        {message}
      </Text>
      <Text style={[
        styles.timestamp,
        { color: isUser ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)' }
      ]}>
        {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginVertical: 4,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  userContainer: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  aiContainer: {
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  message: {
    fontSize: 16,
    lineHeight: 20,
  },
  timestamp: {
    fontSize: 12,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
});