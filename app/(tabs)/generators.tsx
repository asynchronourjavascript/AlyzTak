import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Searchbar, SegmentedButtons } from 'react-native-paper';
import { GeneratorCard } from '../../src/components/generators/GeneratorCard';
import { GeneratedContent } from '../../src/components/generators/GeneratedContent';

type GeneratorType = 'conversation' | 'pickup' | 'rewriter';

export default function GeneratorsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<GeneratorType>('conversation');
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleGenerate = (type: GeneratorType) => {
    // TODO: Integrate with DeepSeek API
    const mockResponses = {
      conversation: "Have you ever wondered what your pet would say if they could talk for just one day?",
      pickup: "Are you a magician? Because whenever I look at you, everyone else disappears.",
      rewriter: "I've refined your message to sound more engaging while maintaining your authentic voice.",
    };
    
    setGeneratedContent(mockResponses[type]);
  };

  const handleFavorite = () => {
    if (generatedContent) {
      if (favorites.includes(generatedContent)) {
        setFavorites(favorites.filter(f => f !== generatedContent));
      } else {
        setFavorites([...favorites, generatedContent]);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium" style={styles.title}>Generators</Text>
        <Searchbar
          placeholder="Search saved items..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
        <SegmentedButtons
          value={selectedType}
          onValueChange={setSelectedType as (value: string) => void}
          buttons={[
            { value: 'conversation', label: 'Conversation' },
            { value: 'pickup', label: 'Pick-up Lines' },
            { value: 'rewriter', label: 'Rewriter' },
          ]}
          style={styles.segmentedButtons}
        />
      </View>
      
      <ScrollView style={styles.content}>
        {generatedContent ? (
          <GeneratedContent
            content={generatedContent}
            onRegenerate={() => handleGenerate(selectedType)}
            onFavorite={handleFavorite}
            isFavorite={favorites.includes(generatedContent)}
          />
        ) : (
          <>
            <GeneratorCard
              title="Conversation Starters"
              description="Generate engaging conversation starters for any situation"
              icon="chat-processing"
              onPress={() => handleGenerate('conversation')}
            />
            <GeneratorCard
              title="Pick-up Lines"
              description="Create clever and fun pick-up lines"
              icon="heart"
              onPress={() => handleGenerate('pickup')}
            />
            <GeneratorCard
              title="Message Rewriter"
              description="Refine and improve your messages"
              icon="pencil"
              onPress={() => handleGenerate('rewriter')}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  header: {
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  title: {
    marginBottom: 16,
  },
  searchBar: {
    marginBottom: 16,
  },
  segmentedButtons: {
    marginBottom: 8,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});